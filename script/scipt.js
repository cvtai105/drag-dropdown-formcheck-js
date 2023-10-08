addDropDownFeature();
addDragFeature();
addRegisterFeature(); //alo add check form feature
addClickEventOnProduct();
addSelectBtnEvent();
addClearTableEvent();

//navagation bar


//news dropdown
function addDropDownFeature() {
    const dropBtnCollection = document.getElementsByClassName("dropbtn");
    const compressBtnCollection = document.getElementsByClassName("compressbtn");
    for (let btn of dropBtnCollection){
        btn.addEventListener("click", dropNews);
    }
    for (let btn of compressBtnCollection){
        btn.addEventListener("click", compressNews);
    }

    function dropNews(e) {
        const btn = e.srcElement;
        const news = btn.parentNode.parentNode;
        news.classList.add("droped");
    }

    function compressNews(e) {
        const btn = e.srcElement;
        const news = btn.parentNode.parentNode;
        news.classList.remove("droped");
    }
}

//news drag
function addDragFeature() {
    const dragBtnCollection = document.getElementsByClassName("dragbtn");
    
    for(const btn of dragBtnCollection){
        //two parameter handler test
        btn.addEventListener("mousedown", e => {
            dragHanler(e, btn); 
        });
    }

    function dragHanler(e, btnElem) {
    }

}

//register
function addRegisterFeature() {
    const registerElem = document.getElementById("btn-register");
    registerElem.addEventListener("click", registerHandler)
    function registerHandler(e) {
        const data = ["","","","",""];
        
        //form check input and add data
        let elem = document.getElementById("input-fullname");
        data[0] = elem.value
        let err = getNameErr(elem.value);
        errHandler(err, elem);

        elem = document.getElementById("check-female")
        err = false;
        if(elem.checked == false){
            if(document.getElementById("check-male").checked == false){
                err = "*Chưa chọn giới tính";
            }
            else{
                data[1] = "Nam";
            }
        }
        else{
            data[1] ="Nữ"
        }
        errHandler(err, elem.nextElementSibling);
    
        elem = document.getElementById("input-address");
        data[2] = elem.value;
        err = getAddressErr(elem.value) 
        errHandler(err, elem);
    
        elem = document.getElementById("input-deliverydate");
        data[3] = (elem.value);
        err = getDateErr(elem.value) 
        errHandler(err, elem);
    
        elem = document.getElementById("input-phone");
        err = getPhoneErr(elem.value) 
        errHandler(err, elem);
    
        elem = document.getElementById("input-email");
        err = getEmailErr(elem.value)
        errHandler(err, elem);
    
    
        let products = "";
        for(let i of document.getElementById("selected-products").getElementsByClassName("product-item")){
            products += i.firstElementChild.nextElementSibling.innerHTML + "; ";
        }
        data[4] = (products.slice(0, -2));
        if(document.getElementsByClassName("errdiv").length == 0 || products != ""){
            addInformationToTable();
        }
    
        function errHandler(err, elem) {
            if(err){
                elem.parentElement.classList.add("errdiv");
                elem.nextElementSibling.innerHTML = err;
            }
            else{
                elem.parentElement.classList.remove("errdiv");
            }
        }
        function getNameErr(value) {
    
            if(value == ""){
                return "*Họ tên chưa được điền";
            }
            else {
                var regex = /^([^\u0000-\u007F]|[^\W\d])+\s([^\u0000-\u007F]|[^\W\d])+(((\s([^\u0000-\u007F]|[^\W\d])+)+)|$)/;
            
                if (regex.test(value)) {
                  return false; 
                } else {
                  return "*Họ tên không hợp lệ";
                }
            }
        }
        function getAddressErr(value) {
            if(value == ""){
                console.log()
                return "*Địa chỉ chưa được điền";
            }
            else {
                if (/^(\s+|[^\u0000-\u007F]|\w)+\s([^\u0000-\u007F]|\w)+(((\s([^\u0000-\u007F]|\w)+)+)|$)/.test(value)) {
                  return false; 
                } else {
                  return "*Địa chỉ không hợp lệ";
                }
            }
        }
        function getPhoneErr(value) {
            if(value == ""){
                console.log()
                return "*Điện Thoại chưa được điền";
            }
            else {
                if (/^0\d{9}$/.test(value)) {
                  return false; 
                } else {
                  return "*Điện thoại gồm 10 chữ số bắt đầu bằng 0";
                }
            }
        }
        function getDateErr(value) {
            if(value == ""){
                return "*Ngày giao hàng chưa được điền";
            }
            else {
                if(new Date().getTime() > new Date(value)){
                    return "Không có máy thời gian để giao về quá khứ";
                }
            }
        }
        function getEmailErr(value) {
            if(value == ""){
                console.log()
                return "*Email chưa được điền";
            }
            else {
                if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)) {
                  return false; 
                } else {
                  return "*Email không hợp lệ";
                }
            }
        }
    
        function addInformationToTable() {
            //convert product to string
            const row = document.createElement("tr");
            for(let i =0; i<5; i++){
                const tdata = document.createElement("td");
                tdata.innerHTML = data[i];
                row.appendChild(tdata);
            }
            document.getElementById("info-table").appendChild(row)
        }
    }
}


//mark product
function addClickEventOnProduct() {
    const products = document.getElementsByClassName("product-item");
    for(let p of products){
        p.addEventListener("click", e => {
            clickHandler(e, p);
        })

    }

    function clickHandler(e, elem) {
        if(elem.getAttribute("marked") == "1"){
            elem.setAttribute("marked","0"); 
        }
        else{
            elem.setAttribute("marked","1")
        }
        
    }
}
//select product
function addSelectBtnEvent() {
    const selector = document.getElementById("select-btn");
    selector.addEventListener("click", select);
    const selectorall = document.getElementById("selectall-btn");
    selectorall.addEventListener("click", selectall);
    const deselector = document.getElementById("deselect-btn");
    deselector.addEventListener("click", deselect);
    const deselectorall = document.getElementById("deselectall-btn");
    deselectorall.addEventListener("click", deselectall);
    function select(e) {
        for(let elem of document.getElementById("list-products").querySelectorAll('[marked="1"]')){
            document.getElementById("selected-products").appendChild(elem);
            elem.setAttribute("marked", "0")
        }
    }
    function selectall(e) {
        for(let elem of document.getElementById("list-products").querySelectorAll('div')){
            document.getElementById("selected-products").appendChild(elem);
            elem.setAttribute("marked", "0")
        }
    }
    function deselect(e) {
        for(let elem of document.getElementById("selected-products").querySelectorAll('[marked="1"]')){
            document.getElementById("list-products").appendChild(elem);
            elem.setAttribute("marked", "0")
        }
    }
    function deselectall(e) {
        for(let elem of document.getElementById("selected-products").querySelectorAll('div')){
            document.getElementById("list-products").appendChild(elem);
            elem.setAttribute("marked", "0")
        }
    }

}

//table update info
function addClearTableEvent() {
    const clearBtn = document.getElementById("btn-clear");
    clearBtn.addEventListener("click", clearHandler);

    function clearHandler(e) {
        let rows = document.getElementsByTagName("tr");
        let l = rows.length;
        for(let i = 1; i<l; i++){
            //after remove, second become first
            rows[1].remove();
        }
    }
}
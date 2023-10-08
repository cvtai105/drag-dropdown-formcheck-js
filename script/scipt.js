addDropDownFeature();
addDragFeature();
addRegisterFeature(); //alo add check form feature
addClickEventOnProduct();
addSelectBtnEvent();
addRegisterEvent();

//navagation bar
document.getElementById(elementId)


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
        //form check input
        let elem = document.getElementById("input-fullname");
        let err = getNameErr(elem.value);
        errHandler(err, elem);
    
        elem = document.getElementById("input-address");
        err = getAddressErr(elem.value) 
        errHandler(err, elem);
    
        elem = document.getElementById("input-deliverydate");
        err = getDateErr(elem.value) 
        errHandler(err, elem);
    
        elem = document.getElementById("input-phone");
        err = getPhoneErr(elem.value) 
        errHandler(err, elem);
    
        elem = document.getElementById("input-email");
        err = getEmailErr(elem.value)
        errHandler(err, elem);
    
        elem = document.getElementById("check-female")
        err = false;
        if(elem.checked == false){
            console.log(1)
            if(document.getElementById("check-male").checked == false){
                err     = "*Chưa chọn giới tính";
            }
        }
        errHandler(err, elem.nextElementSibling);
    
        if(document.getElementsByClassName("errdiv").length == 0){
            addInformationToTable();
        }
    
        function errHandler(err, elem) {
            console.log(elem.value)
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
                var regex = /\b\w+\b\s+\b\w+\b/;
            
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
                if (/(\b\w+\b\s*)+/.test(value)) {
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
                  return "*Điện thoại không hợp lệ";
                }
            }
        }
    
        function getDateErr(value) {
            if(value == ""){
                console.log()
                return "*Ngày giao hàng chưa được điền";
            }
            else {
                if (/(\b\w+\b\s*)+/.test(value)) {
                  return false; 
                } else {
                  return "*Ngày giao hàng không hợp lệ";
                }
            }
        }
    
        function getEmailErr(value) {
            if(value == ""){
                console.log()
                return "*Email chưa được điền";
            }
            else {
                if (/(\b\w+\b\s*)+/.test(value)) {
                  return false; 
                } else {
                  return "*Email không hợp lệ";
                }
            }
        }
    
        function addInformationToTable() {
            const data = {};

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
function addRegisterEvent() {
    const registerBtn = document.getElementById("btn-register");
    registerBtn.addEventListener("click", registerHandler);
    const clearBtn = document.getElementById("btn-clear");
    clearBtn.addEventListener("click", clearHandler);

    function registerHandler(e) {
        
    }
}
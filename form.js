//Проверка правильности заполнения формы(почта, телефон)
const PHONE_REG = /^\+7\s\(9\d\d\)\s\d{3}-\d{2}-\d{2}$/;
const MAIL_REG = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function checkElements(elem){

    let errorLink;
    let cnt = 0;
    
    while (cnt <  elem.parentElement.childNodes.length){
       if (elem.parentElement.childNodes[cnt].nodeName == 'A' ){
            errorLink = elem.parentElement.childNodes[cnt];
            break;
       }
       cnt++;
    }

    switch (elem.id){
        case "phone":
            if (!PHONE_REG.test(elem.value) && !elem.value == ""){
                errorLink.style.display = "block";
                return false;
            }
            else{
                errorLink.style.display = "none";
            }
            break;
        case "email":
            if (!MAIL_REG.test(elem.value) && !elem.value == ""){
                errorLink.style.display = "block";
                return false;
            }
            else{
                errorLink.style.display = "none";
            }
            break;
        default:
            return true;
    }

    return true;
  }

  function sendToTelegram(token,text,chatid){
    var z=$.ajax({  
    type: "POST",  
    url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
    data: "parse_mode=HTML&text="+encodeURIComponent(text), 
    }); 
   };
  
  //Отправка формы
function sendForm() {
    let i;
    let formElements = document.getElementsByClassName("form__element");

    goToPage("#form");

    for (i = 0; i < formElements.length; i++){

        if (formElements[i].required)
            if (formElements[i].value == "")
                return;

        if (!checkElements(formElements[i]))
        return;

    }

    sendToTelegram("5317077070:AAGLb3J1c_0KD5MHLxPR_0jOO50pHoXOCHE", "-1001697784717", "-1001697784717");

}

function hideError(elem) {

    let onlyDigits;

    if(elem.id == "phone"){

        onlyDigits = elem.value.replace(/[^0-9\.]/g, '');
        
       if (onlyDigits.length == 0) 
            elem.value = ""
       else if (onlyDigits.length == 1)
            elem.value = elem.value.length == 1 ? '+7 (' + elem.value : '+7 (';
       else if (onlyDigits.length == 2)
            elem.value = '+7 (' +  onlyDigits[1];
       else if (onlyDigits.length == 3)
            elem.value = '+7 (' +  onlyDigits.substring(1,3);        
       else if (onlyDigits.length == 4)
            elem.value = '+7 (' +  onlyDigits.substring(1,4);
       else if (onlyDigits.length >= 5 && onlyDigits.length <= 7)
            elem.value = '+7 (' +  onlyDigits.substring(1,4) + ')' + " " + onlyDigits.substring(4, onlyDigits.length);        
       else if (onlyDigits.length >= 8 && onlyDigits.length <= 9)
            elem.value = '+7 (' +  onlyDigits.substring(1,4) + ')' + " " + onlyDigits.substring(4, 7) + "-" + onlyDigits.substring(7, onlyDigits.length);
        else if (onlyDigits.length >= 10 && onlyDigits.length <= 11)
            elem.value = '+7 (' +  onlyDigits.substring(1,4) + ')' + " " + onlyDigits.substring(4, 7) + 
        "-" + onlyDigits.substring(7, 9) + "-" + onlyDigits.substring(9, onlyDigits.length);
        else if (onlyDigits.length > 11)
            elem.value = elem.value.substring(0,18);


    }

    checkElements(elem)
    
}

const goToPage = (path) => {
    window.location.href = path;
    }

    function validate(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
        }
      }
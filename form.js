//Проверка правильности заполнения формы(почта, телефон)
function checkElements(elem){
    switch (elem.id){
        case "phone":
            return true;
        default:
            return true;
    }
  }
  
  //Отправка формы
function sendForm() {
    let i;
    let formElements = document.getElementsByClassName("form__element");

    for (i = 0; i < formElements.length; i++){

        if (formElements[i].required)
            if (formElements[i].value == "")
                return;

        if (!checkElements(formElements[i]))
        return;

    }

    alert('все поля верно заполнены')

}
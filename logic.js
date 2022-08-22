let view = document.getElementById('screen');
numpads = document.querySelectorAll('button');
let screenValue = '';
for (item of numpads) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        console.log(buttontext);
        if (buttontext == 'X'){
            buttontext = '*';
        screenValue += buttontext
        view.value = screenValue;
        }
        else if (buttontext == 'C'){
            view.value = ""
            screenValue=''
        }
        else if (buttontext == '+'){
            buttontext = '+';
        screenValue += buttontext
        view.value = screenValue;
        }
        else if (buttontext == '-'){
        buttontext = '-';
        screenValue += buttontext
        view.value = screenValue;
        }
        else if (buttontext == '/'){
        buttontext = '/';
        screenValue += buttontext
        view.value = screenValue;
        }
        else if(buttontext=='='){
           view.value=eval(screenValue);
           screenValue=view.value;
        }
        else if (buttontext == '←'){
        view.value = screenValue.substring(0,screenValue.length-1);
        screenValue=view.value;
        }
        else if (buttontext == '%'){
            buttontext = '%';
            screenValue += buttontext
            view.value = screenValue;
            }
        else{
           screenValue+=buttontext
           view.value=screenValue;
        }
        if(screenValue.length>20){
            view.style.fontSize="large";
        }
        if(screenValue.length>35){
            view.style.fontSize="medium";
        }
    })


}
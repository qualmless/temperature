function whichConvert(){
    let fahrenheitRadio = document.getElementById("fahrenheitRadio").checked;
    let celsiusRadio = document.getElementById("celsiusRadio").checked;

    if (fahrenheitRadio){
        let farenheit = document.getElementById("inputValue").value;
        document.getElementById("finalValue").value = ((farenheit - 32) * (5/9));
        let degree = document.getElementById("fahrenheitRadio").checked;
        console.log((farenheit - 32) * (5/9));
    }
    else if (celsiusRadio) {
        let celsius = document.getElementById("inputValue").value;
        document.getElementById("finalValue").value = ((celsius * (9/5)) + 32);
        let degree = document.getElementById("celsiusRadio").checked;
        console.log((celsius * (9/5)) + 32);
    }
    else{
        document.getElementById("errorMessage").innerHTML="Please pick a conversion type."
    }
}



function whichConvert(){

    // pulls in data type radio buttons
    let fahrenheitRadio = document.getElementById("fahrenheitRadio").checked;
    let celsiusRadio = document.getElementById("celsiusRadio").checked;

    // converts to fahrenheit if selected
    if (fahrenheitRadio){
        let farenheit = document.getElementById("inputValue").value;
        document.getElementById("finalValue").value = ((farenheit - 32) * (5/9));
        // let degree = document.getElementById("fahrenheitRadio").checked;
    }

    // converts to celsius if selected
    else if (celsiusRadio) {
        let celsius = document.getElementById("inputValue").value;
        document.getElementById("finalValue").value = ((celsius * (9/5)) + 32);
        // let degree = document.getElementById("celsiusRadio").checked;
    }

    // error message if no button selected
    else{
        document.getElementById("errorMessage").innerHTML="Please pick a conversion type."
    }
}



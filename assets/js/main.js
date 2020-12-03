function whichConvert(){

    // pulls in data type radio buttons
    // let fahrenheitRadio = document.getElementById("fahrenheitRadio").checked;
    // let celsiusRadio = document.getElementById("celsiusRadio").checked;
    
    // pulls in radio button values
    const unitType = document.querySelectorAll('input[name="unit"]');

    // iterates over radio buttons
    let selectedValue;
    for (const rb of unitType) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // converts to fahrenheit if selected
    if (selectedValue=="fahrRadio"){
        let fahrenheit = document.getElementById("inputValue").value;
        let celsius = Math.round((fahrenheit - 32) * (5/9))
        document.getElementById("newValue").innerHTML = celsius;
        document.getElementById("newUnit").innerHTML = "Celsius"
        document.getElementById("originalValue").innerHTML = fahrenheit;
        document.getElementById("originalUnit").innerHTML="Fahrenheit";

        // clears error if created before click
        document.getElementById("errorMessage").innerHTML=""
    }

    // converts to celsius if selected
    else if (selectedValue=="celsRadio") {
        let celsius = document.getElementById("inputValue").value;
        let fahrenheit = Math.round((celsius * (9/5)) + 32)
        document.getElementById("newValue").innerHTML = fahrenheit;
        document.getElementById("newUnit").innerHTML = "Fahrenheit";
        document.getElementById("originalValue").innerHTML = celsius;
        document.getElementById("originalUnit").innerHTML = "Celsius";

        // clears error if created before click
        document.getElementById("errorMessage").innerHTML=""

    }

    // error message if no button selected
    else{
        document.getElementById("errorMessage").innerHTML="Please pick a conversion type."
    }

}



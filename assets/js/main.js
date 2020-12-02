function whichConvert(){
    let fahrenheitRadio = document.getElementById("fahrenheitRadio").checked;
    let celsiusRadio = document.getElementById("celsiusRadio").checked;

    if (fahrenheitRadio){
        let farenheit = document.getElementById("inputValue").value;
        document.getElementById("finalValue").innerHTML = ((farenheit - 32) * (5/9));
        // let degree = document.getElementsByName("degree");
        let degree = document.getElementById("fahrenheitRadio").checked;
        console.log((farenheit - 32) * (5/9));
    }
    else if (celsiusRadio) {
        let celsius = document.getElementById("inputValue").value;
        document.getElementById("finalValue").innerHTML = ((celsius * (9/5)) + 32);
        // let degree = document.getElementsByName("degree");
        let degree = document.getElementById("celsiusRadio").checked;
        console.log((celsius * (9/5)) + 32);
    }
    else{
        document.getElementById("valueAnswer").innerHTML="Please pick a conversion type."
    }
}

// function fToCelsius(){
//     let farenheit = document.getElementById("inputValue").value;
//     document.getElementById("finalValue").innerHTML = (((32*farenheit) - 32) * (5/9));
//     // let degree = document.getElementsByName("degree");
//     let degree = document.getElementById("fahrenheitRadio").checked;
//     console.log(degree)
//     console.log(((32*farenheit) - 32) * (5/9));
//     // return (((32*farenheit) - 32) * (5/9));
// }

// function cToFarenheit(){

// }


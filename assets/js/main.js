function whichConvert(){
    let degree = document.getElementById("fahrenheitRadio").checked;
    if (degree){
        console.log("DEGREE!!");
    }
}

function fToCelsius(){
    let farenheit = document.getElementById("inputValue").value;
    document.getElementById("finalValue").innerHTML = (((32*farenheit) - 32) * (5/9));
    // let degree = document.getElementsByName("degree");
    let degree = document.getElementById("fahrenheitRadio").checked;
    console.log(degree)
    console.log(((32*farenheit) - 32) * (5/9));
    // return (((32*farenheit) - 32) * (5/9));
}

// function cToFarenheit(){

// }


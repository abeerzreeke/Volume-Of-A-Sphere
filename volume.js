var x = 0, y=0
let sub = document.getElementById('submit')

sub.addEventListener("click", XCalculate)

function XCalculate(e){
    x = myFunction()
    y = myFunctionV()
    alert((4/3 * Math.PI * Math.pow(`${x}`, 3)) * `${y}`)
}

function myFunction() {
    var x = document.getElementById("radius").value
    return x;
}

function myFunctionV() {
    var y = document.getElementById("volume").value
    return y;
}
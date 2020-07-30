var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
function resetHandler() {
    document.getElementById("myRange").value = "0";
}

slider.addEventListener("mousemove",eventSlider)

function eventSlider(){
   
    let color = 'linear-gradient(to right, #f7b6a9 ,' + this.value + '30%, #d66956 ' + this.value + '20%,#d66956 ' + this.value + '60%,#d83823 ' + this.value + '30%)'
    slider.style.background = color;
}


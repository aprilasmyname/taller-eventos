document.getElementById("my_div").addEventListener("click", function(event){
    event.stopPropagation();
alert("Hola soy el div");
});
document.getElementById("my_button").addEventListener("click", function(event){
    event.stopPropagation();
alert("Hola!");
});

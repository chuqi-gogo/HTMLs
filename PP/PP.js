function myfunction(vv){
    if(vv == 1){
        document.getElementById("demo").innerHTML = "Hello JavaScript!";
        document.getElementById("demo").style.color = "red";
        document.getElementById("demo").style.fontSize = "30px";
    }
    if(vv == 0){
        document.getElementById("demo").innerHTML = "Hello Html!";
        document.getElementById("demo").style.color = "black";
        document.getElementById("demo").style.fontSize = "100%";
    }
}
function mysecondfunction(){
    document.write(5+5);
    alert("Hello JavaScript!");
}
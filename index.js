document.getElementById("myDiv").innerHTML = "Hello Worid!";
document.getElementById("myClass").innerHTML = "це перший абзац";
document.getElementById("content").innerHTML = "<h1>Заголовок</h1><p>Це абзац</p>";
document.getElementById("myButton").addEventListener('click',function(){
    this.classList.add('highlight');
});
document.getElementById("myButtonDelete").addEventListener('click',function(){
    this.classList.add('highlight');
    this.classList.remove('highlight');
});
document.getElementById("container").innerHTML = "<p>Новий Абзац</p>";
document.getElementById("myButton").addEventListener("click",function(){
    var element = document.getElementById("container");
    if (element) {
        element.parentNode.removeChild(element);
    }
});
document.getElementById('myInput').setAttribute("placeholder", "Введіть ім'я");
function handleClick(){
    alert("Кнопка натиснута!" );
}

document.getElementById("changesColor").addEventListener('click', function(){
    var element = document.getElementById("myBox");
    if (element){
        element.style.backgroundColor = "pink";
    }
});

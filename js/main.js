let labels = document.querySelectorAll(".rd-tabs"), i;

for(i=0; i<labels.length; i++){
    labels[i].onclick = function(){
        let color = document.querySelector(".rd-tabs:checked ~ .content").getAttribute("data-color");
        document.querySelector(".main").style.backgroundColor = color;    
        document.querySelector(".logo-label").style.borderColor = color;    
    }
}
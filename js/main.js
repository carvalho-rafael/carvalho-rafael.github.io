let labels = document.querySelectorAll(".menu li"), i;
for(i=0; i<labels.length; i++){
    labels[i].onclick = function(){
        let color = document.querySelector(".rd-tabs:checked ~ .content").getAttribute("data-color");
        document.querySelector(".main").style.backgroundColor = color;    
        document.querySelector(".face-label").style.borderColor = color;    
    }
}
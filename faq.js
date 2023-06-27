const container=document.getElementsByClassName('container')
console.log(container.length)
for (let i= 0; i < container.length; i++) {
    container[i].addEventListener("click", function () {
       
        container[i].classList.toggle("active");
    
})};

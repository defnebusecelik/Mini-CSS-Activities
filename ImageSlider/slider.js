const slider=document.querySelector(".slide input");
const img=document.querySelector(".image .img2");
const drag=document.querySelector(".slide .line");
slider.oninput =()=> {
    let sliderVal=slider.value;
    drag.style.left=sliderVal + "%";
    img.style.width=sliderVal + "%";
}
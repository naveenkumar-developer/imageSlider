
// ACCESS NECESSARY ELEMENTS 
const imgSlider_container  = document.querySelector('.imgSlider_container')
let allImages=document.querySelectorAll('.imgSlider_container img')
const currentShowImg=document. querySelector('#currentImg')
const leftBtn=document.querySelector(' .leftIcon ')
const rightBtn=document.querySelector(' .rightIcon ')

// FOR PREV FUNCTIONALLITY 
leftBtn.addEventListener('click',function(){
    sliderFunc("prev")
})
// FOR NEXT FUNCTIONALLITY 
rightBtn.addEventListener('click',function(){
    sliderFunc("next")
})

// THE SLIDER FUNCITONALLITY 

let contentWidth =    imgSlider_container.clientWidth
function  sliderFunc(dir){
    if(dir == "next"){
        // INCREASE THE SCROLLLEFT TO MOVE THE SLIDER 
        imgSlider_container.scrollLeft += contentWidth
    }else{
        // INCREASE THE SCROLLLEFT TO MOVE THE SLIDER 
        imgSlider_container.scrollLeft -= contentWidth
    }
}

// THE TARGET IMG SHOUD BE TOGGEL ACTIVE CLASS
allImages.forEach( (item)=>{
    item.addEventListener('click',function(){ 
        // REMOVE OTHER THE ACTIVE CLASS OTHER NOT TARGETTED IMG 
        allImages.forEach( (items)=>items.removeAttribute('class','active'))
        // ADD ACTIVE CLASS FOR TARGETTED IMG 
        item.setAttribute('class', 'active')
        // SET TARGETTED IMG SRC TO CURRENT IMG SRC 
        currentShowImg.src=item.src
    })
})
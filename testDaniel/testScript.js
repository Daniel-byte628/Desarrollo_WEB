const carouselRow = document.querySelector('.slide-row')
const carouselSlides = document.getElementsByClassName('slide')
const dots = document.getElementsByClassName('dot')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

let index=1
var width


function slideWidth(){
    width=carouselSlides[0].clientWidth
}
slideWidth()
window.addEventListener('resize',slideWidth)
carouselRow.style.transform=`translateX(`+(-width*index)+`px)`

nextBtn.addEventListener('click',nextSlide)
function nextSlide(){
    if(index>=carouselSlides.length-1){
        return
    }
    carouselRow.style.transition='transform 0.4s ease-out'
    index++
    carouselRow.style.transform=`translateX(`+(-width*index)+`px)`
    dotslabel()
}

prevBtn.addEventListener('click',prevSlide)
function prevSlide(){
    if(index<=0){
        return
    }
    carouselRow.style.transition='transform 0.4s ease-out'
    index--
    carouselRow.style.transform=`translateX(`+(-width*index)+`px)`
    dotslabel()
}

carouselRow.addEventListener('transitionend',()=>{
    if(carouselSlides[index].id==='firstimageduplicate'){
        carouselRow.style.transition='none'
        index=carouselSlides.length-index
        carouselRow.style.transform=`translateX(`+(-width*index)+`px)`
        dotslabel()
    }
    if(carouselSlides[index].id==='lastimageduplicate'){
        carouselRow.style.transition='none'
        index=carouselSlides.length-2
        carouselRow.style.transform=`translateX(`+(-width*index)+`px)`
        dotslabel()
    }
})


function autoslide(){
    deleteInterval=setInterval(timer,3000)
    function timer(){
       nextSlide()
}
}
autoslide()

const maincontainer = document.querySelector('.container')
maincontainer.addEventListener('mouseover',()=>{
    clearInterval(deleteInterval)
})

maincontainer.addEventListener('mouseout',()=>{
    autoslide()
})

function dotslabel(){
    for(let i=0;i<dots.length;i++){
        dots[i].className= dots[i].className.replace(' active','')
    }
    dots[index-1].className+=' active'
}



 document.getElementById('nextcomida').onclick = function(){
    let lists = document.querySelectorAll('.itemcomida');
    document.getElementById('slidecomida').appendChild(lists[0]);
}
document.getElementById('prevcomida').onclick = function(){
    let lists = document.querySelectorAll('.itemcomida');
    document.getElementById('slidecomida').prepend(lists[lists.length - 1]);
}
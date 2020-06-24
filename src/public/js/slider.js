const slider_container = document.querySelector('.slides')
const slides = document.getElementsByClassName('slide')
const dots = document.querySelectorAll('.dot')
let currentItem = 0

function toggle(){
    dots[currentItem].classList.toggle('active')
}

function move(event) {
    toggle()
    const item_width = slides[0].offsetWidth
    let i = Number(event.target.dataset.i)
    slider_container.style.transform = `translateX(${ i * -item_width}px)`
    currentItem = i
    toggle()
}

function showSlides(){
    if(currentItem >= dots.length-1){
        move({target:dots[0]})
    }
    else{
        move({target:dots[currentItem+1]})
    }
    
    let t = setTimeout(()=>showSlides(), 5000)
}


dots[0].parentElement.addEventListener('click', (e)=>{
    if(e.target.classList.contains('dot')){
        move(e)
    }
})
toggle()

//showSlides()
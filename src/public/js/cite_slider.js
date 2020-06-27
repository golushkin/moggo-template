const left = document.querySelector('.left')
const right = document.querySelector('.right')
const items = document.querySelectorAll('.cite .item')
let currentItem = 0


function move(item) {
    const item_width = items[0].offsetWidth
    const parent = items[0].parentElement
    parent.style.transform = `translateX(${ item * -item_width}px)`
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


left.addEventListener('click', (e)=>{
    currentItem--
    if (currentItem < 0) {
        currentItem = items.length -1
        move(currentItem)
    }
    else{
        move(currentItem)
    }
    
})
right.addEventListener('click', (e)=>{
    currentItem++
    if (currentItem >= items.length) {
        currentItem = 0
        move(currentItem)
    }
    else{
        move(currentItem)
    }
    
})


//showSlides()
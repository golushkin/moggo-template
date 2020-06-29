const left = document.querySelector('.left-cite2')
const right = document.querySelector('.right-cite2')
const items = document.querySelectorAll('.cite.second .item')
let currentItem = 0


function move(item) {
    const item_width = items[0].offsetWidth
    const parent = items[0].parentElement
    parent.style.transform = `translateX(${ item * -item_width}px)`
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
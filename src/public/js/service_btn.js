const arrows = document.querySelectorAll('.arrow')
const contents = document.querySelectorAll('.service .spec-text-ic')
let current_i = undefined

function toggle(out = false){
    if (current_i === undefined) {
        return
    }
    arrows[current_i].classList.toggle('active')      
    
    if (out) {

        contents[current_i].classList.toggle('animate')  
        contents[current_i].classList.toggle('animate-out')  
        setTimeout(()=>{
            contents[current_i].classList.toggle('active')
            current_i = undefined
        },270)
    }
    else{
        contents[current_i].classList.toggle('animate')  
        contents[current_i].classList.toggle('active')
    }   
    
}


arrows.forEach((item, i) =>{
    item.addEventListener('click', (e)=>{
        if (e.target.dataset.click) {
            toggle(true)
            e.target.dataset.click = ''
        }
        else{
            toggle()
            current_i = i
            e.target.dataset.click = 'true'
            toggle()
        } 
    })
})
const burger = document.querySelector('.burger')
const wrapper = document.getElementsByClassName('mobile-wrapper')[0]
let click = false


function showWrapper(e){
    click = click? false: true
    if(click){
        document.documentElement.style.overflowY = 'hidden'
    }
    else{
        document.documentElement.style.overflowY = 'auto'
    }
    wrapper.classList.toggle('active')
    e.currentTarget.classList.toggle('active')
}

burger.addEventListener('click',showWrapper)


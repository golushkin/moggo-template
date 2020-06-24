const burger = document.querySelector('.burger')
const wrapper = document.getElementsByClassName('mobile-wrapper')[0]
let click = false


function showWrapper(e){
    click = click? false: true
    wrapper.style.height = `${window.innerHeight}px`
    wrapper.style.width = `${window.innerWidth}px`
    if(click){
        wrapper.style.top = '0';
        document.documentElement.style.overflowY = 'hidden'
    }
    else{
        wrapper.style.top = '-150%';
        document.documentElement.style.overflowY = 'auto'
    }
    e.currentTarget.classList.toggle('active')
}

burger.addEventListener('click',showWrapper)


const a = document.querySelectorAll('nav li a')

function scrollTo(e){
    e.preventDefault()
    const target = e.target.dataset.target
    const top = target !== 'footer'
                        ?document.querySelector(`.${target}`).offsetTop
                        :document.querySelector(`${target}`).offsetTop
    window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
    })
}

a.forEach(item =>item.addEventListener('click', scrollTo))
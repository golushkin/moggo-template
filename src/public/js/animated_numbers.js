const counters = document.querySelectorAll('.number-title')
const numbers = document.querySelector('.number')
const speed = 200
let show = false

function animateNumbers() {
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = counter.dataset.target
            const count = Number(counter.innerText)
            const inc = target / speed

            if (count < target) {
                counter.innerText = (count + inc).toFixed(1)
                setTimeout(updateCounter, 5);
            }
            else {
                counter.innerText = target
            }
        }
        updateCounter()
    })
}

function checkNumber() {
    if (window.innerHeight + window.pageYOffset - 50 > numbers.offsetTop) {
        return true
    }
    return false
}

window.addEventListener('scroll', (e) => {
    if (checkNumber() && !show) {
        show = true
        animateNumbers()
        window.removeEventListener('scroll', animateNumbers)
    }
})



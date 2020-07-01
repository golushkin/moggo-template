import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./public/scss/index.scss"
import './public/js/nav_scroll'
import './public/js/slider'
import './public/js/mobile_nav'
import './public/js/animated_numbers'
import './public/js/load_img'
import './public/js/cite_slider'
import './public/js/service_btn'
import './public/js/cite_slider2'
import './public/js/yandex_map'

AOS.init({
    offset: 400,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
    disable: window.innerWidth < 1440
  });
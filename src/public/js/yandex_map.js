const btn = document.querySelector('#map .spec-title')

function turnOn(){
    btn.parentElement.parentElement.classList.remove('in-active')
    ymaps.ready(()=>{
        let myMap = new ymaps.Map("map", {
            center: [53.90160349893682,27.560847964355457],
            zoom: 14
        });
        myMap.geoObjects
        .add(new ymaps.Placemark( [53.90160349893682,27.560847964355457]))
    });
    
    btn.removeEventListener('click',turnOn)
}


btn.addEventListener('click',turnOn)
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [60.336570, 30.228610],
        zoom: 12
    });

    const myPlacemark = new ymaps.Placemark([60.336570, 30.228610], {
        hintContent: 'Moto-Cool',
        balloonContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: './images/icon.map.png',
        iconImageSize: [30, 30]
    });

    myMap.geoObjects.add(myPlacemark);
}
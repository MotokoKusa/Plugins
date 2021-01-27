document.addEventListener("DOMContentLoaded", function(event) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [48.87219657376512,2.354223999999991],
            zoom: 17
        }),

        myPlacemark = new ymaps.Placemark([48.872398278369836,2.354223999999991], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/Subtract.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
        });
        myMap.geoObjects
            .add(myPlacemark)
      });
});

    ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.91817154482064,30.30557799999997],
            zoom: 11,
            controls: []
        });
        myMap.behaviors.disable('scrollZoom');

var coords = [
    [59.89503140352538,30.3106820178339], [59.91710375957632,30.490153987438397], 
    [59.94364005694774,30.37994738343448], [59.971015580779934,30.31025286439151]
],
    myCollection = new ymaps.GeoObjectCollection({}, {
       draggable: false,
       iconLayout: 'default#image',
       iconImageHref: 'img/content/icons/map-marker.svg',
       iconImageSize: [46,57],
       iconImageOffset: [-26, -52]
    });

for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
}

myMap.geoObjects.add(myCollection);

    }
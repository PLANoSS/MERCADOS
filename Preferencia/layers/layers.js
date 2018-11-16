var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Preferenciaparacomprarproductos_0 = new ol.format.GeoJSON();
var features_Preferenciaparacomprarproductos_0 = format_Preferenciaparacomprarproductos_0.readFeatures(json_Preferenciaparacomprarproductos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Preferenciaparacomprarproductos_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Preferenciaparacomprarproductos_0.addFeatures(features_Preferenciaparacomprarproductos_0);var lyr_Preferenciaparacomprarproductos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Preferenciaparacomprarproductos_0, 
                style: style_Preferenciaparacomprarproductos_0,
    title: '<b/>Percepción sobre la preferencia para comprar productos alimenticios:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que prefieren comprar productos frescos en el mercado<br />\
    <img src="styles/legend/Preferenciaparacomprarproductos_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Preferenciaparacomprarproductos_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Preferenciaparacomprarproductos_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Preferenciaparacomprarproductos_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Preferenciaparacomprarproductos_0_4.png" />  80 - 100 <br />'
        });

lyr_Preferenciaparacomprarproductos_0.setVisible(true);
var layersList = [baseLayer,lyr_Preferenciaparacomprarproductos_0];
lyr_Preferenciaparacomprarproductos_0.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M19_Compra': 'M19_Compra', });
lyr_Preferenciaparacomprarproductos_0.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M19_Compra': 'Hidden', });
lyr_Preferenciaparacomprarproductos_0.set('fieldLabels', {'Canton': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Preferenciaparacomprarproductos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
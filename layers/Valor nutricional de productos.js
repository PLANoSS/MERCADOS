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
var format_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9 = new ol.format.GeoJSON();
var features_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9 = format_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.readFeatures(json_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.addFeatures(features_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9);var lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9, 
                style: style_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9,
    title: '<b/>Percepción sobre valor nutricional de los productos que consume:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que no están para nada informadas sobre el valor nutricional de los<br />productos que consumen.<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_4.png" /> 80 - 100<br /><br />'
        });

lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.setVisible(true);
var layersList = [baseLayer,lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9];
lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M57_M56T03': 'M57_M56T03', });
lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M57_M56T03': 'TextEdit', });
lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.set('fieldLabels', {});
lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
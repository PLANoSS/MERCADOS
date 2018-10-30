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
var format_Legustaraquehayanproductosdemejorcalidadenelmercado_7 = new ol.format.GeoJSON();
var features_Legustaraquehayanproductosdemejorcalidadenelmercado_7 = format_Legustaraquehayanproductosdemejorcalidadenelmercado_7.readFeatures(json_Legustaraquehayanproductosdemejorcalidadenelmercado_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legustaraquehayanproductosdemejorcalidadenelmercado_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Legustaraquehayanproductosdemejorcalidadenelmercado_7.addFeatures(features_Legustaraquehayanproductosdemejorcalidadenelmercado_7);var lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Legustaraquehayanproductosdemejorcalidadenelmercado_7, 
                style: style_Legustaraquehayanproductosdemejorcalidadenelmercado_7,
    title: '<b/>Percepción sobre la calidad de productos en el mercado:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que les gustaría que hayan productos de mejor calidad en los mercados.<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_4.png" /> 80 - 100<br /><br />'
        });

lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7.setVisible(true);
var layersList = [baseLayer,lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7];
lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M55_M55T04': 'M55_M55T04', });
lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M55_M55T04': 'TextEdit', });
lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7.set('fieldLabels', {});

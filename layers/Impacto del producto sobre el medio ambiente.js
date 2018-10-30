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
var format_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0 = new ol.format.GeoJSON();
var features_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0 = format_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.readFeatures(json_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.addFeatures(features_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0);var lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0, 
                style: style_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0,
    title: '<b/>Percepción sobre la importancia del impacto ambiental del producto:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />creen que el impacto ambiental del producto es muy importante a la hora de<br />comprar.<br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_4.png" />  80 - 100 <br /><br />'
        });

lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.setVisible(true);
var layersList = [baseLayer,lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0];
lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy import': 'Muy import', });
lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy import': 'Hidden', });
lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.set('fieldLabels', {});

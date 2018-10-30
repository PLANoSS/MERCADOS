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
var format_Lacalidaddelproductoquecompraesmuyimportante_1 = new ol.format.GeoJSON();
var features_Lacalidaddelproductoquecompraesmuyimportante_1 = format_Lacalidaddelproductoquecompraesmuyimportante_1.readFeatures(json_Lacalidaddelproductoquecompraesmuyimportante_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lacalidaddelproductoquecompraesmuyimportante_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lacalidaddelproductoquecompraesmuyimportante_1.addFeatures(features_Lacalidaddelproductoquecompraesmuyimportante_1);var lyr_Lacalidaddelproductoquecompraesmuyimportante_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lacalidaddelproductoquecompraesmuyimportante_1, 
                style: style_Lacalidaddelproductoquecompraesmuyimportante_1,
    title: '<b/>Percepción sobre la importancia de la calidad del producto:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />creen que la calidad del producto es muy importante a la hora de comprar.<br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_1_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_1_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_1_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_1_4.png" />  80 - 100 <br /><br />'
        });

lyr_Lacalidaddelproductoquecompraesmuyimportante_1.setVisible(true);
var layersList = [baseLayer,lyr_Lacalidaddelproductoquecompraesmuyimportante_1];
lyr_Lacalidaddelproductoquecompraesmuyimportante_1.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy import': 'Muy import', });
lyr_Lacalidaddelproductoquecompraesmuyimportante_1.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy import': 'Hidden', });
lyr_Lacalidaddelproductoquecompraesmuyimportante_1.set('fieldLabels', {});

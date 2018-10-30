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
var format_Lamarcaonombrecomercialdelproductoquecompraesimportante_2 = new ol.format.GeoJSON();
var features_Lamarcaonombrecomercialdelproductoquecompraesimportante_2 = format_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.readFeatures(json_Lamarcaonombrecomercialdelproductoquecompraesimportante_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lamarcaonombrecomercialdelproductoquecompraesimportante_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.addFeatures(features_Lamarcaonombrecomercialdelproductoquecompraesimportante_2);var lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lamarcaonombrecomercialdelproductoquecompraesimportante_2, 
                style: style_Lamarcaonombrecomercialdelproductoquecompraesimportante_2,
    title: '<b/>Percepción sobre la importancia de la marca del producto:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen que la marca del producto es importante a la hora de comprar.<br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_2_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_2_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_2_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_2_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_2_4.png" />  80 - 100 <br /><br />'
        });

lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.setVisible(true);
var layersList = [baseLayer,lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2];
lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Importante': 'Importante', });
lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Importante': 'Hidden', });
lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.set('fieldLabels', {});

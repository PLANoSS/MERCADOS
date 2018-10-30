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
var format_Elpreciodelproductoesmuyimportantealahoradecomprar_3 = new ol.format.GeoJSON();
var features_Elpreciodelproductoesmuyimportantealahoradecomprar_3 = format_Elpreciodelproductoesmuyimportantealahoradecomprar_3.readFeatures(json_Elpreciodelproductoesmuyimportantealahoradecomprar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elpreciodelproductoesmuyimportantealahoradecomprar_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Elpreciodelproductoesmuyimportantealahoradecomprar_3.addFeatures(features_Elpreciodelproductoesmuyimportantealahoradecomprar_3);var lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Elpreciodelproductoesmuyimportantealahoradecomprar_3, 
                style: style_Elpreciodelproductoesmuyimportantealahoradecomprar_3,
    title: '<b/>Percepción sobre la importancia del precio del producto:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen que  el precio del producto es muy importante a la hora de comprar.<br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_3_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_3_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_3_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_3_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_3_4.png" />  80 - 100 <br /><br />'
        });

lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3.setVisible(true);
var layersList = [baseLayer,lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3];
lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy import': 'Muy import', });
lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy import': 'Hidden', });
lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3.set('fieldLabels', {});

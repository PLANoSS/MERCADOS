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
var format_Noestaradispuestoapagarmsporproductosecolgicos_6 = new ol.format.GeoJSON();
var features_Noestaradispuestoapagarmsporproductosecolgicos_6 = format_Noestaradispuestoapagarmsporproductosecolgicos_6.readFeatures(json_Noestaradispuestoapagarmsporproductosecolgicos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noestaradispuestoapagarmsporproductosecolgicos_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Noestaradispuestoapagarmsporproductosecolgicos_6.addFeatures(features_Noestaradispuestoapagarmsporproductosecolgicos_6);var lyr_Noestaradispuestoapagarmsporproductosecolgicos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Noestaradispuestoapagarmsporproductosecolgicos_6, 
                style: style_Noestaradispuestoapagarmsporproductosecolgicos_6,
    title: '<b/>Percepción sobre productos ecológicos:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que estarían dispuestos a pagar hasta un 5% más por productos ecológicos.<br />\
    <img src="styles/legend/Noestaradispuestoapagarmsporproductosecolgicos_6_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Noestaradispuestoapagarmsporproductosecolgicos_6_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Noestaradispuestoapagarmsporproductosecolgicos_6_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Noestaradispuestoapagarmsporproductosecolgicos_6_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Noestaradispuestoapagarmsporproductosecolgicos_6_4.png" /> 80 - 100<br /><br />'
        });

lyr_Noestaradispuestoapagarmsporproductosecolgicos_6.setVisible(true)
var layersList = [baseLayer,lyr_Noestaradispuestoapagarmsporproductosecolgicos_6];
lyr_Noestaradispuestoapagarmsporproductosecolgicos_6.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M54_M54T02': 'M54_M54T02', });
lyr_Noestaradispuestoapagarmsporproductosecolgicos_6.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M54_M54T02': 'TextEdit', });
lyr_Noestaradispuestoapagarmsporproductosecolgicos_6.set('fieldLabels', {});

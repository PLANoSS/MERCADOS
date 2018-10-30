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
var format_Reparaunproductoelectrnicocuandosedaa_5 = new ol.format.GeoJSON();
var features_Reparaunproductoelectrnicocuandosedaa_5 = format_Reparaunproductoelectrnicocuandosedaa_5.readFeatures(json_Reparaunproductoelectrnicocuandosedaa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reparaunproductoelectrnicocuandosedaa_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Reparaunproductoelectrnicocuandosedaa_5.addFeatures(features_Reparaunproductoelectrnicocuandosedaa_5);var lyr_Reparaunproductoelectrnicocuandosedaa_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reparaunproductoelectrnicocuandosedaa_5, 
                style: style_Reparaunproductoelectrnicocuandosedaa_5,
    title: '<b/>Percepción sobre aparatos electrónicos descompuestos:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que repararían algún aparato electrónico de su hogar si se dañase.<br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_4.png" />  80 - 100 <br /><br />'
        });

lyr_Reparaunproductoelectrnicocuandosedaa_5.setVisible(true)
var layersList = [baseLayer,lyr_Reparaunproductoelectrnicocuandosedaa_5];
lyr_Reparaunproductoelectrnicocuandosedaa_5.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Lo reparo': 'Lo reparo', });
lyr_Reparaunproductoelectrnicocuandosedaa_5.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Lo reparo': 'Hidden', });
lyr_Reparaunproductoelectrnicocuandosedaa_5.set('fieldLabels', {});

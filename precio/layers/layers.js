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
var format_Preciodelproducto_0 = new ol.format.GeoJSON();
var features_Preciodelproducto_0 = format_Preciodelproducto_0.readFeatures(json_Preciodelproducto_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Preciodelproducto_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Preciodelproducto_0.addFeatures(features_Preciodelproducto_0);var lyr_Preciodelproducto_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Preciodelproducto_0, 
                style: style_Preciodelproducto_0,
    title: '<b/>Percepción sobre el precio de los productos:</b><br />El degradado de colores en el mapa indica el porcentaje<br />de personas que creen <b/>muy importante</b> el precio<br />de los productos a la hora de comprar.<br /><br />\
    <img src="styles/legend/Preciodelproducto_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Preciodelproducto_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Preciodelproducto_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Preciodelproducto_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Preciodelproducto_0_4.png" />  80 - 100 <br />'
        });

lyr_Preciodelproducto_0.setVisible(true);
var layersList = [baseLayer,lyr_Preciodelproducto_0];
lyr_Preciodelproducto_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Año': 'Año', 'Muy import': 'Muy import', 'Muy importante (%)': 'Muy importante (%)', });
lyr_Preciodelproducto_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Año': 'TextEdit', 'Muy import': 'Hidden', 'Muy importante (%)': 'Hidden', });
lyr_Preciodelproducto_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Grafica': 'no label', 'Año': 'header label', });
lyr_Preciodelproducto_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
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
var format_Productoetiquetadocomoecolgico_0 = new ol.format.GeoJSON();
var features_Productoetiquetadocomoecolgico_0 = format_Productoetiquetadocomoecolgico_0.readFeatures(json_Productoetiquetadocomoecolgico_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Productoetiquetadocomoecolgico_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Productoetiquetadocomoecolgico_0.addFeatures(features_Productoetiquetadocomoecolgico_0);var lyr_Productoetiquetadocomoecolgico_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Productoetiquetadocomoecolgico_0, 
                style: style_Productoetiquetadocomoecolgico_0,
    title: '<b/>Percepción sobre productos ecológicos:</b><br />El degradado de colores en el mapa indica el porcentaje de personas<br /> que <b/>no están muy seguras</b> de que un producto ecológico causará<br />menos daño al ambiente.<br /><br />\
    <img src="styles/legend/Productoetiquetadocomoecolgico_0_0.png" />  0.0 - 20.0 <br />\
    <img src="styles/legend/Productoetiquetadocomoecolgico_0_1.png" />  20.0 - 40.0 <br />\
    <img src="styles/legend/Productoetiquetadocomoecolgico_0_2.png" />  40.0 - 60.0 <br />\
    <img src="styles/legend/Productoetiquetadocomoecolgico_0_3.png" />  60.0 - 80.0 <br />\
    <img src="styles/legend/Productoetiquetadocomoecolgico_0_4.png" />  80.0 - 100.0 <br />'
        });

lyr_Productoetiquetadocomoecolgico_0.setVisible(true);
var layersList = [baseLayer,lyr_Productoetiquetadocomoecolgico_0];
lyr_Productoetiquetadocomoecolgico_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Gráfica': 'Gráfica', 'Año': 'Año', 'No muy seg': 'No muy seg', });
lyr_Productoetiquetadocomoecolgico_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Gráfica': 'Photo', 'Año': 'TextEdit', 'No muy seg': 'Hidden', });
lyr_Productoetiquetadocomoecolgico_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Gráfica': 'no label', 'Año': 'header label', });
lyr_Productoetiquetadocomoecolgico_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
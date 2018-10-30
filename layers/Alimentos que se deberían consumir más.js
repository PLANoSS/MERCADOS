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
var format_Creequelefaltaconsumirmscereales_8 = new ol.format.GeoJSON();
var features_Creequelefaltaconsumirmscereales_8 = format_Creequelefaltaconsumirmscereales_8.readFeatures(json_Creequelefaltaconsumirmscereales_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Creequelefaltaconsumirmscereales_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Creequelefaltaconsumirmscereales_8.addFeatures(features_Creequelefaltaconsumirmscereales_8);var lyr_Creequelefaltaconsumirmscereales_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Creequelefaltaconsumirmscereales_8, 
                style: style_Creequelefaltaconsumirmscereales_8,
    title: '<b/>Percepción sobre alimentos que considera deben consumirse más:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen que deben consumir más cereales.<br />\
    <img src="styles/legend/Creequelefaltaconsumirmscereales_8_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Creequelefaltaconsumirmscereales_8_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Creequelefaltaconsumirmscereales_8_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Creequelefaltaconsumirmscereales_8_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Creequelefaltaconsumirmscereales_8_4.png" /> 80 - 100<br /><br />'
        });

lyr_Creequelefaltaconsumirmscereales_8.setVisible(true);
var layersList = [baseLayer,lyr_Creequelefaltaconsumirmscereales_8];
lyr_Creequelefaltaconsumirmscereales_8.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M56_M56T03': 'M56_M56T03', });
lyr_Creequelefaltaconsumirmscereales_8.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M56_M56T03': 'TextEdit', });
lyr_Creequelefaltaconsumirmscereales_8.set('fieldLabels', {});
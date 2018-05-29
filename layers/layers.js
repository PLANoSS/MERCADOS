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
    title: 'El impacto de los productos sobre el ambiente es muy importante a la hora de comprar<br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0_4.png" />  80 - 100 <br />'
        });var format_Elpreciodelproductoesmuyimportantealahoradecomprar_1 = new ol.format.GeoJSON();
var features_Elpreciodelproductoesmuyimportantealahoradecomprar_1 = format_Elpreciodelproductoesmuyimportantealahoradecomprar_1.readFeatures(json_Elpreciodelproductoesmuyimportantealahoradecomprar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elpreciodelproductoesmuyimportantealahoradecomprar_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Elpreciodelproductoesmuyimportantealahoradecomprar_1.addFeatures(features_Elpreciodelproductoesmuyimportantealahoradecomprar_1);var lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Elpreciodelproductoesmuyimportantealahoradecomprar_1, 
                style: style_Elpreciodelproductoesmuyimportantealahoradecomprar_1,
    title: 'El precio del producto es muy importante a la hora de comprar<br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_1_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_1_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_1_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Elpreciodelproductoesmuyimportantealahoradecomprar_1_4.png" />  80 - 100 <br />'
        });var format_Lacalidaddelproductoquecompraesmuyimportante_2 = new ol.format.GeoJSON();
var features_Lacalidaddelproductoquecompraesmuyimportante_2 = format_Lacalidaddelproductoquecompraesmuyimportante_2.readFeatures(json_Lacalidaddelproductoquecompraesmuyimportante_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lacalidaddelproductoquecompraesmuyimportante_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lacalidaddelproductoquecompraesmuyimportante_2.addFeatures(features_Lacalidaddelproductoquecompraesmuyimportante_2);var lyr_Lacalidaddelproductoquecompraesmuyimportante_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lacalidaddelproductoquecompraesmuyimportante_2, 
                style: style_Lacalidaddelproductoquecompraesmuyimportante_2,
    title: 'La calidad del producto que compra es muy importante<br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_2_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_2_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_2_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_2_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Lacalidaddelproductoquecompraesmuyimportante_2_4.png" />  80 - 100 <br />'
        });var format_Lamarcaonombrecomercialdelproductoquecompraesimportante_3 = new ol.format.GeoJSON();
var features_Lamarcaonombrecomercialdelproductoquecompraesimportante_3 = format_Lamarcaonombrecomercialdelproductoquecompraesimportante_3.readFeatures(json_Lamarcaonombrecomercialdelproductoquecompraesimportante_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lamarcaonombrecomercialdelproductoquecompraesimportante_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lamarcaonombrecomercialdelproductoquecompraesimportante_3.addFeatures(features_Lamarcaonombrecomercialdelproductoquecompraesimportante_3);var lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lamarcaonombrecomercialdelproductoquecompraesimportante_3, 
                style: style_Lamarcaonombrecomercialdelproductoquecompraesimportante_3,
    title: 'La marca o nombre comercial del producto que compra es importante<br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_3_0.png" />  0.0 - 20.0 <br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_3_1.png" />  20.0 - 40.0 <br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_3_2.png" />  40.0 - 60.0 <br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_3_3.png" />  60.0 - 80.0 <br />\
    <img src="styles/legend/Lamarcaonombrecomercialdelproductoquecompraesimportante_3_4.png" />  80.0 - 100.0 <br />'
        });var format_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4 = new ol.format.GeoJSON();
var features_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4 = format_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.readFeatures(json_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.addFeatures(features_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4);var lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4, 
                style: style_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4,
    title: 'Para comprar productos alimenticios prefiere hacerlo con productos frescos en el mercado<br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_4.png" />  80 - 100 <br />'
        });var format_Reparaunproductoelectrnicocuandosedaa_5 = new ol.format.GeoJSON();
var features_Reparaunproductoelectrnicocuandosedaa_5 = format_Reparaunproductoelectrnicocuandosedaa_5.readFeatures(json_Reparaunproductoelectrnicocuandosedaa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reparaunproductoelectrnicocuandosedaa_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Reparaunproductoelectrnicocuandosedaa_5.addFeatures(features_Reparaunproductoelectrnicocuandosedaa_5);var lyr_Reparaunproductoelectrnicocuandosedaa_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reparaunproductoelectrnicocuandosedaa_5, 
                style: style_Reparaunproductoelectrnicocuandosedaa_5,
    title: 'Repara un producto electrónico cuando se daña<br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_4.png" />  80 - 100 <br />'
        });

lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.setVisible(true);lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_1.setVisible(true);lyr_Lacalidaddelproductoquecompraesmuyimportante_2.setVisible(true);lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_3.setVisible(true);lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.setVisible(true);lyr_Reparaunproductoelectrnicocuandosedaa_5.setVisible(true);
var layersList = [baseLayer,lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0,lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_1,lyr_Lacalidaddelproductoquecompraesmuyimportante_2,lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_3,lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4,lyr_Reparaunproductoelectrnicocuandosedaa_5];
lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy import': 'Muy import', });
lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_1.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy import': 'Muy import', });
lyr_Lacalidaddelproductoquecompraesmuyimportante_2.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy import': 'Muy import', });
lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_3.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Importante': 'Importante', });
lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M19_Compra': 'M19_Compra', });
lyr_Reparaunproductoelectrnicocuandosedaa_5.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Lo reparo': 'Lo reparo', });
lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy import': 'Hidden', });
lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_1.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy import': 'Hidden', });
lyr_Lacalidaddelproductoquecompraesmuyimportante_2.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy import': 'Hidden', });
lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_3.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Importante': 'Hidden', });
lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M19_Compra': 'Hidden', });
lyr_Reparaunproductoelectrnicocuandosedaa_5.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Lo reparo': 'Hidden', });
lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.set('fieldLabels', {'Canton': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_1.set('fieldLabels', {'Canton': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Lacalidaddelproductoquecompraesmuyimportante_2.set('fieldLabels', {'Canton': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_3.set('fieldLabels', {'Canton': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.set('fieldLabels', {'Canton': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Reparaunproductoelectrnicocuandosedaa_5.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Reparaunproductoelectrnicocuandosedaa_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
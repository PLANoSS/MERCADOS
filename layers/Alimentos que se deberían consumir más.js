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
        });var format_Lacalidaddelproductoquecompraesmuyimportante_1 = new ol.format.GeoJSON();
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
        });var format_Lamarcaonombrecomercialdelproductoquecompraesimportante_2 = new ol.format.GeoJSON();
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
        });var format_Elpreciodelproductoesmuyimportantealahoradecomprar_3 = new ol.format.GeoJSON();
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
    title: '<b/>Percepción sobre compra de productos alimenticios:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que prefieren comprar productos frescos en los mercados.<br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4_4.png" />  80 - 100 <br /><br />'
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
    title: '<b/>Percepción sobre aparatos electrónicos descompuestos:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que repararían algún aparato electrónico de su hogar si se dañase.<br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Reparaunproductoelectrnicocuandosedaa_5_4.png" />  80 - 100 <br /><br />'
        });var format_Noestaradispuestoapagarmsporproductosecolgicos_6 = new ol.format.GeoJSON();
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
        });var format_Legustaraquehayanproductosdemejorcalidadenelmercado_7 = new ol.format.GeoJSON();
var features_Legustaraquehayanproductosdemejorcalidadenelmercado_7 = format_Legustaraquehayanproductosdemejorcalidadenelmercado_7.readFeatures(json_Legustaraquehayanproductosdemejorcalidadenelmercado_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legustaraquehayanproductosdemejorcalidadenelmercado_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Legustaraquehayanproductosdemejorcalidadenelmercado_7.addFeatures(features_Legustaraquehayanproductosdemejorcalidadenelmercado_7);var lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Legustaraquehayanproductosdemejorcalidadenelmercado_7, 
                style: style_Legustaraquehayanproductosdemejorcalidadenelmercado_7,
    title: '<b/>Percepción sobre la calidad de productos en el mercado:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que les gustaría que hayan productos de mejor calidad en los mercados.<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Legustaraquehayanproductosdemejorcalidadenelmercado_7_4.png" /> 80 - 100<br /><br />'
        });var format_Creequelefaltaconsumirmscereales_8 = new ol.format.GeoJSON();
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
        });var format_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9 = new ol.format.GeoJSON();
var features_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9 = format_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.readFeatures(json_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.addFeatures(features_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9);var lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9, 
                style: style_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9,
    title: '<b/>Percepción sobre valor nutricional de los productos que consume:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que no están para nada informadas sobre el valor nutricional de los<br />productos que consumen.<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9_4.png" /> 80 - 100<br /><br />'
        });
var group_AqusedespliegalaopcinmsseleccionadaparacadaunadelastemticassobreMercadosencadacantn = new ol.layer.Group({
                                layers: [lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0,lyr_Lacalidaddelproductoquecompraesmuyimportante_1,lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2,lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3,lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4,lyr_Reparaunproductoelectrnicocuandosedaa_5,lyr_Noestaradispuestoapagarmsporproductosecolgicos_6,lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7,lyr_Creequelefaltaconsumirmscereales_8,lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9,],
                                title: " "});

lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.setVisible(false);lyr_Lacalidaddelproductoquecompraesmuyimportante_1.setVisible(false);lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.setVisible(false);lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3.setVisible(false);lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.setVisible(false);lyr_Reparaunproductoelectrnicocuandosedaa_5.setVisible(false);lyr_Noestaradispuestoapagarmsporproductosecolgicos_6.setVisible(false);lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7.setVisible(false);lyr_Creequelefaltaconsumirmscereales_8.setVisible(true);lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.setVisible(false);
var layersList = [baseLayer,group_AqusedespliegalaopcinmsseleccionadaparacadaunadelastemticassobreMercadosencadacantn];
lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy import': 'Muy import', });
lyr_Lacalidaddelproductoquecompraesmuyimportante_1.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy import': 'Muy import', });
lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Importante': 'Importante', });
lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy import': 'Muy import', });
lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M19_Compra': 'M19_Compra', });
lyr_Reparaunproductoelectrnicocuandosedaa_5.set('fieldAliases', {'DPA_CANTON': 'DPA_CANTON', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Lo reparo': 'Lo reparo', });
lyr_Noestaradispuestoapagarmsporproductosecolgicos_6.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M54_M54T02': 'M54_M54T02', });
lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M55_M55T04': 'M55_M55T04', });
lyr_Creequelefaltaconsumirmscereales_8.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M56_M56T03': 'M56_M56T03', });
lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'M57_M56T03': 'M57_M56T03', });
lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy import': 'Hidden', });
lyr_Lacalidaddelproductoquecompraesmuyimportante_1.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy import': 'Hidden', });
lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Importante': 'Hidden', });
lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy import': 'Hidden', });
lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M19_Compra': 'Hidden', });
lyr_Reparaunproductoelectrnicocuandosedaa_5.set('fieldImages', {'DPA_CANTON': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Lo reparo': 'Hidden', });
lyr_Noestaradispuestoapagarmsporproductosecolgicos_6.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M54_M54T02': 'TextEdit', });
lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M55_M55T04': 'TextEdit', });
lyr_Creequelefaltaconsumirmscereales_8.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M56_M56T03': 'TextEdit', });
lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'M57_M56T03': 'TextEdit', });
lyr_Elimpactodelosproductossobreelambienteesmuyimportantealahoradecomprar_0.set('fieldLabels', {});
lyr_Lacalidaddelproductoquecompraesmuyimportante_1.set('fieldLabels', {});
lyr_Lamarcaonombrecomercialdelproductoquecompraesimportante_2.set('fieldLabels', {});
lyr_Elpreciodelproductoesmuyimportantealahoradecomprar_3.set('fieldLabels', {});
lyr_Paracomprarproductosalimenticiosprefierehacerloconproductosfrescosenelmercado_4.set('fieldLabels', {});
lyr_Reparaunproductoelectrnicocuandosedaa_5.set('fieldLabels', {});
lyr_Noestaradispuestoapagarmsporproductosecolgicos_6.set('fieldLabels', {});
lyr_Legustaraquehayanproductosdemejorcalidadenelmercado_7.set('fieldLabels', {});
lyr_Creequelefaltaconsumirmscereales_8.set('fieldLabels', {});
lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.set('fieldLabels', {});
lyr_Noestparanadainformadorespectoalvalornutricionaldelosproductosqueconsume_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
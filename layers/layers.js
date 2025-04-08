ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([234543.219297, 6247562.066099, 356391.221563, 6329255.613073]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Hidrantes_1 = new ol.format.GeoJSON();
var features_Hidrantes_1 = format_Hidrantes_1.readFeatures(json_Hidrantes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Hidrantes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrantes_1.addFeatures(features_Hidrantes_1);
var lyr_Hidrantes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrantes_1, 
                style: style_Hidrantes_1,
                popuplayertitle: "Hidrantes",
                interactive: true,
                title: '<img src="styles/legend/Hidrantes_1.png" /> Hidrantes'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Hidrantes_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Hidrantes_1];
lyr_Hidrantes_1.set('fieldAliases', {'LOCAL': 'LOCAL', 'ENDEREÇO': 'ENDEREÇO', 'LAT': 'LAT', 'LONG': 'LONG', 'CONDIÇÃO': 'CONDIÇÃO', 'field_6': 'field_6', });
lyr_Hidrantes_1.set('fieldImages', {'LOCAL': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'LAT': 'Range', 'LONG': 'Range', 'CONDIÇÃO': 'TextEdit', 'field_6': 'TextEdit', });
lyr_Hidrantes_1.set('fieldLabels', {'LOCAL': 'no label', 'ENDEREÇO': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'CONDIÇÃO': 'no label', 'field_6': 'no label', });
lyr_Hidrantes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
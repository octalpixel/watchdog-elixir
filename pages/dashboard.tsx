import { FunctionComponent } from "react";

const Dashboard: FunctionComponent = () => {
    return (
        <iframe src="https://appendix-elixir.kb.ap-south-1.aws.elastic-cloud.com:9243/app/dashboards#/view/e8a6f590-ba87-11ec-b330-d911d96edab4?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-90d%2Fd,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(attributes:(references:!((id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-layer-d4dcd1c6-7ff2-4dc7-bd3f-12fa90cd60c6,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:(d4dcd1c6-7ff2-4dc7-bd3f-12fa90cd60c6:(columnOrder:!('0046d16e-e426-4fd2-a136-e89182cb182d','3ca9105f-7a08-447f-a224-5e019f0536c6'),columns:('0046d16e-e426-4fd2-a136-e89182cb182d':(dataType:string,isBucketed:!t,label:'Top%20values%20of%20drugItems.drug.genericName.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:'3ca9105f-7a08-447f-a224-5e019f0536c6',type:column),orderDirection:desc,otherBucket:!t,parentFormat:(id:terms),size:10),scale:ordinal,sourceField:drugItems.drug.genericName.keyword),'3ca9105f-7a08-447f-a224-5e019f0536c6':(dataType:number,isBucketed:!f,label:'Count%20of%20records',operationType:count,scale:ratio,sourceField:___records___)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(axisTitlesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),fittingFunction:None,gridlinesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),labelsOrientation:(x:0,yLeft:0,yRight:0),layers:!((accessors:!('3ca9105f-7a08-447f-a224-5e019f0536c6'),layerId:d4dcd1c6-7ff2-4dc7-bd3f-12fa90cd60c6,layerType:data,seriesType:bar_horizontal,xAccessor:'0046d16e-e426-4fd2-a136-e89182cb182d')),legend:(isVisible:!t,position:bottom,shouldTruncate:!f,showSingleSeries:!t),preferredSeriesType:bar_horizontal,tickLabelsVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),valueLabels:hide,yLeftExtent:(mode:full),yRightExtent:(mode:full))),title:'',type:lens,visualizationType:lnsXY),enhancements:()),gridData:(h:19,i:'93451c29-5aa6-45c9-b16a-dcf9cf891de9',w:20,x:0,y:0),panelIndex:'93451c29-5aa6-45c9-b16a-dcf9cf891de9',type:lens,version:'8.1.2'),(embeddableConfig:(attributes:(description:'',layerListJSON:'%5B%7B%22sourceDescriptor%22:%7B%22type%22:%22EMS_TMS%22,%22isAutoSelect%22:true,%22lightModeDefault%22:%22road_map_desaturated%22%7D,%22id%22:%22dca554bb-0842-406e-a8f5-afd982a7460f%22,%22label%22:null,%22minZoom%22:0,%22maxZoom%22:24,%22alpha%22:1,%22visible%22:true,%22style%22:%7B%22type%22:%22TILE%22%7D,%22includeInFitToBounds%22:true,%22type%22:%22EMS_VECTOR_TILE%22%7D,%7B%22id%22:%22e488629f-2ee2-4f62-a550-cc21cff93363%22,%22sourceDescriptor%22:%7B%22geoField%22:%22institution.geo%22,%22id%22:%227e781981-91d2-43ac-b06b-fe9e36ddf39f%22,%22label%22:%22requests*%22,%22scalingType%22:%22MVT%22,%22tooltipProperties%22:%5B%5D,%22type%22:%22ES_SEARCH%22,%22indexPatternId%22:%22fce2ebf0-bb3a-11ec-b330-d911d96edab4%22%7D,%22type%22:%22MVT_VECTOR%22,%22visible%22:true,%22style%22:%7B%7D%7D%5D',mapStateJSON:'%7B%22zoom%22:6.67,%22center%22:%7B%22lon%22:80.84971,%22lat%22:7.59191%7D,%22timeFilters%22:%7B%22from%22:%22now-15d%22,%22to%22:%22now%22%7D,%22refreshConfig%22:%7B%22isPaused%22:false,%22interval%22:0%7D,%22query%22:%7B%22language%22:%22kuery%22,%22query%22:%22%22%7D,%22filters%22:%5B%5D,%22settings%22:%7B%22autoFitToDataBounds%22:false,%22backgroundColor%22:%22%23ffffff%22,%22disableInteractive%22:false,%22disableTooltipControl%22:false,%22hideToolbarOverlay%22:false,%22hideLayerControl%22:false,%22hideViewControl%22:false,%22initialLocation%22:%22LAST_SAVED_LOCATION%22,%22fixedLocation%22:%7B%22lat%22:0,%22lon%22:0,%22zoom%22:2%7D,%22browserLocation%22:%7B%22zoom%22:2%7D,%22maxZoom%22:24,%22minZoom%22:0,%22showScaleControl%22:false,%22showSpatialFilters%22:true,%22showTimesliderToggleButton%22:true,%22spatialFiltersAlpa%22:0.3,%22spatialFiltersFillColor%22:%22%23DA8B45%22,%22spatialFiltersLineColor%22:%22%23DA8B45%22%7D%7D',references:!(),title:'Request%20Map',uiStateJSON:'%7B%22isLayerTOCOpen%22:true,%22openTOCDetails%22:%5B%5D%7D'),enhancements:(),hiddenLayers:!(),isLayerTOCOpen:!f,mapBuffer:(maxLat:11.1784,maxLon:84.375,minLat:2.81137,minLon:75.9375),mapCenter:(lat:7.59191,lon:80.84971,zoom:6.37),openTOCDetails:!()),gridData:(h:19,i:be975fdc-ce4e-4d65-b983-2541884d9993,w:24,x:20,y:0),panelIndex:be975fdc-ce4e-4d65-b983-2541884d9993,type:map,version:'8.1.2'),(embeddableConfig:(attributes:(references:!((id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-layer-8532a193-af1d-440c-bc9b-b2ddbaaaddb8,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('8532a193-af1d-440c-bc9b-b2ddbaaaddb8':(columnOrder:!('94cb4103-f247-45c7-9ed2-23aaef000cd2',edbca69d-d324-4775-af2a-9277bfce5790),columns:('94cb4103-f247-45c7-9ed2-23aaef000cd2':(dataType:string,isBucketed:!t,label:'Top%20values%20of%20drugItems.drug.importer.name.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:edbca69d-d324-4775-af2a-9277bfce5790,type:column),orderDirection:desc,otherBucket:!t,parentFormat:(id:terms),size:10),scale:ordinal,sourceField:drugItems.drug.importer.name.keyword),edbca69d-d324-4775-af2a-9277bfce5790:(dataType:number,isBucketed:!f,label:'Count%20of%20records',operationType:count,scale:ratio,sourceField:___records___)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(layers:!((categoryDisplay:default,groups:!('94cb4103-f247-45c7-9ed2-23aaef000cd2'),layerId:'8532a193-af1d-440c-bc9b-b2ddbaaaddb8',layerType:data,legendDisplay:default,metric:edbca69d-d324-4775-af2a-9277bfce5790,nestedLegend:!f,numberDisplay:percent)),shape:donut)),title:'',type:lens,visualizationType:lnsPie),enhancements:(),hidePanelTitles:!f),gridData:(h:15,i:ca8fddeb-425d-4487-aa47-bf0fb40f6718,w:24,x:0,y:19),panelIndex:ca8fddeb-425d-4487-aa47-bf0fb40f6718,title:'By%20importer',type:lens,version:'8.1.2'),(embeddableConfig:(attributes:(references:!((id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-layer-7e621659-a402-49f5-b7bf-4ba6cb2987aa,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('7e621659-a402-49f5-b7bf-4ba6cb2987aa':(columnOrder:!(e2a5ac66-fed3-4fc2-a6a7-3be390fadcca,ca1e3cec-b55c-4ddc-923a-a4ddcd0bffd6),columns:(ca1e3cec-b55c-4ddc-923a-a4ddcd0bffd6:(dataType:number,isBucketed:!f,label:'Count%20of%20records',operationType:count,scale:ratio,sourceField:___records___),e2a5ac66-fed3-4fc2-a6a7-3be390fadcca:(dataType:string,isBucketed:!t,label:'Top%20values%20of%20drugItems.drug.country.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:ca1e3cec-b55c-4ddc-923a-a4ddcd0bffd6,type:column),orderDirection:desc,otherBucket:!t,parentFormat:(id:terms),size:10),scale:ordinal,sourceField:drugItems.drug.country.keyword)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(layers:!((categoryDisplay:default,groups:!(e2a5ac66-fed3-4fc2-a6a7-3be390fadcca),layerId:'7e621659-a402-49f5-b7bf-4ba6cb2987aa',layerType:data,legendDisplay:default,metric:ca1e3cec-b55c-4ddc-923a-a4ddcd0bffd6,nestedLegend:!f,numberDisplay:percent)),shape:donut)),title:'',type:lens,visualizationType:lnsPie),enhancements:(),hidePanelTitles:!f),gridData:(h:15,i:'5ee61c93-333d-4805-a03a-c563f22fd244',w:24,x:24,y:19),panelIndex:'5ee61c93-333d-4805-a03a-c563f22fd244',title:'By%20country%20of%20production',type:lens,version:'8.1.2'),(embeddableConfig:(attributes:(references:!((id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-layer-568f3ea9-f856-4370-8a7e-eeba201677a8,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('568f3ea9-f856-4370-8a7e-eeba201677a8':(columnOrder:!(fdd320af-ace3-4464-a580-e3bedd1ecc56,cd72a52f-eb87-4cb1-9e46-1eda805b0deb),columns:(cd72a52f-eb87-4cb1-9e46-1eda805b0deb:(dataType:number,isBucketed:!f,label:'Count%20of%20records',operationType:count,scale:ratio,sourceField:___records___),fdd320af-ace3-4464-a580-e3bedd1ecc56:(dataType:string,isBucketed:!t,label:'Top%20values%20of%20institution.district.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:cd72a52f-eb87-4cb1-9e46-1eda805b0deb,type:column),orderDirection:desc,otherBucket:!t,parentFormat:(id:terms),size:20),scale:ordinal,sourceField:institution.district.keyword)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(layers:!((categoryDisplay:default,groups:!(fdd320af-ace3-4464-a580-e3bedd1ecc56),layerId:'568f3ea9-f856-4370-8a7e-eeba201677a8',layerType:data,legendDisplay:default,metric:cd72a52f-eb87-4cb1-9e46-1eda805b0deb,nestedLegend:!f,numberDisplay:percent)),shape:donut)),title:'',type:lens,visualizationType:lnsPie),enhancements:(),hidePanelTitles:!f),gridData:(h:15,i:'854db3c1-0672-4a7a-bbf9-d5c60ffdf2b0',w:24,x:0,y:34),panelIndex:'854db3c1-0672-4a7a-bbf9-d5c60ffdf2b0',title:'By%20District',type:lens,version:'8.1.2'),(embeddableConfig:(attributes:(references:!((id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:fce2ebf0-bb3a-11ec-b330-d911d96edab4,name:indexpattern-datasource-layer-4da5f339-d973-4c96-bd26-171c7ca69933,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('4da5f339-d973-4c96-bd26-171c7ca69933':(columnOrder:!('63de18d1-a081-46bf-b06f-4c96bb12438f',dda9bc3d-f1b3-4e43-a9dc-1c3873329686),columns:('63de18d1-a081-46bf-b06f-4c96bb12438f':(dataType:string,isBucketed:!t,label:'Top%20values%20of%20drugItems.drug.genericName.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:dda9bc3d-f1b3-4e43-a9dc-1c3873329686,type:column),orderDirection:desc,otherBucket:!t,parentFormat:(id:terms),size:20),scale:ordinal,sourceField:drugItems.drug.genericName.keyword),dda9bc3d-f1b3-4e43-a9dc-1c3873329686:(dataType:number,isBucketed:!f,label:'Count%20of%20records',operationType:count,scale:ratio,sourceField:___records___)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(layers:!((categoryDisplay:default,groups:!('63de18d1-a081-46bf-b06f-4c96bb12438f'),layerId:'4da5f339-d973-4c96-bd26-171c7ca69933',layerType:data,legendDisplay:default,metric:dda9bc3d-f1b3-4e43-a9dc-1c3873329686,nestedLegend:!f,numberDisplay:percent)),shape:treemap)),title:'',type:lens,visualizationType:lnsPie),enhancements:()),gridData:(h:15,i:'0da7628c-e043-467c-afad-69b54c252bda',w:24,x:24,y:34),panelIndex:'0da7628c-e043-467c-afad-69b54c252bda',type:lens,version:'8.1.2')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:'Health%20Dashboard',viewMode:edit)&show-query-input=true&show-time-filter=true" height="600" width="800"></iframe>
    );
}

export default Dashboard;
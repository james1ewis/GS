Ext.define('GS.view.SearchResultDetails', {
	extend: 'Ext.Panel',
	xtype: 'searchresultdetails',
	config: {
		styleHtmlContent: true,
		scrollable: 'vertical',
		title: 'Voyage Details',
		
		tpl: 'From Date: {departDate}, To Date: {ariveDate}, Cabin Grade: {cabinGrade}'
	}
});
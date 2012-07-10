Ext.define('GS.view.SearchResultsMain', {
	extend: 'Ext.navigation.View',
	xtype: 'mainpanel',
	requires: [
		'GS.view.SearchResultsList',
		'GS.view.SearchResultDetails'
	],
	config: {
		title: 'Results',
		iconCls: 'star',
		items: [{
			xtype: 'searchresultslist'
		}]
	}	
});
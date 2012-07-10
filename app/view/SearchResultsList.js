

Ext.define('GS.view.SearchResultsList', {
	extend: 'Ext.List',
	xtype: 'searchresultslist',
	config: {
		title: 'Search Results',
		grouped: true,
		//indexBar: true,
		itemTpl: '{fromPort} - {cabinGrade}',
		store: 'Results',
		onItemDisclosure: true
	}
});
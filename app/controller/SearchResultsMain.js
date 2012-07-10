Ext.define('GS.controller.SearchResultsMain', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			main: 'mainpanel'
		},
		control: {
			'searchresultslist': {
				disclose: 'showDetail'
			}
		}
	},
	
	showDetail: function (list, record) {
		this.getMain().push({
			xtype: 'searchresultdetails',
			data: record.data
		});
	}
});
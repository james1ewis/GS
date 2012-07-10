Ext.define("GS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'top',

        items: [
			{
				xtype: 'homepanel'
			},
			{
				xtype: 'bookingdetailsform'
			}
        ]
    }
});

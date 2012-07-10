Ext.define('GS.view.Home', {

	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
		title: 'Home',
		iconCls: 'home',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		items: [
			{
				xtype: 'panel',
				html: [
					'<img src="resources/images/HrgLogo.gif"/>',			
					'<h1>Mobile Booking</h1>',
					"<p>Welcome to the Hurtigruten mobile booking application.  To get started",
					" click next.</p>",
				].join("")
			},
			{
				xtype: 'button',
				text: 'Next',
				ui: 'confim'
			}
		]
	}

});
Ext.define('GS.view.BookingDetails', {
	
	extend: 'Ext.form.Panel',
	xtype: 'bookingdetailsform',
	
	config: {
		title: 'Contact',
		iconCls: 'user',
		styleHtmlContent: true,
		items: [
			{			
				xtype: 'fieldset',
				title: 'Contact Us',
				instructions: '(email is sexy)',
				
				items: [		
					{
						xtype: 'textfield',
						name: 'name',
						label: 'Name'
					},
					{
						xtype: 'emailfield',
						name: 'email',
						label: 'Email'
					},
					{
						xtype: 'textareafield',
						name: 'message',
						label: 'cool'
					}
				]
			},
			{
				xtype: 'button',
				text: 'Send',
				ui: 'confim'
			}			
		]
	}
});
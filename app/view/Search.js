var ports = [
	{
		text: 'Bergen',
		value: 'BGO'
	},
	{
		text: 'Kirkines',
		value: 'KKN'
	},
	{
		text: 'Trondiem',
		value: 'TRD'
	},
	{
		text: 'Iceland',
		value: 'ICE'
	}
];

Ext.define('GS.view.Search', {
	
	extend: 'Ext.form.Panel',
	xtype: 'bookingdetailsform',
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Select',
		'Ext.field.DatePicker'
	],
	
	config: {
		title: 'Search',
		iconCls: 'user',
		styleHtmlContent: true,
		items: [
			{			
				xtype: 'fieldset',
				title: 'Search',
				instructions: '(Note: this is for a single cabin search only.  Passengers denotes the number of passengers in the required cabin.)',
				
				items: [		
					{
						xtype: 'selectfield',
						name: 'fromPort',
						label: 'From',
						options: ports
					},
					{
						xtype: 'selectfield',
						name: 'toPort',
						label: 'To',
						options: ports
					},
					{
						xtype: 'datepickerfield',
						destroyPickerOnHide: true,
						name: 'departureDate',
						label: 'Depart',
						value: new Date(),
						picker: {
							yearFrom: 2012
						}						
					},
					{
						xtype: 'datepickerfield',
						destroyPickerOnHide: true,
						name: 'arrivalDate',
						label: 'Arrive',
						value: new Date(),
						picker: {
							yearFrom: 2012
						}
					},
					{
						xtype: 'selectfield',
						name: 'numPax',
						label: 'Pasengers',
						options: [
							{
								text: 'One',
								value: '1'
							},
							{
								text: 'Two',
								value: '2'								
							},
							{
								text: 'Three',
								value: '3'								
							},
							{
								text: 'Four',
								value: '4'								
							}
						]
					}
				]
			},
			{
				xtype: 'button',
				text: 'Search',
				ui: 'confim'
			}			
		]
	}
});
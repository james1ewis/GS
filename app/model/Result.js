Ext.define('GS.model.Result', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: ['fromPort','toPort','departDate','ariveDate','shipName','cabinGrade','price']
	}
});
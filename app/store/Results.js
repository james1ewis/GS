Ext.define('GS.store.Results', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'GS.model.Result',
		sorters: 'departDate',
		grouper: function(record) {
			return record.get('departDate');
		},
		data: [
			{ fromPort: 'BGO', toPort: 'BGO', departDate: '2012-08-01', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'N1', price: '300'},
			{ fromPort: 'BGO', toPort: 'BGO', departDate: '2012-08-01', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'N2', price: '300'},
			{ fromPort: 'BGO', toPort: 'BGO', departDate: '2012-08-01', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'P2', price: '300'},
			{ fromPort: 'TRD', toPort: 'BGO', departDate: '2012-08-01', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'J4', price: '300'},
			{ fromPort: 'TRD', toPort: 'BGO', departDate: '2012-08-01', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'K4', price: '300'},
			{ fromPort: 'TRD', toPort: 'KKN', departDate: '2012-08-02', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'N2', price: '300'},
			{ fromPort: 'TRD', toPort: 'KKN', departDate: '2012-08-02', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'N4', price: '300'},
			{ fromPort: 'ICE', toPort: 'TRD', departDate: '2012-08-02', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'J3', price: '300'},
			{ fromPort: 'BGO', toPort: 'KKN', departDate: '2012-08-02', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'J2', price: '300'},
			{ fromPort: 'ICE', toPort: 'TRD', departDate: '2012-08-03', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'N2', price: '300'},
			{ fromPort: 'TRD', toPort: 'TRD', departDate: '2012-08-03', ariveDate: '2012-08-05', shipName: 'The Daddy', cabinGrade: 'N1', price: '300'}
		]
		//proxy: 
	}
});
var pivotObj = new ej.pivotview.PivotView({
	dataSourceSettings: {
    url: 'https://localhost:7161/Order',
    columns: [{ name: 'ShipName' }],
    values: [{ name: 'Freight', caption: 'Sum of Freight' },],
    rows: [{ name: 'ShipCity' }],
	},
	showFieldList: true,
	width: '100%',
  height: 290,
});
pivotObj.appendTo('#PivotView');
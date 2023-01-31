var pivotObj = new ej.pivotview.PivotView({
	dataSourceSettings: {
    url: 'https://localhost:7146/Pivot',
    columns: [{ name: 'ShipName' }],
    values: [{ name: 'Freight', caption: 'Sum of Freight' },],
    rows: [{ name: 'ShipCity' }],
	},
	showFieldList: true,
	width: '100%',
  height: 350,
});
pivotObj.appendTo('#PivotView');
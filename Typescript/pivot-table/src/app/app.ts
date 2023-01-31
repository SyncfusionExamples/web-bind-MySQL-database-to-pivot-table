import { PivotView,FieldList} from '@syncfusion/ej2-pivotview';
PivotView.Inject(FieldList);
let pivotTableObj: PivotView = new PivotView({
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
pivotTableObj.appendTo('#PivotTable');
  
  
import { Component, ViewChild } from '@angular/core';
import { IDataOptions, PivotView} from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showFieldList='true'></ejs-pivotview></div>
  `
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;
    ngOnInit(): void {
        this.dataSourceSettings = {
          url: 'https://localhost:7146/Pivot',
          columns: [{ name: 'ShipName' }],
          values: [{ name: 'Freight', caption: 'Sum of Freight' },],
          rows: [{ name: 'ShipCity' }],
        }     
    }
}
import { Component, OnInit } from '@angular/core';
import { FieldListService, IDataOptions } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings></ejs-pivotview>`,
  providers: [FieldListService],
})
export class AppComponent implements OnInit {
    public dataSourceSettings: IDataOptions | undefined;

    ngOnInit(): void {

        this.dataSourceSettings = {
          enableSorting: true,
          expandAll: false,
          url: 'https://localhost:7161/Order',
            columns: [{ name: 'ShipName' }],
            values: [{ name: 'Freight', caption: 'Sum of Freight' },],
            rows: [{ name: 'ShipCity' }],
        };
    }
}
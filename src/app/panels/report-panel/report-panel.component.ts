import { Component, ViewChild } from '@angular/core';
import { TelerikReportingModule, TelerikReportViewerComponent } from '@progress/telerik-angular-report-viewer';

interface Item {
  text: string,
  value: string
}

@Component({
  selector: 'app-report-panel',
  templateUrl: './report-panel.component.html',
  styleUrls: ['./report-panel.component.css']
})
export class ReportPanelComponent {
 title = 'View, Export or Print Green Nations Report';  

 @ViewChild('viewer1') viewer :TelerikReportViewerComponent; 

  public listItems: Array<Item> =   [
    { text: "Green Nations 2016", value: "GreenNations2016.trdp" },
    { text: "Dashboard", value: "dashboard.trdp" },
    { text: "Invoice", value: "invoice.trdp" }
  ];

  public defaultItem: { text: string, value: string } = { text: "Select report...", value: null };

  mySelectedReport:any= {
        report: null,
        parameters: {}
    };

  public handleSelectionChange(mySelectedValue: any): void {
    // console.log("handleReportChange", value);
    this.mySelectedReport.report = mySelectedValue.value;
    // console.log("My selected report: " + this.mySelectedReport.report);
    this.viewerContainerStyle.visibility = 'visible';
  }

  public handleValueChange(): void {
    this.viewer.setReportSource(this.mySelectedReport);
  }

  viewerContainerStyle = {
    visibility: 'hidden',
    position: 'relative',
    top: '40px',
    height:'750px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    overflow: 'hidden',
    ['font-family']: 'ms sans serif'
  };
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  t1;
  t2;
  @ViewChild('possiblerun') possiblerunInTS: ElementRef;
  
  @ViewChild('wickettype') wickettypeInTS: ElementRef;
  private btnDisable: boolean = true;
  private btnCatchByDisable:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  onSelectOfPossibility()
  {
    this.t1=((<HTMLInputElement>this.possiblerunInTS.nativeElement).value);
    if (this.t1=='Wicket') {
      this.btnDisable = false;
      console.log("In Possibility");  
    }
    
  }

  onSelectOfWicket()
  {
    this.t2=((<HTMLInputElement>this.wickettypeInTS.nativeElement).value);
    if(this.t2=='Catch')
    {
      this.btnCatchByDisable=false;
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-demo-component',
  templateUrl: './ngstyle-demo-component.component.html',
  styleUrls: ['./ngstyle-demo-component.component.css']
})
export class NgstyleDemoComponentComponent implements OnInit {

  canSave=true;
  isUnchanged=false;
  isSpecial=true;

  myCssStyle={
    'font-style':this.canSave?'italic':'normal',
    'font-weight':!this.isUnchanged?'bold':'normal',
    'font-size':this.isSpecial?'24px':'34px'

  }

  constructor() { }

  ngOnInit(): void {
  }

  changeStyle():void{
    this.canSave=!this.canSave;
    this.isUnchanged=!this.isUnchanged;
    this.isSpecial=!this.isSpecial;
    this.myCssStyle={
      'font-style':this.canSave?'italic':'normal',
      'font-weight':!this.isUnchanged?'bold':'normal',
      'font-size':this.isSpecial?'24px':'34px'
  
    }
  }

}

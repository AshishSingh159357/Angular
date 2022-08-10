import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-demo',
  templateUrl: './ngclass-demo.component.html',
  styleUrls: ['./ngclass-demo.component.css']
})
export class NgclassDemoComponent implements OnInit {

  canSave=true;
  isUnchanged=false;
  isSpecial=true;

  myCssClasses={
    saveable:this.canSave,
    changed:!this.isUnchanged,
    special:this.isSpecial 
  }
  constructor() { }

  ngOnInit(): void {
  }

  changeClass():void{
    this.canSave=!this.canSave;
    this.isUnchanged=!this.isUnchanged;
    this.isSpecial=!this.isSpecial ;

   this.myCssClasses={
      saveable:this.canSave,
      changed:!this.isUnchanged,
      special:this.isSpecial 
    }
  }

}

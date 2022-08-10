import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { FormsModule } from '@angular/forms';
import { NgforDemoComponent } from './ngfor-demo/ngfor-demo.component';
import { NgstyleDemoComponentComponent } from './ngstyle-demo-component/ngstyle-demo-component.component';
import { NgclassDemoComponent } from './ngclass-demo/ngclass-demo.component';
import { NgswitchDemoComponent } from './ngswitch-demo/ngswitch-demo.component';



@NgModule({
  declarations: [
    NgifDemoComponent,
    NgforDemoComponent,
    NgstyleDemoComponentComponent,
    NgclassDemoComponent,
    NgswitchDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   
  ],
  exports:[NgifDemoComponent, NgforDemoComponent,NgstyleDemoComponentComponent,NgclassDemoComponent,NgswitchDemoComponent]
})
export class DirectiveDemoModule { }

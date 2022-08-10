import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGreetingComponent } from './my-greeting/my-greeting.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindDemoComponent } from './event-bind-demo/event-bind-demo.component';
import { TwoWayDatabindDemoComponent } from './two-way-databind-demo/two-way-databind-demo.component';
import { DirectiveDemoModule } from './directive-demo/directive-demo.module';
import { HighlightDirective } from './highlight.directive';
import { TemplateRefVarDemoComponent } from './template-ref-var-demo/template-ref-var-demo.component';
import { ProductModule } from './product/product.module';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SquarePipe } from './square.pipe';
import { FibonacciPipe } from './fibonacci.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyGreetingComponent,
    PropertyBindingComponent,
    EventBindDemoComponent,
    TwoWayDatabindDemoComponent,
    HighlightDirective,
    TemplateRefVarDemoComponent,
    PipeDemoComponent,
    SquarePipe,
    FibonacciPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DirectiveDemoModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
//import the directive
import { UnderlineDirective } from '../directives/attributes/underline.directive';
import { AddElementDirective } from '../directives/structural/addElement.directive';

@NgModule({
    declarations: [UnderlineDirective, AddElementDirective],
    exports: [UnderlineDirective, AddElementDirective]//export so that this will be available 
})
export class SharedModule{}

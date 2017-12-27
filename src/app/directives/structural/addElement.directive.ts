import {
    Directive,
    ViewContainerRef,
    OnChanges,
    TemplateRef,
    Input,
   } from '@angular/core';
  
  @Directive({
    selector: '[appNgLoop]'
  })
  export class AddElementDirective implements OnChanges {
    @Input() appNgLoopOf: number;
  
    constructor(private container: ViewContainerRef,
                private template: TemplateRef<any>,
              ) { }
  
    ngOnChanges() {
      this.container.clear();
  
      for (var _i = 0; _i < this.appNgLoopOf; _i++) {
        this.container.createEmbeddedView(this.template,  {          
         });
      }
    }
  }
  
  
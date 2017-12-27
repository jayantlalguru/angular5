import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector: 'grid-display',
    templateUrl: './grid.html'
})
export class GridComponent{
    //data to bind in the grid
    gridData: Array<Object> = new Array<Object>(); 
    //column name collection
    gridColumns: Array<string> = new Array<string>();
    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>();
    //Header
    @Input("grid-header")
    header: string = "";
    
    @Input("grid-data")
    set setGridData(dataObject: Array<Object>){        
        if(dataObject.length > 0){
            var columnNames = Object.keys(dataObject[0]);
            this.gridColumns = new Array<string>();
            for(var index in columnNames){
                this.gridColumns.push(columnNames[index]);
            }
            this.gridData = dataObject;
        }
    }

    Select(_selected: Object) {
        this.selected.emit(_selected);
    }
      
}
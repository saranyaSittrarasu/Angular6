import{Component,Input,Output,EventEmitter} from "@angular/core"
import { Event } from "@angular/router";

@Component({
    selector:"grid-ui",
    templateUrl:"./CustomerApp.Grid.html"
})
export class GridComponent{
    //for the column name
    gridColumns:Array<object>=new Array<Object>();
    //for the data
    gridData:Array<object>=new Array<Object>();
    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<object>){
        this.gridColumns=_gridColumns;
    }
    @Input("grid-data")
    set setGridData(_gridData:Array<object>){
        this.gridData=_gridData;
    }
    @Output("grid-selected")
    eventemitter: EventEmitter<object>=new EventEmitter<object>();
    SelectGrid(_selected:Object){
        //send the selected object
        //to the ui under which component is running
        this.eventemitter.emit(_selected);
    }
}
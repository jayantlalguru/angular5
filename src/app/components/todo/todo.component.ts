import { Component, style } from "@angular/core";
import { TodoModel } from "../../models/todo/todo.model";
import { itodo } from './itodo';
import { TodoStatus } from './todoStatus';
@Component({    
    templateUrl: '../../views/todo/todo.html',
    styleUrls: ['../../css/todo.css']
})
export class TodoComponent extends TodoStatus implements itodo{   
    currentTodo: TodoModel = new TodoModel();
    todos: Array<TodoModel> = new Array<TodoModel>();
    currentCss: string = ""; 
   
    AddTask(){
        if(this.currentTodo.todoTask != '')
        {
            this.currentTodo.id = this.todos.length + 1;
            this.todos.push(this.currentTodo);
            this.todos = this.todos.slice();
            this.currentTodo = new TodoModel();
        }
    }
    //temporary code. Needs improvement
    Done(task){
        for(let comTask of this.todos){
            if(comTask.id == task.id){                
                if(task.isChecked == false){                    
                    comTask.cssClass = "striket";
                    this.Completed(task);
                }
                else{
                    comTask.cssClass = "";
                    this.PendingTask(task);
                }
            }
        }
    }
    
}
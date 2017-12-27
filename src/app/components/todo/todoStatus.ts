import { TodoModel } from "../../models/todo/todo.model";
export class TodoStatus{
    todosCompleted: Array<TodoModel> = new Array<TodoModel>();
    num: number = 0;
    Completed(task){        
        this.todosCompleted.push(task);
        this.todosCompleted = this.todosCompleted.slice();                
    }
    //temporary code. Needs improvement
    PendingTask(task)
    {
        this.num = 0;
        for(let tsk of this.todosCompleted){            
            if(tsk.id == task.id){               
                this.todosCompleted.splice(this.num, 1);
            }
            this.num = this.num + 1
        }
    }
}
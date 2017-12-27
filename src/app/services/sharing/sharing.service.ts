import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SharingService{    
    private userName = new BehaviorSubject<string>('');    
    cast = this.userName.asObservable();
    getData(user){
        this.userName.next(user);
    }
}
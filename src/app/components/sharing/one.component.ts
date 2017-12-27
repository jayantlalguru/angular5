import { Component, OnInit } from '@angular/core'
import { SharingService } from '../../services/sharing/sharing.service'
@Component({
    templateUrl: '../../views/sharing/one.html'
})
export class OneComponent{
    constructor(private sharingService: SharingService){       
    }
    userName: string;    
    ngOnInit(){
        this.sharingService.cast.subscribe(u=> this.userName = u);
    }
    valueChange(et) {  
        this.sharingService.getData(this.userName);        
    }
}
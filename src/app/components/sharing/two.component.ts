import { Component } from '@angular/core'
import { SharingService } from '../../services/sharing/sharing.service'
@Component({
    selector: 'app-two',
    templateUrl: '../../views/sharing/two.html'
})
export class TwoComponent{
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
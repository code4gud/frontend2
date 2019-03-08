import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
//import { FormDataService }     from '../data/data.service';
import { image, IMG }            from '../data/data.model';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './work2.component.html'
})


export class Work2Component implements OnInit {
    
    itemsList: image[] = IMG;


    constructor(private router: Router) {
    }
    
    ngOnInit() {       
        this.itemsList = IMG;
        console.log('Work2 feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/map']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/map']);
        }
    }
}
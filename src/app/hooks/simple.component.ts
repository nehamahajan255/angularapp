import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";


@Component ({
    selector :'simple',
    template :'you have enter :{{simpleInput}}'  
    

})

export class SimpleComponent implements OnChanges
{
    @Input() simpleInput :string;
    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes){
            let change =changes[propertyName];
            let current=JSON.stringify(change.currentValue);
            let previous=JSON.stringify(change.previousValue);

            console.log(propertyName +': currentValue = '+current+',previousValue='+previous);
            
        }
            
        }
    }


export class Quote {
    showDescription:boolean;
    constructor( public id:number, public name:string, public quoteTitle:string, public quoteMessage:string, public completeDate:Date){
        this.showDescription = false;
     }
}


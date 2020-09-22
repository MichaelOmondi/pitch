import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isRead = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upvote:number=0;
upvotesClick(){
  this.upvote++;
}
downvote:number=0;
downvotesClick(){
  this.downvote++;
}
  
  constructor() { }

  ngOnInit(): void {
  }

}

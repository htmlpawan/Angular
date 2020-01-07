import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public specialName;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  firevent(){
    this.childEvent.emit('Hey codevolution');
  }

  ngOnInit() {
  }

}
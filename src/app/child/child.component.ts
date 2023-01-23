import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../main/main.component';

@Component({
  selector: 'ngPr-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input () user?:IUser
@Output () addBookEvent = new EventEmitter<any>()

text=''

addBookEventHandler (){
  this.addBookEvent.emit(this.text)
  this.text = ''
}
}

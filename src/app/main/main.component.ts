import { Component } from '@angular/core'

export interface IUser {
  age: number
  name: string
  surName:string
}

@Component({
  selector: 'ngPr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isLoading:boolean = false
  public componentName = 'MAIN'
  text = 'start text'
  user: IUser = {
    age: 32,
    name: 'Alexander',
    surName:'Alexandrovich'
  }
  books:Array<string>=['first','second']
  letters:String[]=['a','b','c','d','e','f']

  addBook(book:string){
    this.books.push(book)
  }
  constructor(){
    setTimeout(() => {
      this.isLoading= true
    }, 3000);
  }
}

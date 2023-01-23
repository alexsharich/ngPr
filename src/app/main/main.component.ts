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
  public componentName = 'MAIN'
  text = 'start text'
  user: IUser = {
    age: 32,
    name: 'Alexander',
    surName:'Alexandrovich'
  }
  books:Array<string>=['first','second']

  addBook(book:string){
    this.books.push(book)
  }
}

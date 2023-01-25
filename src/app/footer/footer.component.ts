import { Component } from '@angular/core'

interface Fruits{
id:number
name:string
price:number
}

@Component({
  selector: 'ngPr-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public componentName = 'FOOTER'
  value:string=''
  fruits:Array<Fruits>=[
    {id:1,name:'apple',price:10},
    {id:2,name:'orange',price:20},
    {id:3,name:'bananas',price:15},
    {id:4,name:'lemon',price:5}
  ]
}

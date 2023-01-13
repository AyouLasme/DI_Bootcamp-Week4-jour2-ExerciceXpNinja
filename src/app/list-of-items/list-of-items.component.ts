import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css'],
})
export class ListOfItemsComponent {
 
 
  items=[
  {
    check:false,
    label:"Tv smart 32 pouce"
  },
  {
    check:true,
    label:"Tv Hisense 43 pouce"
  },
  {
    check:false,
    label:"Hp Laptop Toshiba"
  },
  {
    check:true,
    label:"Telephone samsung A70"
  },
  {
    check:true,
    label:"ceinture Tommy Hilfiger"
  },
  {
    check:false,
    label:"Sac à main Aldo"
  },
  {
    check:true,
    label:"Meche humaine naturelle"
  }
]

}

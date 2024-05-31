import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchOpen: boolean = false;

  openSearch(){
    this.searchOpen =! this.searchOpen;
  }
}

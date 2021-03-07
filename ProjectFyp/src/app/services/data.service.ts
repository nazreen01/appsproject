import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items: any=[];

  constructor() {
  this.items = [
  {title: "Ground Floor"},
  {title: "1"},
  {title: "2"},
  {title: "3"},
  {title: "4"},
  {title: "5"},
  ];
  }

filterItems(searchTerm) {
	return this.items.filter(item => {
	return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
	});
}

}

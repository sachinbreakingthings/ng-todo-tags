import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  @Input() tagList;
  @Output() tagChange = new EventEmitter();

  isClicked = [];
  selectedIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  select(index) {
      this.selectedIndex = index;
  }

  onTagClick(tag) {
    this.tagChange.emit(tag);
  }

}

import { Component, OnInit } from '@angular/core';
import { TagService } from './service/tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-todo-tags';
  tagList = [];
  selectedTag;

  constructor(private _tagService: TagService) { }

  ngOnInit() {
    this.fetchTags();
  }

  fetchTags() {
    this.tagList = this._tagService.getTags();
    this.selectedTag = this.tagList[0];
  }

  onTagChange(tag) {
    this.selectedTag = tag;
  }
}

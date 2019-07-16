import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TagService {

  tags = [
    { name: 'focus'},
    { name: 'goals'},
    { name: 'fit in'},
    { name: 'back burner'},
  ];

  constructor() { }

  getTags() {
    return this.tags;
  }

  createTag(tag) {
    this.tags.push(tag);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TagListComponent } from './component/tag-list/tag-list.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TagListComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

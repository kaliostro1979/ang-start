import {Component, Input} from "@angular/core";
import {Event} from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})


export class AppFormComponent {
  @Input() itemsArray?: [{content: string, isDone: boolean}?]

  todoContent = ""

  setToDoItem = (content: string)=>{
    this.todoContent = content
    this.itemsArray?.push({content: content, isDone: false})
    this.todoContent = " "
  }
}

import {Component, Input} from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})

export class AppItemComponent {
  @Input() toDoItem?: { content: string, isDone: boolean }
  @Input() index?: number
  @Input() itemsArray?: [{ content: string, isDone: boolean }?]

  isChecked = false

  setToDoAsDone = () => {
    this.isChecked = !this.isChecked
    if (this.toDoItem) {
      this.toDoItem.isDone = this.isChecked
    }
  }

  removeToDoFromList = () => {
    if (this.index) {
      this.itemsArray?.splice(this.index - 1, 1)
    }
  }
}

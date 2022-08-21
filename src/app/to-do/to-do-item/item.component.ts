import {Component, Input} from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})

export class AppItemComponent {
  @Input() toDoItem?: {content: string, isDone: boolean}
  @Input() index?: number
}

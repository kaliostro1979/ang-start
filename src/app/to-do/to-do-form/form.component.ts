import {Component} from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})


export class AppFormComponent {

  items:[{content: string, isDone: boolean}?] = []

  setToDoItem = (content: string)=>{
    this.items.push({content: content, isDone: false})
    console.log(this.items)
  }
}

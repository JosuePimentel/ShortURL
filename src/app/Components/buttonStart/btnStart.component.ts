import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-btnStart",
    standalone: true,
    imports: [RouterLink],
    templateUrl: "btnStart.component.html"
})

export class ButtonStartedComponent { 
    @Input({required: true}) text: string = ''
    @Input({required: false}) additionalClass: string = ''

}
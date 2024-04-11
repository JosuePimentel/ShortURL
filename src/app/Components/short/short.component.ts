import { Component, Input } from "@angular/core";
import { shortURL } from "../../module/types";

@Component({
    selector: "app-short",
    standalone: true,
    imports: [],
    templateUrl: "short.component.html"
})

export class ShortComponent { 
    @Input({required: true}) url: shortURL = { }

    copy() { 
        
    }
}
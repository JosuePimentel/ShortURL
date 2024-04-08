import { Component } from "@angular/core";

@Component({
    selector: "app-shortURL",
    standalone: true,
    imports: [],
    templateUrl: "shortURL.component.html"
})

export class ShortURLComponent { 
    noUrl: boolean = false

    shortLink() { }
}
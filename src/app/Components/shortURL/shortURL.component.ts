import { Component, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { URLService } from "../../Service/url.service";

@Component({
    selector: "app-shortURL",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "shortURL.component.html"
})

export class ShortURLComponent { 
    noUrl: boolean = false
    urlValue: string = ''

    @Output() eventEmmiterURL: EventEmitter<any> = new EventEmitter

    constructor(private service: URLService) { }

    getURLShort() {
        this.service.getURL(this.urlValue).subscribe((resp: any) => {
            this.eventEmmiterURL.emit(resp)
        })
    }

    shortLink() { 
        if(this.urlValue == '')
        {
            this.noUrl = true
        }
        else
        {
            this.noUrl = false
            this.getURLShort()
            this.urlValue = ''
        }
    }
}
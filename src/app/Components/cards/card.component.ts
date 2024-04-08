import { Component, Input, OnInit, Sanitizer } from "@angular/core";
import { card } from "../../module/types";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
    selector: "app-card",
    standalone: true,
    imports: [],
    templateUrl: "card.component.html"
})

export class CardComponent implements OnInit{ 
    @Input({required: true}) card: card | any = {
        title: '',
        text: '',
        svg: ''
    }
    @Input({required: true}) margin: number = 0
    safeSVG: SafeHtml = ''

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.safeSVG = this.sanitizer.bypassSecurityTrustHtml(this.card?.svg)
    }
}
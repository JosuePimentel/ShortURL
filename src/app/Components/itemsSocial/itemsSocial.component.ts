import { Component, Input, OnInit } from "@angular/core";
import { itemLinkSVG, items } from "../../module/types";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
    selector: "app-itemsSocial",
    standalone: true,
    imports: [],
    templateUrl: 'itemsSocial.component.html'
})

export class ItemsSocialComponent implements OnInit {
    @Input({required: false}) item: itemLinkSVG | any = { }
    @Input({required: false}) additionalCSS: string = ''
    svgSafe: SafeHtml = '';

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.svgSafe = this.sanitizer.bypassSecurityTrustHtml(this.item?.SVG);
    }
}
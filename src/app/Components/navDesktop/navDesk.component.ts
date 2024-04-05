import { Component, Input } from "@angular/core";
import { items } from "../../module/types";
import { ItemsRouterComponent } from "../itemsRouter/itemsRouter.component";

@Component({
    selector: 'app-navDesk',
    standalone: true,
    imports: [ItemsRouterComponent],
    templateUrl: 'navDesk.component.html'
})

export class NavDeskComponent { 
    @Input({required: true}) itemLink:items[] = []
    @Input({required: true}) itemLogin:items[] = []
}
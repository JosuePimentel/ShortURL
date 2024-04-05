import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { items } from "../../module/types";

@Component({
    selector: "app-itemsRouter",
    standalone: true,
    imports: [RouterLink],
    templateUrl: 'itemsRouter.component.html'
})

export class ItemsRouterComponent {
    @Input({required: false}) item: items | undefined = { }
    @Input({required: false}) additionalCSS: string = ''
}
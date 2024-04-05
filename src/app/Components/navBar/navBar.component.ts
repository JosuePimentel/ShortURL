import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { items } from "../../module/types";
import { NavDeskComponent } from "../navDesktop/navDesk.component";

@Component({
    selector: 'app-navBar',
    standalone: true,
    imports: [NavDeskComponent],
    templateUrl: 'navBar.component.html'
})

export class NavBarComponent { 
    itemsLinks: items[] = [
        {go: '' ,name: 'Features'},
        {go: '' ,name: 'Pricing'},
        {go: '' ,name: 'Resources'}
    ]

    itemslogin: items[] = [
        {go: '' ,name: 'Login'},
        {go: '' ,name: 'Sign Up'}
    ]
}
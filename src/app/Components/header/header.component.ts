import { Component } from "@angular/core";
import { NavBarComponent } from "../navBar/navBar.component";
import { LogoComponent } from "../logo/logo.component";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NavBarComponent, LogoComponent],
    templateUrl: 'header.component.html'
})

export class HeaderComponent { }
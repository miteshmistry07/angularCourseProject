import { Component, EventEmitter, Output } from "../../../node_modules/@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() featureSelected = new EventEmitter<string>(); //listen from the parent component

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
    }

}
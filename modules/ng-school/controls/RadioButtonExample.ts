import {Component} from "angular2/core";
import {ControlGroup, FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {RadioControlValueAccessor} from "./radio/radio_value_accessor";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: "radio-button-app",
    templateUrl: "modules/ng-school/controls/template.html",
    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
})
export class RadioButtonExample {

    model: ControlGroup;

    constructor(fb: FormBuilder) {
        this.model = fb.group({
            sex: ["female"]
        });
    }

}
bootstrap(RadioButtonExample);

System.register(["angular2/core", "angular2/common", "./radio/radio_value_accessor", "angular2/platform/browser"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, radio_value_accessor_1, browser_1;
    var RadioButtonExample;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (radio_value_accessor_1_1) {
                radio_value_accessor_1 = radio_value_accessor_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            RadioButtonExample = (function () {
                function RadioButtonExample(fb) {
                    this.model = fb.group({
                        sex: ["female"]
                    });
                }
                RadioButtonExample = __decorate([
                    core_1.Component({
                        selector: "radio-button-app",
                        templateUrl: "modules/ng-school/controls/template.html",
                        directives: [common_1.FORM_DIRECTIVES, radio_value_accessor_1.RadioControlValueAccessor]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], RadioButtonExample);
                return RadioButtonExample;
            }());
            exports_1("RadioButtonExample", RadioButtonExample);
            browser_1.bootstrap(RadioButtonExample);
        }
    }
});
//# sourceMappingURL=RadioButtonExample.js.map
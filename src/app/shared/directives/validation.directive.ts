import { ElementRef, HostListener, Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[appIsNumber]'
})
export class IsNumberDirective {

    private el: HTMLInputElement;
    constructor(private elementRef: ElementRef) {
        this.el = this.elementRef.nativeElement;
    }

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        const e = <KeyboardEvent>event;

        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }
}


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[Equalvalidate][formControlName],[formControl],[ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => EqualValidator),
            multi: true
        }
    ]
})
export class EqualValidator implements Validator {

    constructor(@Attribute('Equalvalidate') public Equalvalidate: string) { }

    validate(abControl: AbstractControl): { [key: string]: any } {
        const val = abControl.value;

        const cValue = abControl.root.get(this.Equalvalidate);

        if (cValue && val !== cValue.value) {
            return {
                Equalvalidate: false
            };
        }
        return null;
    }
}


@Directive({
    selector: '[appPasswordValidate][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: PasswordValidator, multi: true }
    ]
})
export class PasswordValidator implements Validator {
    validator: ValidatorFn;
    constructor() {
        this.validator = validatePasswordFactory();
    }
    validate(c: FormControl) {
        return this.validator(c);
    }
}

function validatePasswordFactory(): ValidatorFn {
    return (c: AbstractControl) => {
        if (c.value) {
            if (c.value.match(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/)) {
                return null;
            } else {
                return {
                    appPasswordValidate: true
                };
            }
        }
    };
}

@Directive({
    selector: '[appEmailValidate][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true }
    ]
})
export class EmailValidator implements Validator {
    validator: ValidatorFn;
    constructor() {
        this.validator = validateEmailFactory();
    }
    validate(c: FormControl) {
        return this.validator(c);
    }
}

function validateEmailFactory(): ValidatorFn {
    return (c: AbstractControl) => {
        if (c.value) {
            // tslint:disable-next-line:max-line-length
            if (c.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                return null;
            } else {
                return {
                    appEmailValidate: true
                };
            }
        }
    };
}

import { LitElement } from 'lit-element';
/**
 * Blueshift datepicker component.
 *
 * @element date-picker
 * @property {string} inputStyle - The inline CSS to apply to the input element.
 * @property {string} className - The class name to apply to the input element.
 * @property {string} min - The minimum date that can be selected.
 * @property {string} max - The maximum date that can be selected.
 * @property {string} placeholder - The placeholder text for the input element.
 * @property {boolean} disabled - Whether the input is disabled.
 * @property {boolean} readonly - Whether the input is read-only.
 * @property {boolean} required - Whether the input is required.
 * @property {string} value - The default value for the input element.
 */
export declare class DatePicker extends LitElement {
    label: string;
    inputStyle: string;
    className: string;
    min: string;
    max: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    value: string;
    static styles: import("lit-element").CSSResult;
    private _onChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'date-picker': DatePicker;
    }
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit-element';
import { customElement, property } from 'lit/decorators.js';
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
let DatePicker = class DatePicker extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.inputStyle = '';
        this.className = '';
        this.min = '';
        this.max = '';
        this.placeholder = '';
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.value = '';
    }
    _onChange(event) {
        const input = event.target;
        const value = input.value;
        let errorMessage = '';
        if (this.min && value < this.min) {
            errorMessage = `Date must be on or after ${this.min}.`;
        }
        else if (this.max && value > this.max) {
            errorMessage = `Date must be on or before ${this.max}.`;
        }
        if (errorMessage) {
            this.dispatchEvent(new CustomEvent('validation-error', { detail: { error: errorMessage } }));
        }
        else {
            this.value = value;
            this.dispatchEvent(new CustomEvent('date-change', { detail: { value: this.value } }));
        }
    }
    render() {
        console.log('RENDERING DATEPICKER COMPONENT!!');
        return html `
      <p>Date Picker Element</p>
      <label>${this.label}</label>
      <input 
        type="date" 
        style="${this.inputStyle}" 
        class="${this.className}" 
        min="${this.min}" 
        max="${this.max}" 
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        .value="${this.value}"
        @change="${this._onChange}"
      />
    `;
    }
};
DatePicker.styles = css `
    :host {
      display: block;
    }
  `;
__decorate([
    property({ type: String })
], DatePicker.prototype, "label", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "inputStyle", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "className", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "min", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "max", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], DatePicker.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], DatePicker.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean })
], DatePicker.prototype, "required", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "value", void 0);
DatePicker = __decorate([
    customElement('date-picker')
], DatePicker);
export { DatePicker };

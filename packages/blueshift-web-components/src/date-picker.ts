import { LitElement, html, css } from 'lit-element';
import { customElement, property } from 'lit/decorators.js'

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

@customElement('date-picker')
export class DatePicker extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) inputStyle = '';
  @property({ type: String }) className = '';
  @property({ type: String }) min = '';
  @property({ type: String }) max = '';
  @property({ type: String }) placeholder = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) value = '';

  static styles = css`
    :host {
      display: block;
    }
  `;

  private _onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    let errorMessage = '';
    if (this.min && value < this.min) {
      errorMessage = `Date must be on or after ${this.min}.`;
    } else if (this.max && value > this.max) {
      errorMessage = `Date must be on or before ${this.max}.`;
    }

    if (errorMessage) {
      this.dispatchEvent(new CustomEvent('validation-error', { detail: { error : errorMessage } }));
    } else {
      this.value = value;
      this.dispatchEvent(new CustomEvent('date-change', { detail: { value: this.value } }));
    }
  }

  render() {
    console.log('RENDERING DATEPICKER COMPONENT!!')
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'date-picker': DatePicker;
  }
}

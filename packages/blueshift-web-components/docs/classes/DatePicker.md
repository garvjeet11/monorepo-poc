[**blueshift-lit-components v0.0.0**](../README.md) • **Docs**

***

[blueshift-lit-components v0.0.0](../README.md) / DatePicker

# Class: DatePicker

Customizable datepicker component.

## Element

date-picker

## Extends

- `LitElement`

## Other

### className

> **className**: `string` = `''`

The class name to apply to the input element.

#### Overrides

`LitElement.className`

#### Defined in

src/components/date-picker.ts:23

***

### disabled

> **disabled**: `boolean` = `false`

Whether the input is disabled.

#### Defined in

src/components/date-picker.ts:27

***

### inputStyle

> **inputStyle**: `string` = `''`

The inline CSS to apply to the input element.

#### Defined in

src/components/date-picker.ts:22

***

### label

> **label**: `string` = `''`

#### Defined in

src/components/date-picker.ts:21

***

### max

> **max**: `string` = `''`

The maximum date that can be selected.

#### Defined in

src/components/date-picker.ts:25

***

### min

> **min**: `string` = `''`

The minimum date that can be selected.

#### Defined in

src/components/date-picker.ts:24

***

### placeholder

> **placeholder**: `string` = `''`

The placeholder text for the input element.

#### Defined in

src/components/date-picker.ts:26

***

### readonly

> **readonly**: `boolean` = `false`

Whether the input is read-only.

#### Defined in

src/components/date-picker.ts:28

***

### required

> **required**: `boolean` = `false`

Whether the input is required.

#### Defined in

src/components/date-picker.ts:29

***

### value

> **value**: `string` = `''`

The default value for the input element.

#### Defined in

src/components/date-picker.ts:30

## rendering

### render()

> **render**(): `TemplateResult`\<`1`\>

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will *not* trigger
the element to update.

#### Returns

`TemplateResult`\<`1`\>

#### Overrides

`LitElement.render`

#### Defined in

src/components/date-picker.ts:45

## styles

### styles

> `static` **styles**: `CSSResult`

Array of styles to apply to the element. The styles should be defined
using the css tag function, via constructible stylesheets, or
imported from native CSS module scripts.

Note on Content Security Policy:

Element styles are implemented with `<style>` tags when the browser doesn't
support adopted StyleSheets. To use such `<style>` tags with the style-src
CSP directive, the style-src value must either include 'unsafe-inline' or
`nonce-<base64-value>` with `<base64-value>` replaced be a server-generated
nonce.

To provide a nonce to use on generated `<style>` elements, set
`window.litNonce` to a server-generated nonce in your page's HTML, before
loading application code:

```html
<script>
  // Generated and unique per request:
  window.litNonce = 'a1b2c3d4';
</script>
```

#### Nocollapse

#### Overrides

`LitElement.styles`

#### Defined in

src/components/date-picker.ts:32

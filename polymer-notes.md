# Polymer 3 Notes

## Link to the polymr documentation
`https://polymer-library.polymer-project.org/3.0/docs/upgrade`

## What is a WebComponent?

> Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web app.

## Web Components Standards

* HTML Template
    > Defines how to declare fragments of markup that go unused at page load, but can be instantiated later t runtime.
* HTML Imports
    > Allows HTML mrkup conten to be defined asan external final and the included into other webpages.
* Custom Elements
    > Specifies how to create new types of DOM elements along with cutom properties,behavior, and attributes.
* Shadow DOM 
    > Provides a way to encapsulate custom elments and their related styling so that they are isolated from the res of the page.

# Key Information

* `'@polymer/polymer/polymer-element.js' `
    > is a module specifier. The Polymer CLI development server finds this module and converts the module specifier to a file path so that your web browser can load the file.

* `PolymerElement` 
    > Is the base Polymer element class, which is extended  to create a new element.

* `html` 
    > Is a helper function that parses a JavaScript template literal. More about this soon.

# Bind properties to child elements

* Text content: `<p>${...}</p>`
* Attribute: `<p id="${...}"></p>`
* Boolean attribute: `?checked="${...}"`
* Property: `.value="${...}"`
* Event handler: `@event="${...}"`

## Bind to text content

```JavaScript
    // Bind prop1 to text content:

    html`<div>${this.prop1}</div>`
```

## Bind to an attribute

```JavaScript
    // Bind prop2 to an attribute:

    html`<div id="${this.prop2}"></div>`
    // Attribute values are always strings, so an attribute binding should return a value that can be converted into a string
```

## Bind to a boolean attribute
```JavaScript
    // Bind prop3 to a boolean attribute:

    html`<input type="checkbox" ?checked="${this.prop3}">i like pie</input>`
    // Boolean attributes are added if the expression evaluates to a truthy value, and removed if it evaluates to a falsy value.
```

## Bind to a property
```JavaScript
    // Bind prop4 to a property:

    html`<input type="checkbox" .value="${this.prop4}"/>`
```


## Bind to an event handler
```JavaScript
    //  Bind clickHandler to a click event:

    html`<button @click="${this.clickHandler}">pie?</button>`
```
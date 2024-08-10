# JS important notes and points
## Naming conventions
    - Variables - camelCase
    - Functions - camelCase
    - Classes - PascalCase
    - Private functions or variables - _functionName
    - Constants - UPPER_SNAKE_CASE

## General Points:
- JS accepts both double and single quotes strings

## DOM Manipulation
### getElementById example:
```
<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

```
### Change the attribute of a HTML tag dynamically
```
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
```
### Change the property within a style of a HTML tag dynamically
```
<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>
```

- inline styles: `<p style="color:red; border:1 solid black;">`
- style tag in the head tag: `<head><style>h1{color:red;}</style></head>`
- external inside the head tag: `<link rel="stylesheet" href="style.css">`
- color systems: rgb(0-255, 0-255, 0-255) or #d1e3a4

# Properties:
- color: set the color of foreground elements like text, button, link
- background-color: set the color of background elements

# Selectors
1. Universal selector: `*{}`
2. Element selector: `element_name {}`
3. Id selector: `#id_name {}`
4. Class selector: `.class-name{}`
- Note: id is only assigned to one element otherwise use classes
5. text-align; left/right/center, **align text wrt to the box** (also start and end which differs based on languages like for hindi start would mean left but for urdu start would mean right)
6. text-decoration: underline/overline/line-through/none, example:
    1. `text-decoration: blue underline`
    2. `text-decoration: blue wavy underline`
7. font-weight: normal/bold/bolder/lighter or 100-900
8. font-family: 'font-family-one font-family-two font-family-three ...'
9. font-size: 24px;
10. line-height: 5px; // lines can overlap if line heifht is small
11. text-transform: uppercase/lowercase/capitalize/none
# -- Level 2 -- 
# Box Model

# Units in CSS:
pixels, px; 1 inch = 2.54 cm = 96px

# Shortcuts
- in vsc do, .class_name or #id_name for a div with taht class or id
- css website/documentation: search mdn flexbox
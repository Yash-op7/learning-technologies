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

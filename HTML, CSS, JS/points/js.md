# What is JS?
JS is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language. It is also known as the scripting language for webpages.JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. 

# Advanced Concepts theory
## 1. Closures
A closure is the combination of a function bundled together with references to its surrounding state (the lexical env), in other words a closure gives you access to an outer function's scope from a n inner function 

### map method takes 3 params by default: value, index, array
```
const f = (val, index, arr) => {
    return `${arr.join("")}`
}
const result = "welcome"
  .split("")
  .map(f)
  .join("");
```

### accessing characters:
```
res = "abcd"
.split("")
.map(value => String.fromCharCode(value.charCodeAt(0) + 2)).join("")

```

### Array functions:
- array1.every((val) => val > 3)

- Array.isArray(2)      // false
- Array.isArray({})     // false
- Array.isArray([])     // true

- arr.length = 0; **To empty an array**
- arr.concat(arr)

- Number("5") and String(5)
- num = Math.floor(num/10)

### Loops

- if var1 is an object then `for (let key in var1) {}`
- if var1 is an array or an iterable thne `for (let value of var1) {}`
const p1 = new Promise((res, rej) => {
    setTimeout(1000)
    res('resolved 1')})
const p2 = new Promise((res, rej) => {res('resolved 2')})
const p3 = new Promise((res, rej) => {res('resolved 3')})

Promise.race([p1, p2, p3]).then((messages) => {console.log(messages)})
Promise.all([p1, p2, p3]).then((messages) => {console.log(messages)})
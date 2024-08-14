let resolveBtn = document.getElementById("resolve-btn");
let rejectBtn = document.getElementById("reject-btn");

// challenge: resolve a promise when a button is clicked;



let p = new Promise((res, rej) => {
    resolveBtn.addEventListener("click", () => {
        res(`Resolved Promise`);
    })
    rejectBtn.addEventListener("click", () => {
        rej(`Rejected Promise`);
    })
    
})


p.then((str) => console.log(str)).catch((str) => console.log(str));
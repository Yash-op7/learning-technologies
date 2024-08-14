let p = new Promise((resolve, reject) => {
    if(isButtonClicked) {
        resolve("Yes");
    }
}) 

let isButtonClicked = true
let element = document.getElementById("element_id");            // get an element from the DOM by its id

const randomNumber = Math.random()      // random number y: 0 <= y < 1
const rand = (x) => Math.floor(Math.random() * (x + 1));        // generate a random integer between 0 and x


element.addEventListener("click", () => {       // element.addEventListener(event, callback)
    const randomColor = getColor(255);
    document.body.style.backgroundColor = randomColor;
});

let element = document.getElementById("button");

const rand = (x) => Math.floor(Math.random() * (x + 1));

function getColor(number) {
    return `rgb(${rand(number)}, ${rand(number)}, ${rand(number)})`
}

addEventListener("click", () => {
    const randomColor = getColor(255);
    document.body.style.backgroundColor = randomColor;
});

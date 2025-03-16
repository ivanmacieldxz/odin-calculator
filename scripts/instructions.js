//-----script to show """""instructions""""" on webpage from possible execution flows
const instButton = document.getElementById("instructions-button");

function showInstructions() {
    const container = document.createElement("div");
    const title = document.createElement("h1");
    const preface = document.createElement("p");
    const text = document.createElement("p");
    const closeButton = document.createElement("button");

    container.id = "instructions-container";

    title.innerText = "Instructions";

    preface.innerText = "The following execution flow was used to develop the calculator. It can be used as a hint on how to use.";

    fetch("execution-flows.txt")
        .then(response => response.text())
        .then(t => text.innerText = t);


    closeButton.innerText = "X";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(container);
    });

    document.body.appendChild(container);
    container.appendChild(title);
    container.appendChild(preface);
    container.appendChild(text);
    container.appendChild(closeButton);
}

instButton.addEventListener("click", showInstructions);

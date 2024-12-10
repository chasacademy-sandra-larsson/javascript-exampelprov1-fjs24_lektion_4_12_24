// 7.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop


for(let i = 0; i < 10; i++) {
    const btn = document.createElement("button");
    btn.classList.add("primary");
    btn.textContent = `Button ${i + 1}`;
    document.body.appendChild(btn);
    // ööra 7.2 här
    btn.addEventListener("click", () =>  btn.className = "secondary")
}

// 7.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"

// const btns = document.querySelectorAll("button");
// btns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         btn.className = "secondary";
//       //  btn.classList.toogle("secondary"); // Alternativ
//     })
// })

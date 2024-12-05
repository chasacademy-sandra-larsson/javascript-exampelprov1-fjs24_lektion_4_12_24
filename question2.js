// 2.1 Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// userId: 1. Lägg listan i elementet <ul id="todos"></ul>
const ul = document.getElementById("todos");

async function getTodos() {
   try {
    // Din kod här
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const todos = await response.json();
    
    const html = todos
        .filter((todo) => todo.userId === 1)
        .map(todo => `<li><p>${todo.title}</p>
            <button class="btn">
            ${ todo.completed ? "Undo" : "Done"}
            </button>
          </li>`).join("")


    ul.innerHTML = html;

    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
      btn.addEventListener("click", toggleBtn)
    })

   } catch(error) {
     console.log("Error", error)
   }

  }

  getTodos();


  const toggleBtn = (e) => {
    
      if(e.target.innerText === "Done") {
        e.target.innerText = "Undo";
        const closest = e.target.closest("li");
        closest.classList.add("done");

      } else if((e.target.innerText === "Undo")) {
        e.target.innerText = "Done";
        const closest = e.target.closest("li");
        closest.classList.remove("done");

      }
        
  }
  
  // 2.2 Lägg till en done-knapp under varje titel. Om todo-objektet är genomfört,
  // alltså completed: true, så ska det stå "Undo" på knappen annars "Done"
  
  // 2.3 Knappen ska kunna växla mellan "Undo" och "Done" när man trycker på den.
  // Om det står "Undo" på knappen ska titeln vara genomstruken, alltså i css:
  // text-decoration: line-through;
  // Annars ska den inte vara det.
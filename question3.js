// 3. 3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

const postsEl = document.getElementById("posts");

async function getPosts() {
    try {
     // Din kod här
     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
 
     const posts = await response.json();
     
     const html = posts
         .filter((post) => post.userId === 1)
         .map(post => `<li><h3>${post.title}</h3>
             <p>
             ${ post.body}
             </p>
           </li>`).join("")
 

     postsEl.innerHTML = html;
 

    } catch(error) {
      console.log("Error", error)
    }
 
   }

getPosts();
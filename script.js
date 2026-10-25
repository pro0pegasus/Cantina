const mealsEl = document.getElementById("meals");
const mealEl = document.getElementById("meal");
const gamContainer = document.getElementById("gam-container");
const btnAddMeals = document.getElementById("btn-add-meals");
const mainEl = document.getElementById('main')

console.log(mealsEl, mealEl, btnAddMeals)

const mealsArray = [
    // {id:1 , nom:"", type:"", menu:"", price:0, }
];

let id = 0;

// document.body.addEventListener("click", e =>{
//     if(e.target.matches("#gam-container #btn-add-meals")){
//         console.log('hello');

//     }
// })

btnAddMeals.addEventListener('click', ()=>{
    popupContainer()
})

function popupContainer(){
    const div = document.createElement("div");
    div.className = 'form-div';
    div.innerHTML = `
        <div class="flex w-full border border-gray-300 rounded-lg bg-white p-2">
            <form class="flex flex-col justify-evenly w-full border border-gray-300 rounded-lg bg-white p-2">
                <div class="flex justify-between items-end">
                    <div>
                        <label for="menu">Menu:</label>
                        <input class="w-full rounded-lg border border-gray-300 bg-white px-2 py-1 my-2 text-gray-700 text-xs shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100" type="text" id="menu" name="menu" placeholder="e.g., Entree" required>
                    </div>

                    <div >
                        <label for="categorie">Categorie:</label>
                        <input class="w-full rounded-lg border border-gray-300 bg-white px-2 py-1 my-2 text-gray-700 text-xs shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100" type="categorie" id="categorie" name="categorie" placeholder="e.g., Bio" required>
                    </div>
                </div>

                <div class="flex flex-col">
                    <label for="plat">Plat principal:</label>
                    <input class="w-full rounded-lg border border-gray-300 bg-white px-2 py-1 my-2 text-gray-700 text-xs shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100" type="plat" id="plat" name="plat" placeholder="e.g., Tajine Poulet au Olives" required>
                </div>

                <div class="flex justify-between items-end">
                    <div class="flex flex-col">
                        <label for="prix">Prix:</label>
                        <input class="rounded-lg border border-gray-300 bg-white px-2 py-1 my-2 text-gray-700 text-xs shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100" type="number" id="prix" name="prix" required>
                    </div>

                    <button
                        class="rounded-lg bg-sky-600 hover:bg-sky-700 text-white py-1 px-4 my-2 cursor-pointer"
                        type="submit">
                        Ajouter
                    </button>
                </div>
            </form>
        </div>
    `
    mainEl.append(div);
}
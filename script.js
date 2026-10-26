const mealsEl = document.getElementById("meals");
const mealEl = document.getElementById("meal");
const gamContainer = document.getElementById("gam-container");
const btnAddMeals = document.getElementById("btn-add-meals");
const mainEl = document.getElementById('main');

const mealBtnEl = document.getElementById('meal-btn')

// console.log(mealsEl, mealEl, btnAddMeals)

const mealsArray = [
    // {id:1 , nom:"", type:"", menu:"", price:0, }
];

let idG = 0;

// document.body.addEventListener("click", e =>{
//     if(e.target.matches("#day button")){
//         genererMeal(e.target.dataset.id)
//     }
// })

btnAddMeals.addEventListener('click', ()=>{
        popupContainer();
});


function popupContainer(){
    const div = document.createElement("div");
    div.className = 'form-div';
    div.innerHTML = `
        <div class="flex w-full border border-gray-300 rounded-lg bg-white p-2">
            <form id="popupForm" class="flex flex-col justify-evenly w-full border border-gray-300 rounded-lg bg-white p-2">
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

    const form = div.querySelector("#popupForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // bring values from the form
        const formData = new FormData(form);
        // console.log(formData.get("menu"))
        const meal = {
            id: ++idG,
            menu: formData.get("menu").trim(),
            categorie: formData.get("categorie").trim(),
            plat: formData.get("plat").trim(),
            prix: Number(formData.get("prix"))
        };

        mealsArray.push(meal);

        // console.log("New meal:", meal);
        // console.log("All meals:", mealsArray);

        afficherGarde(mealsArray);
        afficherPlats(mealsArray);

        div.remove();
    });
}

function afficherGarde(mealsArr){
    
    mealsEl.innerHTML = "";

    for(const meal of mealsArr){
        const card = document.createElement("div");
        card.innerHTML = `
            <div id="meal" class="border rounded-lg border-gray-300 shadow-sm p-2">
                <div class="flex gap-2">
                    <span class="rounded-lg bg-sky-300 text-sky-600 font-normal py-1 px-3">${meal.menu}</span>
                    <span class="rounded-lg bg-green-100 text-green-800 font-normal py-1 px-3">${meal.categorie}</span>
                    <div class="flex flex-row items-center gap-2 w-full">
                        <button class="cursor-pointer"><i class="fa-regular fa-trash-can"></i></button>
                        <button class="cursor-pointer"><i class="fa-regular fa-pen-to-square"></i></button>
                    </div>
                </div>

                <h2 class="py-2">${meal.plat}</h2>
                <div class="flex flex-row justify-between">
                    <p class="text-sky-600">${meal.prix}DH</p>
                    <span class="text-gray-500">En reserve</span>
                </div>
            </div>
        `
        mealsEl.append(card);
    }
}

function afficherPlats(mealsArr){

    const choixEl = document.querySelectorAll(".choix")

    choixEl.forEach(select =>{

        select.innerHTML = `<option class="text-xs" value=""></option>`

        mealsArr.forEach(meal =>{
            if(meal.menu.toLowerCase() === select.id.toLocaleLowerCase()){
                const option = document.createElement("option");

                option.value = meal.id;
                option.textContent = meal.plat;

                select.append(option);
            }
        });

    });  
}


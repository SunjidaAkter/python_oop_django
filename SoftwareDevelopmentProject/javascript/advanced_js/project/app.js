const loadData = async (global) => {
    const searchText = document.getElementById('search-box').value;
    // console.log(searchText);
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText ? searchText : global}`);//ternary operator
        const data = await res.json();
        displayData(data.meals);
    } catch (e) {
        console.log(e);
    }
}

const displayData = (data) => {
    document.getElementById("total-meals").innerText = data.length;
    const mealsContainer = document.getElementById("meals-container");
    data.forEach((item) => {
        console.log(item);
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
        <img class="box-img" src=${item.strMealThumb} alt="" />
        <h2>${item?.strMeal.slice(0, 5)}...</h2>
        <p>${item.strInstructions.slice(0, 50)}...</p>
        <button
            onclick="displayModal('${item.idMeal}')"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
        Launch demo modal
        </button>
        `//?. means optional chaining
        mealsContainer.appendChild(card);
    })

}
const displayModal = async (id) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        console.log(data.meals[0]);
    } catch (e) {
        console.log(e);
    }
}

loadData('a');
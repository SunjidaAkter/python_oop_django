const loadData = async () => {
    const searchText = document.getElementById('search-box').value;
    // console.log(searchText);
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
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
        <h2>${item?.strMeal}</h2>
        <p>${item.strInstructions.slice(0, 50)}...</p>
        <button>Details</button>
        `//?. means optional chaining
        mealsContainer.appendChild(card);
    })
}
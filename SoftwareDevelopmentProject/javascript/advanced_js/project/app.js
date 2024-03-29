const loadData = async () => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
        const data = await res.json();
        console.log(data.meals);
    } catch (e) {
        console.log(e);
    }
}
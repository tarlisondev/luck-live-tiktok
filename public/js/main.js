
const search = document.getElementById("search")
const url = "https://luck-live-tiktok.onrender.com";

search.addEventListener("change", (event) => {
    event.preventDefault();

    const regex = /^\d+$/;
    let isNumber = regex.test(search.value);

    if (isNumber) {
        window.location.href = `${url}/user/luck/${search.value}`;
    } else {
        window.location.href = `${url}/user/${search.value}`;
    }
})

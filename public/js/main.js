
const search = document.getElementById("search")
const url = "http://localhost:3333" // "https://luck-live-tiktok.onrender.com"

search.addEventListener("change", (event) => {
    event.preventDefault();

    const regex = /^\d{6}$/;
    let isValid = regex.test(search.value);

    if (isValid) {
        return window.location.href = `${url}/user/luck/${search.value}`;
    } else {
        return window.location.href = `${url}/user/${search.value}`;
    }
})


const search = document.getElementById("search");
const url = window.location.host || "https://luck-live-tiktok.onrender.com"

search.addEventListener("change", (event) => {
    event.preventDefault();

    const regex = /^\d{6}$/;
    let isValid = regex.test(search.value);

    if (isValid) {
        window.location.href = `${url}/user/luck/${search.value}`;
    } else {
        window.location.href = `${url}/user/${search.value}`;
    }

})

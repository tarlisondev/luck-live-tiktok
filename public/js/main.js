
const search = document.getElementById("search")
const url = "http://localhost:3333"// "https://luck-live-tiktok.onrender.com"

search.addEventListener("change", (event) => {
    event.preventDefault();

    const regex = /^\d+$/;
    let isNumber = regex.test(search.value);

    if (isNumber) {
        window.location.href = `${url}/user/luck/${search.value}`;

        setTimeout(() => {
           console.log(document.getElementById("quotas"))
        }, 5000);

    } else {
        window.location.href = `${url}/user/${search.value}`;

        setTimeout(() => {
            console.log(document.getElementById("quotas"))
        }, 5000);
    }
})

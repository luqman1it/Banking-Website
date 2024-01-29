
let burger = document.getElementById("burger");
let close = document.getElementById("close");
let menu = document.getElementById("menu");

burger.addEventListener("click", () => {
    menu.classList.remove("hidden");
})

close.addEventListener("click", () => {
    menu.classList.add("hidden")
})


let users = document.querySelectorAll("#users img");
let reviews = document.querySelectorAll("#reviews div");

users.forEach((lol) => {
    lol.addEventListener("click", () => {
        users.forEach(element => {
            element.classList.remove("borderActive")
        });
        lol.classList.add("borderActive")
        reviews.forEach((ele) => {
            ele.classList.add("hidden");

        })
        document.querySelector(lol.getAttribute("data-user")).classList.toggle("hidden")

    })

})


const toggleBtn = document.getElementById("toggleBtn");
const card_1_front = document.getElementById("card_1_front");
const card_1_back = document.getElementById("card_1_back");

const card_2_front = document.getElementById("card_2_front");
const card_2_back = document.getElementById("card_2_back");

const card_3_front = document.getElementById("card_3_front");
const card_3_back = document.getElementById("card_3_back");

toggleBtn.addEventListener("change", () => {
    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');

    card_2_front.classList.toggle('-rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');

    card_3_front.classList.toggle('-rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180');
})




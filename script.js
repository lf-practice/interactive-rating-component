const btn_1 = document.querySelector('#rating1');
const btn_2 = document.querySelector('#rating2');
const btn_3 = document.querySelector('#rating3');
const btn_4 = document.querySelector('#rating4');
const btn_5 = document.querySelector('#rating5');

btn_1.addEventListener('click', () => {toggle(btn_1)});
btn_2.addEventListener('click', () => {toggle(btn_2)});
btn_3.addEventListener('click', () => {toggle(btn_3)});
btn_4.addEventListener('click', () => {toggle(btn_4)});
btn_5.addEventListener('click', () => {toggle(btn_5)});

var active_button = null;

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    document.querySelector("#rating-state").classList.add("hidden");
    document.querySelector("#thanks-state").classList.remove("hidden");
    document.querySelector("#selection").innerHTML = active_button.value;
});

function toggle(button){
    if (button.classList.contains("active")) {
        active_button = null;
        button.classList.remove("active")
        submit.disabled = true;
    } else {
        if (active_button != null) {
            active_button.classList.remove("active");
        } else {
            submit.disabled = false;
        }
        active_button = button;
        button.classList.add("active");
    }
}

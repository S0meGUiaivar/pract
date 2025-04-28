let container_1 = document.querySelector("#carusel_1"),
    photos_1 = container_1.querySelectorAll(".photo");

let container_2 = document.querySelector("#carusel_2"),
    photos_2 = container_2.querySelectorAll(".photo");

let carusel_obj_1 = new carusel(photos_1),
    carusel_obj_2 = new carusel(photos_2);


container_1.querySelector(".prev").addEventListener("click", function() {
    carusel_obj_1.prev_photo();
});

container_1.querySelector(".next").addEventListener("click", function() {
    carusel_obj_1.next_photo();
});


container_2.querySelector(".prev").addEventListener("click", function() {
    carusel_obj_2.prev_photo();
});

container_2.querySelector(".next").addEventListener("click", function() {
    carusel_obj_2.next_photo();
});
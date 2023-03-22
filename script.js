let locBtn = document.querySelector(".loc_btn");
// let btn_country = document.querySelector(".loc_btn_country");

locBtn.addEventListener("click",  () => {
  document.querySelector(".loc_btn_country").classList.toggle("show");
  document.querySelector(".loc_btn").classList.remove("show");
});

// Получаем элементы кнопки и окошка
// var button = document.querySelector(".loc_btn");
// var popup = document.querySelector(".loc_btn_country");

// // Добавляем обработчик события на кнопку
// button.addEventListener("click", function () {
//   // Отображаем окошко
//   popup.style.display = "block";
// });

// // Добавляем обработчик события на пустое место
// window.addEventListener("click", function (event) {
//   // Если клик был за пределами окошка, то скрываем его
//   if (event.target == popup) {
//     popup.style.display = "none";
//   }
// });

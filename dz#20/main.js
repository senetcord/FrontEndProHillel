$(".js--gallery").on("click", (event) => {
  if (event.target.nodeName === "IMG") {
    $(".js--modal").addClass("active");
    $(".js--modal__content img").attr("src", event.target.src);

    $(".js--modal__close").on("click", closeModal);
    $(".js--modal__prev").on("click", handlePrev);
    $(".js--modal__next").on("click", handleNext);
  }
});

function closeModal() {
  $(".js--modal").removeClass("active");
}

function handlePrev() {
  let curr = $(".js--modal__content img").attr("src").slice(-5, -4);
  $(".js--modal__content img").attr("src", `./img/${+curr - 1}.jpg`);

  if (+curr === 1) {
    $(".js--modal__content img").attr(
      "src",
      `./img/${$(".js--gallery li").length}.jpg`
    );
  }
}

function handleNext() {
  let curr = $(".js--modal__content img").attr("src").slice(-5, -4);
  $(".js--modal__content img").attr("src", `./img/${+curr + 1}.jpg`);

  if (+curr === $(".js--gallery li").length) {
    $(".js--modal__content img").attr("src", `./img/1.jpg`);
  }
}

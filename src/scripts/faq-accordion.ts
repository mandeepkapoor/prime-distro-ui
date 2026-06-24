document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq__question");

    button?.addEventListener("click", () => {
      item.classList.toggle("is-open");
    });
  });
});
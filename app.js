const feedbackSelect = document.querySelector(".feedback-select");
const feedbackResult = document.querySelector(".feedback-result");
const submitBtn = document.querySelector(".feedback-select .btn");
const feedbacks = document.querySelectorAll(".feedback-select .feedback");
const feedbackText = document.querySelector(
  ".feedback-result .feedback-choose span"
);

function chooseFeedBack() {
  feedbacks.forEach((feedback) => {
    feedback.addEventListener("click", () => {
      feedbacks.forEach((feedback) => feedback.classList.remove("selected"));
      feedback.classList.add("selected");
    });
  });
}

chooseFeedBack();

function showResult() {
  const feedback = document.querySelector(".feedback.selected");
  const feedbackName = feedback.dataset.name;
  const feedbackColor = feedback.dataset.color;

  feedbackSelect.style.display = "none";
  feedbackText.innerHTML = feedbackName;
  feedbackText.style.color = feedbackColor;
  feedbackResult.style.display = "block";
}

submitBtn.addEventListener("click", () => {
  showResult();
  setTimeout(() => {
    feedbackResult.style.display = "none";
    feedbackSelect.style.display = "block";
  }, 4000);
});

var question = document.getElementsByClassName("faq");
var i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
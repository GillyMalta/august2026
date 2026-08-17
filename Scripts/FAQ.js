const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".answer");

arrows.forEach((arrow) => {

    arrow.addEventListener("click", () => {

        const answer = arrow.parentElement.nextElementSibling;

        const isOpen = answer.style.display === "block";

        answers.forEach((answer) => {
            answer.style.display = "none";
        });

        if (!isOpen) {
            answer.style.display = "block";
        }

    });

});

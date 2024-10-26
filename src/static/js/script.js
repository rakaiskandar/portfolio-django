document.addEventListener("DOMContentLoaded", function() {
    const texts = ["a Software Engineer.", "is Tech Enthusiast.", "love to build something."];

    let count = 0;
    let index = 0;
    let currentText = texts[count];
    let letter = "";

    function type() {
        if (count >= texts.length) {
            count = 0;
            currentText = texts[count];
        }

        letter = currentText.slice(0, index++);
        document.getElementById("typing-text").textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            currentText = texts[count % texts.length]; 
            setTimeout(type, 1000); 
        } else {
            setTimeout(type, 100); 
        }
    }

    type(); 
});

// 1: selecteer de button
let saveButton = document.querySelector('button.save');
let feedbackButton= document.querySelector('button.saved');

// 2: wacht op een klik
saveButton.addEventListener("click", function(){
 // 3: laat de feedback button zien, door een class weg te halen en toe tevoegen.
saveButton.classList.add("hidden");
feedbackButton.classList.remove("hidden");
})


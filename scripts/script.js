// 1: selecteer de button
let saveButton = document.querySelector('button.save');
let feedbackButton= document.querySelector('button.saved');

// 2: wacht op een klik
saveButton.addEventListener("click", function(){
 // 3: laat de feedback button zien, door een class weg te halen en toe tevoegen.
saveButton.classList.add("hidden");
feedbackButton.classList.remove("hidden");
})


// 1: selecteer de button
let guestBtn = document.querySelector('button.guestbtn');
let hostBtn= document.querySelector('button.hostbtn');
let hostForm= document.querySelector('form.host-settings');
let guestForm= document.querySelector('form.guest-settings');

console.log(hostForm);
console.log(guestForm);
// 2: wacht op een klik
guestBtn.addEventListener("click", function(){
 // 3: laat de feedback zien op de button, door een class weg te halen en toe tevoegen.

// guest settings active
// nav
guestBtn.classList.add("active");
hostBtn.classList.remove("active");

// hidden class
hostForm.classList.add("hidden");
guestForm.classList.remove("hidden");
guestForm.classList.add("pop")
})

// 2: wacht op een klik
hostBtn.addEventListener("click", function(){
 // 3: laat de feedback zien op de button, door een class weg te halen en toe tevoegen.

//  host settings active
// nav
hostBtn.classList.add("active");
guestBtn.classList.remove("active");



// hidden class
hostForm.classList.remove("hidden");
guestForm.classList.add("hidden");
hostForm.classList.add("pop")
})
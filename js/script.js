// ++++++++++++++++ Elements
// Form elements
const form = document.getElementById('form');
const formFullName = document.getElementById('fullName');
const formEmploy = document.getElementById('employ');
const formQual = document.getElementById('qual');
const formTerms = document.getElementById('terms');
const btnSubmit = document.getElementById('btnSubmit');
const btnSave = document.getElementById('btnSave');
// Other Elements
const timeDate = document.getElementById('timeDate')
// Functions

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset()
    localStorage.clear();
    timeDate.innerHTML = '';
    window.alert("Form was successfully submitted");
})
btnSave.addEventListener('click', function (e) {
    e.preventDefault();
    const newListing = {
        fullName: formFullName.value,
        employ: formEmploy.value,
        qual: formQual.value,
        terms: formTerms.value,
        date: new Date(),
    };
    localStorage.setItem('newList', JSON.stringify(newListing));
});


// Main
let jobListing = JSON.parse(localStorage.getItem('newList')) || '';
if (jobListing != "") {
    formFullName.value = jobListing.fullName;
    formEmploy.value = jobListing.employ;
    formQual.value = jobListing.qual;
    if (jobListing.terms == 'on') {
        formTerms.checked = true;
    }
    const previousDateTime = new Date(jobListing.date);
    const formattedDateTime = `${previousDateTime.getFullYear()}-${previousDateTime.getMonth() + 1}-${previousDateTime.getDate()} ${previousDateTime.getHours()}:${previousDateTime.getMinutes()}:${previousDateTime.getSeconds()}`;
    timeDate.innerHTML = `Last Saved On: ${formattedDateTime}`;
}
document.addEventListener('DOMContentLoaded', function(){
    const cardNumberDisplay = document.getElementById('Cardnumber-display')
    const cardHolderDisplay = document.getElementById('Cardholder-display')
    const expdateDisplay = document.getElementById('Expdate-display')
    const cvvDisplay    = document.getElementById('Cvv-display')

    const cardNumberinp = document.getElementById('Cardnumber-inp')
    const cardHolderinp = document.getElementById('Cardholder-inp')
    const expDateinp    = document.getElementById('Expdate-inp')
    const cvvInp = document.getElementById('Cvv-inp')
    const flipCardInner = document.querySelector('#flip-card .flip-card-inner');

    setTimeout(() =>   flipCardInner.classList.add('flipped') = '',1000)
    
    setTimeout(() => flipCardInner.classList.remove('flipped')= '', 2000)

 cardNumberinp.addEventListener("input", function () {
   let cleanvalue = this.value.replace(/\D/g, ""); // remove non-digits
   cleanvalue = cleanvalue.substring(0, 16); // limit to 16 digits

   // Optional: format into groups of 4 digits
   let formatted = cleanvalue.replace(/(\d{4})(?=\d)/g, "$1 ").trim();

   cardNumberDisplay.textContent = formatted || "0000 0000 0000 0000";

   // If you want to show formatted value in input as well
   this.value = formatted;
 });

 cardHolderinp.addEventListener('input', function(){
    cardHolderDisplay.textContent = this.value || 'CARD HOLDER' 
 })

expDateinp.addEventListener('input', function () {
  let cleanvalue = this.value.replace(/\D/g, ""); // remove non-digits
  cleanvalue = cleanvalue.substring(0, 4); // Limit to 4 digits

  let formatted = cleanvalue;
  if (cleanvalue.length > 2) {
    formatted = cleanvalue.substring(0, 2) + '/' + cleanvalue.substring(2);
  }

  this.value = formatted;
  expdateDisplay.textContent = formatted;
});

let flipTimeout; // To store timeout reference

cvvInp.addEventListener('input', function () {
  let cleanvalue = this.value.replace(/\D/g, ""); // Digits only
  cleanvalue = cleanvalue.substring(0, 3);         // Max 3 digits
  this.value = cleanvalue;

  cvvDisplay.textContent = cleanvalue || '***';

  clearTimeout(flipTimeout); // Clear previous timer if still waiting

  if (cleanvalue.length >= 1 && cleanvalue.length < 3) {
    flipCardInner.classList.add('flipped');
  } else if (cleanvalue.length === 3) {
    flipCardInner.classList.add('flipped');

    // Automatically flip back after 1.5 seconds
    flipTimeout = setTimeout(() => {
      flipCardInner.classList.remove('flipped');
    }, 2000);
  } else {
    flipCardInner.classList.remove('flipped');
  }
});




    
})
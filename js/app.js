//1. En knapp som återställer allt till originalutseendet. (Home i navbar)
// Targetar hela navbaren.
const navbar = document.getElementById('header-navigation');

// Targetar det första 'barnet' hos navbar som är ett element (a-elementet 'Home').
const resetBtn = navbar.children[0];

// Lägger till en eventlistener för eventet 'click' på 'Home' i 'navbar'.
resetBtn.addEventListener('click', function (event) {
    console.log('TODO: Add reset functionality');
});

// 2. Byt ut minst ett foto
// 3. Ändra bakgrundsfärg på minst ett element
// 4. Ändra text på minst ett element

//5. Ändra färg på minst en knapp
// Skapar en nodelist som innehåller alla element av sorten 'button.
const btnNodeList = document.querySelectorAll('button');
/* 
    Loopar igenom nodelistan med button-element och adderar två eventlisteners för varje element.
    En eventlistener för när muspekaren förs över element samt en eventlistener för när muspekaren förs bort från elemenet.
*/
btnNodeList.forEach(function (element) {
    element.addEventListener('mouseenter', function (event){
        event.target.style.backgroundColor = 'darkblue';
    });

    element.addEventListener('mouseleave', function (event){
        event.target.style.backgroundColor = '#222';
        });
});

// 6. Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
// 7. Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
// 8. Listan ska innehålla flera li element
//1. En knapp som återställer allt till originalutseendet. (Home i navbar)
// Targetar hela navbaren.
const navbar = document.getElementById('header-navigation');

// Targetar det första 'child' hos navbar som är ett element (a-elementet 'Home').
const resetBtn = navbar.children[0];
/*
const header = document.querySelector('header');
header.style.position = 'relative';
*/
// Lägger till en eventlistener för eventet 'click' på 'Home' i 'navbar'.
resetBtn.addEventListener('click', function (event) {
    console.log('TODO: Add reset functionality');

    // Sätter bakgrundsfärgen hos <body> till vit som den var från början.
    // body.style.backgroundColor = '#fff';
    
    // Om header har fler än två element som 'children' tas <ul>-elementet bort.
    /*
    if (header.children.length > 2) {
        header.removeChild(document.querySelector('header ul'));
    } */
});

// 2. Byt ut minst ett foto

// 3. Ändra bakgrundsfärg på minst ett element.
// Targetar <body>-elementet.
const body = document.querySelector('body');

// Lägger till en eventlistener för eventet 'keydown' på <body>.
body.addEventListener('keydown', function (event) {
    // Om knappen som tryckts ner är 'd' eller 'D' kommer bakgrundsfärgen på <body> ändras till grå.
    if (event.key === 'd' || event.key === 'D') {
        body.style.backgroundColor = 'rgb(128,128,128)';
    }

    // Om knappen som tryckts ner är 'l' eller 'L' kommer bakgrundsfärgen på <body> ändras till vit.
    if (event.key === 'l' || event.key === 'L') {
        body.style.backgroundColor = '#fff';
    }
})

// 4. Ändra text på minst ett element

//5. Ändra färg på minst en knapp
// Skapar en nodelist som innehåller alla element av sorten 'button'.
const btnNodeList = document.querySelectorAll('button');
/* 
    Loopar igenom nodelistan med <button>-element och adderar två eventlisteners för varje element.
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
// Targetar <header> och sätter dess position till 'relative'.
const header = document.querySelector('header');
header.style.position = 'relative';

// Adderar en eventlistener för eventet 'click' på det sista elemeten som navbar har som child.
navbar.children[3].addEventListener('click', function (event) {
    // Utvärderar om <header> har två children som är element.
    if (header.children.length === 2) {
        // Om ja:
        // Skapar ett nytt <ul>-element.
        const newUl = document.createElement('ul');
        // Lägger till css-styling till <ul>-elementet. Hade kunnat göras i ett steg om det fanns en css-klass att tilldela, men vet inte om jag får gära tillägg i 'style.css'.
        newUl.style.display = 'block';
        newUl.style.position = 'absolute';
        newUl.style.right = '0';
        newUl.style.top = '4.75rem';
        newUl.style.minHeight = '2rem';
        newUl.style.width = '300px';
        newUl.style.backgroundColor = '#fff';
        
        // Skapar ett nytt <li>-element.
        const newLi = document.createElement('li');
        // Lägger till css-styling till <li>-elementet
        newLi.style.height = '2rem';
        newLi.style.width = '100%';
        newLi.style.padding = '0.25rem 0';
        newLi.style.border = '0.125rem solid black';
        newLi.style.listStyle = 'none';
        newLi.style.textAlign = 'center';
        // Adderar text till <li>-elementet.
        newLi.textContent = 'Your shoping cart is empty';

        // Lägger till <li>-elementet som ett child till <ul>-elementet.
        newUl.appendChild(newLi);
        // Lägger till <ul>-elementet som ett child till <header>.
        header.appendChild(newUl);
    } else {
        // Om <header> inte har exakt två children som är element har <ul>-elementet redan skapats och lagts till.
        
        // Undersöker om <ul>-elementet har display satt till 'none' eller 'block' och ändrar till det alternativet som inte redan är aktivt.
        switch (header.children[2].style.display) {
            case 'block':
                header.children[2].style.display = 'none';
                break;
            case 'none':
                header.children[2].style.display = 'block';
                break;
        }
    }
});

// 8. Listan ska innehålla flera li element
/* 
    Loopar igenom nodelistan med <button>-element och adderar en eventlisteners för varje element.
    Eventlistener lyssnar efter 'click'-eventet och lägger till produkten som tillhör knappen i kundvagnen.
*/
btnNodeList.forEach(function (element) {
    element.addEventListener('click', function (event) {
        // Undersöker om användares kundvagn enbart innehåller ett <li>-element och om dess text är 'your shopping cart is empty'
        if(header.children[2].children.length === 1 || header.children[2].children[0].textContent === 'Your shopping cart is empty') {
            // Om ja, uppdaterar texten
            header.children[2].children[0].textContent = 'Your shopping cart:';
        };

        // Skapar ett nytt <li>-element, vars text motsvarar den produkt som tillhör knappen som användaren har klickat på, och lägger till det sist i <ul>-elementet.
        const ulElement = document.querySelector('header ul')
        ulElement.insertAdjacentHTML('beforeend', `<li>${event.target.parentElement.children[1].textContent} (${event.target.parentElement.children[2].textContent})</li>`);

        // Loopar igenom alla <li>-element och ändrar border samt mindre css-styling.
        for (let i = 0; i < ulElement.children.length; i++) {
            let hue = (360 / ulElement.children.length) * i;
            ulElement.children[i].style.height = '2rem';
            ulElement.children[i].style.border = `2px solid hsl(${hue}, 70%, 70%)`;
            ulElement.children[i].style.listStyle = 'none';
            ulElement.children[i].style.textAlign = 'center';
        };
    });
});
/* ***** ELEMENT ***** */
// Selectar <body>-elementet.
const body = document.querySelector('body');

// Selectar <header>-elementet.
const header = document.querySelector('header');

// Selectar elementet med id="header-navigation".
const navbar = document.getElementById('header-navigation');

// Selectar det första 'child' hos navbar som är ett element (<a>-elementet 'Home'). 
// Detta kommer vara reset-knappen.
const resetBtn = navbar.children[0];

// Skapar en nodelista som innehåller alla <img>-element i produktartiklarna. 
const imgNodeList = document.querySelectorAll('main article figure img');

// Skapar en nodelista som innehåller alla element av sorten 'button'.
const btnNodeList = document.querySelectorAll('button');

// Skapar en nodelista som innehåller alla <article>-element i <footer>
const footerArticles = document.querySelectorAll('footer article');

// Skapar en nodelista som innehåller alla <h3>-element i <footer>.
const footerArticlesHeading = document.querySelectorAll('footer section article h3');



/* ***** EVENT ***** */
/* **** 1. En knapp som återställer allt till originalutseendet. ('Home' i <nav>) **** */
// Lägger till en eventlistener för eventet 'click' på 'Home' i <nav>.
resetBtn.addEventListener('click', function (event) {
    // Sätter bakgrundsfärgen hos <body> till vit som den var från början.
    if (body.style.backgroundColor !== '#fff') {
        body.style.backgroundColor = '#fff';
    }

    // Om <header> har fler än två element som 'children' tas <ul>-elementet bort.
    if (header.children.length > 2) {
        header.removeChild(document.querySelector('header ul'));
    }

    // Återställer alla bilder i produktartiklarna till originalbilderna.
    imgNodeList[0].setAttribute('src', './img/hoodie-ash.png');
    imgNodeList[1].setAttribute('src', './img/hoodie-fire.png');
    imgNodeList[2].setAttribute('src', './img/hoodie-ocean.png');

    // Återställer texten 'Where we are' för det andra <h3>-elementet i <footer>, det mellersta på sidan.
    footerArticlesHeading[1].textContent = 'Where we are';

    // Återställer menyn i <footer>.
    if (footerArticles[0].children.length === 0) {
        footerArticles[0].insertAdjacentHTML('afterbegin', '<h3>Menu</h3>');
        footerArticles[0].insertAdjacentHTML('beforeend', '<a href="#">Home</a>');
        footerArticles[0].insertAdjacentHTML('beforeend', '<a href="#">Products</a>');
        footerArticles[0].insertAdjacentHTML('beforeend', '<a href="#">Contact</a>');
    }
});

/* **** 2. Byt ut minst ett foto **** */
// Lägger till en eventlistener för eventet 'dubbelklick' för varje <img>-element i produkterartiklarna, om användaren dubbbelklickar på bilden så ändras bilden till en grön hoodie.
imgNodeList.forEach(element => {
    element.addEventListener('dblclick', event => {
        event.target.setAttribute('src', './img/hoodie-forrest.png')
    })
});

/* **** 3. Ändra bakgrundsfärg på minst ett element. **** */
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

/* **** 4. Ändra text på minst ett element **** */
// Lägger till en eventlistener för det andra <h3>-elementet i <footer>, det mellersta på sidan, som uppdaterar texten till svenska när muspekaren förs över elementet.
footerArticlesHeading[1].addEventListener('mouseenter', event => {
    event.target.textContent = 'Här finns vi';
})


/* **** 5. Ändra färg på minst en knapp **** */
/* 
    Loopar igenom nodelistan med <button>-element och adderar två eventlisteners för varje element.
    En eventlistener för när muspekaren förs över element samt en eventlistener för när muspekaren förs bort från elemenet.

    Färgändringen kommer att återställas varje gång muspekaren förs bort från elemenet, det behöver därför inte ingå i reset-knappen.
*/
btnNodeList.forEach(function (element) {
    element.addEventListener('mouseenter', function (event){
        event.target.style.backgroundColor = 'darkblue';
    });

    element.addEventListener('mouseleave', function (event){
        event.target.style.backgroundColor = '#222';
        });
});

/* **** 6. Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen) **** */
// Adderar en eventlistener för eventet 'click' på det första <article>-elementet som finns i <footer> (längst till vänster).
// Klickar man på länkarna som finns som children till elementet kommer man gå till länkens href OCH eventlistener kommer att köras.
footerArticles[0].addEventListener('click', event => {
    // Initierar en variabel som pekar på det första <article>-elementet i <footer>.
    let article = footerArticles[0];

    // Sålänge <article>-elementet har children som är element, ta bort det första elementet.
    while (article.children.length > 0) {
        article.removeChild(article.children[0]);
    };
});

/* **** 7. Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen) **** */
// Adderar en eventlistener för eventet 'click' på det sista elemeten som <nav> har som child (bild på en shopping bag).
navbar.children[3].addEventListener('click', function (event) {
    // Utvärderar om <header> har två children som är element.
    if (header.children.length === 2) {
        // Om ja, anropar funktionen 'createNewUl' för att skapa en kundvagns-lista som läggs till som child hos <header>.
        createNewUl();
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

/* **** 8. Listan ska innehålla flera li element **** */
/* 
    Loopar igenom nodelistan med <button>-element och adderar en eventlisteners för varje element.
    Eventlistener lyssnar efter 'click'-eventet och lägger till produkten som tillhör knappen i kundvagns-listan.
*/
btnNodeList.forEach(function (element) {
    element.addEventListener('click', function (event) {
        // Utvärderar om <header> har två children som är element.
        if (header.children.length === 2) {
            // Om ja, anropar funktionen 'createNewUl' för att skapa en kundvagns-lista som läggs till som child hos <header>.
            createNewUl();
        }

        // Undersöker om kundvangs-listans första <li>-element har en text som är 'your shopping cart is empty'
        if(header.children[2].children[0].textContent === 'Your shopping cart is empty') {
            // Om ja, uppdaterar texten
            header.children[2].children[0].textContent = 'Your shopping cart:';
        };

        // Skapar ett nytt <li>-element vars text motsvarar den produkt som tillhör knappen som användaren har klickat på, och lägger till det sist i <ul>-elementet.
        const ulElement = document.querySelector('header ul');
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

// Funktion för att skapa ett nytt <ul>-element och lägga till som child till <header>.
function createNewUl () {
    // Skapar ett nytt <ul>-element.
    const newUl = document.createElement('ul');
    // Lägger till css-styling till <ul>-elementet. Hade kunnat göras i ett steg om det fanns en css-klass att tilldela, men vet inte om jag får göra tillägg i 'style.css'.
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
    newLi.textContent = 'Your shopping cart is empty';

    // Lägger till <li>-elementet som ett child till <ul>-elementet.
    newUl.appendChild(newLi);

    // Sätter <header>'s position till 'relative' för att kunna placera ut kundvagns-listan med position 'absolute'.
    header.style.position = 'relative';
    // Lägger till <ul>-elementet som ett child till <header>.
    header.appendChild(newUl);
}
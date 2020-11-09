# Kunskapskontroll 1 - DOM Projekt
_Av Samuel Meijer_

### **_Instruktioner_**
Det här är en väldigt öppen uppgift. Målet är att du ska få experimentera och bli bekväm i att manipulera domen och att använda event listeners. 
Med JS-kod ska du ändra utseendet av sidan utifrån interaktion från användaren. Alltså varje förändring av utseendet sker när användaren klickar på något, rör musen över något, osv.
Använd knapparna på sidan. Men du är inte begränsad till det. 
Är alla sakerna på “måste-listan” avklarade? Experimentera! Lägg till / ta bort / ändra precis vad du vill.

**_Måste vara med:_** 
1. En knapp som återställer allt till originalutseendet (PÅBÖRJAD)
    - Alla ändringar som du har gjort ska ändras tillbaka.

    _Ändringar som sker:_
    - Om använderen trycker på knapparna 'l' eller 'L' kommer bakgrundsfärgen på body-elementet att ändras tillbaka vit.

2. Byt ut minst ett foto (GJORT)
    - Om användaren dubbelklickar på någon utav bildernar på en hoodie kommer hoodien på bilden att bytas ut mot en grön hoodie.

3. Ändra bakgrundsfärg på minst ett element (GJORT)
    - Om använderen trycker på knapparna 'd' eller 'D' kommer bakgrundsfärgen på body-elementet att ändras till grå.
    - Om använderen trycker på knapparna 'l' eller 'L' kommer bakgrundsfärgen på body-elementet att ändras till vit.
    - Om användaren för muspekaren över någon utav knapparna 'buy' kommer knappen att ändra färg när muspekaren befinner sig över knappen, men ändra tillbaka till originalfärgen när muspekaren förs bort från knappen.

4. Ändra text på minst ett element (GJORT)
    - Om användaren för muspekaren över rubriken 'Where we are' i footern kommer texten att ändras till svenska.

5. Ändra färg på minst en knapp (GJORT)
    - Om användaren för muspekaren över en av knapparna med texten 'buy' ändras bakgrundsfärgen på knappen.
    - När användaren för man bort muspekaren från knapparna ändras bakgrundsfärgen tillbaka.

6. Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)

7. Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen) (GJORT)
    - Om användaren trycker på shopping-bagen i navbaren skapas ett ul-element innehållandes de varor som användaren har lagt till i sin kundvagn, eller en text som informerar användaren om att kundvagnen är tom.
    - Om ett ul-element redan har skapats ändras visningsalternativet hos ul-listan så att den visas eller döljs när användaren trycker på shopping-bagen.

8. Listan ska innehålla flera li element (GJORT)
    - Varje li element ska ha en synlig border. (Valfritt utseende)
    - Om användaren klickar på någon utav knapparna 'buy' kommer produkten som tillhör knappen att läggas till i kundvagnen. Bordern för varje produkt i kundvagnen kommer att ändras beroende på hur många produkter som finns i kundvagnen.

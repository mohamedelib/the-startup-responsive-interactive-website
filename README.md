The Startup Notification Settings Pagina

Korte uitleg van de opdracht en oplossing
HomeCamper gaf de opdracht om een notificatie preferences pagina te maken. Hosts en guests moeten zelf kunnen kiezen hoe zij meldingen ontvangen. De keuzes zijn email, push en sms of whatsapp.
Ik heb een duidelijke en overzichtelijke instellingen pagina gebouwd. De gebruiker kan makkelijk wisselen tussen Host Settings en Guest Settings. Per situatie kan de gebruiker snel aanvinken wat hij wil ontvangen. De pagina werkt goed op mobiel en desktop.

BESCHRIJVING

Wat heb ik gemaakt
Ik heb een interactieve instellingen pagina gebouwd met meerdere categorieën. Elke categorie is inklapbaar. Denk aan Reservations, Payments en Cancellations. Binnen elke categorie staan events met checkboxes voor notificatie kanalen.


Toegankelijkheid
De website is mobile first opgebouwd. Het ontwerp start bij een one column layout en schaalt mee naarmate er meer schermruimte beschikbaar is.

Bij grotere schermen worden elementen naast elkaar geplaatst, zoals de navigatie. Van de beschikbare breedte wordt steeds beter gebruik van gemaakt, terwijl de inhoud overzichtelijk en leesbaar blijft. 

Deze aanpak volgt de principes van mobile first en responsive design en zorgt voor een consistente ervaring op elk apparaat.


<img width="947" height="274" alt="image" src="https://github.com/user-attachments/assets/f454f148-d8f2-4061-81dc-ef1bbc836221" />

Interacties

De belangrijkste interacties zijn

* Wisselen tussen Host Settings en Guest Settings

Feed-forward

De twee knoppen staan naast elkaar en hebben duidelijke tekst. De gebruiker snapt direct dat hij kan wisselen tussen twee soorten instellingen.

Feedback

De active class verandert de knop stijl. Dit laat meteen zien welke tab actief is.
De JS zet ook echt het juiste formulier aan of uit met hidden. Daardoor ziet de gebruiker meteen andere content. De pop animatie op het formulier geeft extra bevestiging dat er net iets is gewisseld.


* Opslaan van instellingen met visuele feedback
  
Feedforward

De save message bovenaan zegt dat je onderaan moet opslaan.
Feedback
Na klik verberg je ik de Save knop en toon ik de Saved knop. 
De pop animatie op saved maakt die feedback extra zichtbaar.


Ontwerpkeuzes

Ik heb gekozen voor details en summary om categorieën te tonen. Dit werkt zonder JavaScript en voelt logisch aan voor gebruikers.
Ik gebruik fieldset en legend om opties te groeperen. Dit maakt de pagina overzichtelijk en helpt screenreaders.
Elke checkbox zit in een label. Daardoor is het klikvlak groter en makkelijker te gebruiken op mobiel.

GEBRUIKERSTEST

In issue 10 beschrijf ik de user story voor de Opslaan knop.

Wat ik testte

Ik wilde weten of gebruikers snappen dat ze de save button kunnen gebruiken om hun notificatie voorkeuren op te slaan. Ik focuste op de Save knop, omdat dit het moment is waarop mensen zekerheid willen.

Probleem

Tijdens het scrollen ben je vooral bezig met opties aan en uit zetten. Je zit vaak niet boven of onderaan de pagina. Daardoor kan je vergeten om op Save te klikken.

Oplossing

Ik heb een opvallende reminder toegevoegd boven de instellingen. De melding zegt duidelijk dat je je voorkeuren onderaan moet opslaan. De gebruiker krijgt deze info voordat hij begint met aanpassen.

Waarom dit werkt

De melding staat direct in beeld zodra je de instellingen ziet. Je hoeft niet te scrollen om de waarschuwing te lezen. Dit is feedforward. De gebruiker weet vooraf wat hij moet doen om zijn acties af te ronden.

Feedback na actie

Na het klikken op Save verandert de knop naar Saved. Dit bevestigt dat de actie is gelukt.

KENMERKEN

HTML structuur

De pagina gebruikt semantische HTML.
Header bevat logo en navigatie.
Main bevat de instellingen.
Notification preferences zijn gegroepeerd met fieldset en legend.
Categorieën zijn opgebouwd met details en summary.

CSS

CSS regelt de layout en de zichtbaarheid.
Ik gebruik flexbox voor uitlijning van knoppen en opties.
Ik gebruik een hidden class om Host en Guest forms te tonen of te verbergen.
Media queries zorgen dat de layout zich aanpast aan schermgrootte.
Visuele feedback zoals actieve knoppen en save status gebeurt met classes.( die toegevoegd of weggehaald worden in javascript)

JavaScript

JavaScript regelt de interactie.
Het script wisselt tussen Host Settings en Guest Settings.
Het script zet de juiste active class op de knoppen.
Het script toont de Saved status na het klikken op Save.

[Live website](https://mohamedelib.github.io/the-startup-responsive-interactive-website/)


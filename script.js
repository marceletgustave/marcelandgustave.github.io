/* =================================
   CARNET DE LETTRES
   Scripts généraux
   ================================= */


/* 
   Gestion des accordéons
   Masque fermé → cible ouverte
*/


function ouvrirAccordion(element) {

    const bloc = element.parentElement;

    bloc.classList.toggle("open");

}



/*
   Fermer automatiquement les autres
   accordéons d'une même section
   (optionnel mais pratique)
*/


function ouvrirUnique(element) {

    const section = element.closest(".accordion-container");

    const tous = section.querySelectorAll(".accordion");

    const bloc = element.parentElement;


    tous.forEach(item => {

        if(item !== bloc){

            item.classList.remove("open");

        }

    });


    bloc.classList.toggle("open");

}

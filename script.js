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
document.querySelectorAll(".flip-card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.classList.toggle("flipped");

    });

});
/* =====================================================
   FICHES SECONDE
   Auto-évaluation des notions
===================================================== */

document.querySelectorAll(".seance").forEach((seance, index) => {

    const checks =
        seance.querySelectorAll(".notion-check");

    const fill =
        seance.querySelector(".check-progress-fill");

    const text =
        seance.querySelector(".check-progress-text");

    if (!checks.length || !fill || !text) return;


    const storageKey =
        "seconde-seance-" + (index + 1);


    /* Restaurer les cases */

    checks.forEach((check, i) => {

        const saved =
            localStorage.getItem(
                storageKey + "-" + i
            );

        if (saved === "true") {

            check.checked = true;

        }

    });


    function updateProgress() {

        const total = checks.length;

        const checked =
            [...checks].filter(
                check => check.checked
            ).length;

        const percentage =
            total === 0
                ? 0
                : (checked / total) * 100;


        fill.style.width =
            percentage + "%";


        text.textContent =
            checked +
            " / " +
            total +
            " notions maîtrisées";


        checks.forEach((check, i) => {

            localStorage.setItem(
                storageKey + "-" + i,
                check.checked
            );

        });

    }


    checks.forEach(check => {

        check.addEventListener(
            "change",
            updateProgress
        );

    });


    updateProgress();

});

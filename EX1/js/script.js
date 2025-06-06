/*function calculer(){
    let nb1 = window.document.forms['0'].elements['nb1'].value;
    let nb2= window.document.forms['0'].elements['nb2'].value;

    alert(somme(nb1,nb2));
 }
 function somme(nb1,nb2){
    if(typeof nb1 == "string") nb1 = Number(nb1);
    if(typeof nb2 == "string") nb2 = Number(nb2);
    return nb1 + nb2 ;
 }
 let sum =(nb1,nb2) => {  //fonction fléchée
    if(typeof nb1 == "string") nb1 = Number(nb1);
    if(typeof nb2 == "string") nb2 = Number(nb2);
    return nb1 + nb2 ;
 }*/
    function calculer() {
        // Récupérer les valeurs des inputs
        let nombre1 = parseFloat(document.getElementById("nombre1").value);
        let nombre2 = parseFloat(document.getElementById("nombre2").value);

        // Vérifier si les nombres sont valides
        if (isNaN(nombre1) || isNaN(nombre2)) {
            document.getElementById("resultats").innerHTML = "Veuillez entrer des nombres valides !";
            return;
        }

        // Calculs
        let somme = nombre1 + nombre2;
        let difference = nombre1 - nombre2;
        let produit = nombre1 * nombre2;
        let quotient = nombre2 !== 0 ? nombre1 / nombre2 : "Division par zéro impossible";

        // Affichage des résultats
        document.getElementById("resultats").innerHTML = `
            <h3>Résultats :</h3>
            <p>Somme : ${somme}</p>
            <p>Différence : ${difference}</p>
            <p>Produit : ${produit}</p>
            <p>Quotient : ${quotient}</p>
        `;
    }


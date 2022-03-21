const DOM = addEventListener ('DOMContentLoaded', function (){



    formulaire.addEventListener ('submit', function (e){
         

        let formulaire = document.querySelector ('#formulaire');
        let name = formulaire["prenom"].value;
        let lastname = formulaire['nom'].value;
        let email = formulaire['e-mail'].value;
        let age = formulaire ['age'].value;
        let bachelor = formulaire['bachelor'].value;
        let password = formulaire['password'].value;
        let reloading = formulaire['reloading'].value;
        let sexe = document.querySelector ('input[name="sexe"]');
        let tomes = document.querySelectorAll ('input[type=checkbox]:checked');
        let h1_prenom = document.querySelector ('#h1_prenom');
        let h2_name = document.querySelector ('#h2_name');
        let h3_email = document.querySelector ('#h3_email');
        let h4_age = document.querySelector ('#h4_age');
        let h5_bachelor = document.querySelector ('#h5_bachelor');
        let h6_password = document.querySelector ('#h6_password');
        let h7_retry_password = document.querySelector ('#h7_retry_password');
        let h8_sexe = document.querySelector ('#h8_sexe');
        let h9_check = document.querySelector ('#h9_check');
        

         
          // Bloc ou tout les élements doivent etre rempli pour etre validé

                if (lastname.length < 1) {
                    h2_name.style.visibility = 'visible';
                    e.preventDefault(); 
                }
                else {
                    h2_name.style.visibility = 'hidden';
                    
                }
                
                if (name.length < 1){
                    h1_prenom.style.visibility = 'visible';
                    e.preventDefault(); 
                }
                else {
                    h1_prenom.style.visibility = 'hidden';
                }
                if (email.length < 1){
                    h3_email.style.visibility = 'visible';
                    e.preventDefault(); 
                }
                else {
                    h3_email.style.visibility = 'hidden';
                }
                
                if (age.length < 1){
                    h4_age.style.visibility = 'visible';
                    e.preventDefault(); 
                }
                else {
                    h4_age.style.visibility = 'hidden';
                }
                if (bachelor.length < 1){
                    h5_bachelor.style.visibility = 'visible';
                    e.preventDefault(); 
                }
                else {
                    h5_bachelor.style.visibility = 'hidden';
                }
                if (password.length < 1){
                    h6_password.style.visibility = 'visible';
                    e.preventDefault(); 
                }
                else {
                    h6_password.style.visibility = 'hidden';
                }
                if (reloading.length < 1){
                    h7_retry_password.style.visibility = 'visible';
                    e.preventDefault(); 
                }
                else {
                    h7_retry_password.style.visibility = 'hidden';
                }
                if (sexe.length < 2){
                    h8_sexe.style.visibility = 'visible';
                    e.preventDefault(); 
                }
                else {
                    h8_sexe.style.visibility = 'hidden';
                }
                
            
         // Bloc qui déterminer si le Mot de Passe et la validation du Mot de Passe sont identiques

            if (password === reloading){

            }
            else {
                h6_password.style.visibility = 'visible';
                h7_retry_password.style.visibility = 'visible';
                e.preventDefault(); 

            }


            // Bloc qui détermine si l'input Bachelor contient dev business ou design

            if (bachelor === 'dev' || bachelor === 'business' || bachelor === 'design'){

            }

            else {
                h5_bachelor.style.visibility = 'visible';
                e.preventDefault(); 
            }

            // Bloc qui détermine si l'age ne peut etre qu'un chiffre ou un nombre

            if (!isNaN(age)){

            }
            else {
                h4_age.style.visibility = 'visible';
                e.preventDefault(); 
            }

            // Bloc qui détermine si le nom et le prénom ne peuvent qu'etre des lettres alphabétiques.

            if (isNaN(name || lastname)){

            }
            else {
                h1_prenom.style.visibility = 'visible';
                h2_name.style.visibility = 'visible';
                e.preventDefault(); 
            }
            

// Boucle pour vérifier si la longueur des tomes est inférieur ou non a 2
            
            let total = 0;
    for (i=0; i < tomes.length ;i++) {
    
    total++;
    }
    if (total >= 3 || total == 0){
        h9_check.style.visibility = 'visible';
        e.preventDefault(); 
    }
    else {
        h9_check.style.visibility = 'hidden';
    }

    

// Boucle pour vérifier si la longueur des sexe est inférieur ou non a 2 si on change avec 'Inspecter' la radio en checkbox (sécurité)


// Ne fonctionne pas ⚠️ car je n'arrive pas à selectionner seulement les input radios. Je met en commentaire le code car sinon la fonction concernant les tomes ne fonctionnera pas correctement.


    // let totalRadio = 0;
    // for (y=0; y < sexe.length ;y++) {
    
    // totalRadio++;
    // }
    // if (totalRadio <= 2){
    //     h9_check.style.visibility = 'visible';
    //     e.preventDefault(); 
    // }
    // else {
    //     h9_check.style.visibility = 'hidden';
    // }

    // console.log (sexe)

    
    



    // Bloc avec reggex qui déterminer si l'email est valide.

    
    const reggexEmail = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';

    if (email.match(reggexEmail)){
        h3_email.style.visibility = 'hidden';
    }
    else {
        h3_email.style.visibility = 'visible';
        e.preventDefault(); 
    }
        })
            
            
                
             })
        

 


             // BROUILLON 


// if ()
//     btn.addEventListener ('submit', function() {

//     if (`${formulaire['Prenom'].value} ${(formulaire['Prenom'].value).length} = 0`){
//      console.log ('Ce champ n\'est pas rempli');
//  };

            // for (i=1; i<1=0; i++){

            // }
            // let total = 0;
            // let check = tomes.checked;
            // check.forEach(element => total++);
            // console.log(total);

                        // for (i = 0; i <= 8; i++){
            //     if (tomes.checked == 5){
            //         console.log ('j,e');
            //     }
            //     else {
            //         console.log ('cha');
            //     }
            
            // console.log (tomes);


               // else {
            //     h1_prenom.style.visibility = 'visible';
            //     h2_name.style.visibility = 'visible';
            //     h3_email.style.visibility = 'visible';
            //     h4_age.style.visibility = 'visible';
            //     h5_bachelor.style.visibility = 'visible';
            //     h6_password.style.visibility = 'visible';
            //     h7_retry_password.style.visibility = 'visible';
            //     h8_sexe.style.visibility = 'visible';
            // }


             // if (name.length > 1 && lastname.length > 1 && email.length > 1 && age.length > 1 && bachelor.length > 1 && password.length > 1 && reloading.length > 1 && sexe.length > 1 ){
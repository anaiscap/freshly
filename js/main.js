function deleted(){
    
    //activer le bouton "valider" du formulaire
    console.log("hello");
    
    //demander à l'admin s'il est sûr de lui ?
      //si oui, alors on stoppe le comportement par défaut du lien
    if (confirm("Étes-vous sûrs de supprimer ?"))
    {
        event.preventDefault();
        //récupére l'id de l'element qu'on veut supprimer
       let id = this.dataset.id;
       //envoie une requête ajax fetch -->index.php en lui disant qu'on veut supprimer une categorie et celle qui a l'id 
        fetch(`index.php?page=deleteCategory&id=${id}`)
        //.then --> supprimer le tr concerné
        .then(response=>response.text())
        .then(response=>{
            this.parentNode.parentNode.remove();
            
        });
        
    }
        
        
        
        
        
    
   
    
}

document.addEventListener("DOMContentLoaded",function(){
    
     let buttons = document.querySelectorAll('.confirmButton');
     
     //boucle
     for (let i=0; i<buttons.length; i++){
         buttons[i].addEventListener('click',deleted);
     }
     
})
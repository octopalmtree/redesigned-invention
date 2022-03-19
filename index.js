
//Removing Elements 
let removeEl = document.querySelector('.btn-1'); 
let removeElParent = document.querySelector('.hero'); 
//append Element 
let position = document.querySelector('.hero');




function removeLaw(removeEl, removeElParent,position) {

   
    removeElParent.removeChild(removeEl);
    //Append New Elements 
    let newEl = document.createElement('button'); 
    newEl.classList.add('btn-4');

    let newText = document.createTextNode('New Button')
    newEl.appendChild(newText);
    position.appendChild(newEl);

     //Append New Elements 
     let newElTwo = document.createElement('button'); 
     newElTwo.classList.add('btn-5');
 
     let newTextTwo = document.createTextNode('New Button 2')
     newElTwo.appendChild(newTextTwo);
     position.appendChild(newElTwo);

     //Append New Elements 
     let backHome = document.createElement('button'); 
     backHome.classList.add('btn-home');
 
     let homeText = document.createTextNode('All Pods')
     backHome.appendChild(homeText);
     position.appendChild(backHome);


     backHome.addEventListener('click', (e) => {
         e.preventDefault();
         removeElParent.removeChild(backHome);
         removeElParent.removeChild(newEl);
         removeElParent.removeChild(newElTwo);

         position.appendChild(removeEl);

        })
    

}



removeEl.addEventListener('click', (e) => {
    e.preventDefault();
    removeLaw(removeEl, removeElParent,position)
});





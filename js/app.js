showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");

    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    addTitle.value="";

    showNotes();

})


    // Function to add a note
function showNotes(){
    let notes = localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];
    }

    else{
        notesObj = JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index){
        html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}   </p>
          <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Node</button>
        </div>
      </div>`;
    });

    let notesElm = document.getElementById('notes');

    if(notesObj.length!=0){
        notesElm.innerHTML= html;
    } else{
        notesElm.innerHTML  = `Nothing to show !`
    }
};



// Function to delete a node 

function deleteNode(index){
    let notes = localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];
    }

    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));

    showNotes();
}


// Filtering notes
let searchTxt = document.getElementById("searchTxt");

searchTxt.addEventListener("input", function(){
         
    let inputVal = searchTxt.value.toLowerCase();
    let noteCards=document.getElementsByClassName("noteCard");

    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if(cardTxt.includes(inputVal)){
            element.style.display = "block";

        }
        else{
            element.style.display  = "none";
        }
    })
})

// //Further Features
// 1.Add Title
// 2.MARK A NOTE AS IMPORTANT
// 3.Seperate notes by use

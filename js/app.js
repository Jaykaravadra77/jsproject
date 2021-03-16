console.log("Hello Js");

onreloadd();


let btn = document.getElementById('btnsubmit');
btn.addEventListener('click', function (e) {
  let txt = document.getElementById('tarea');
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    var noteobj = [];
  }
  else {
    noteobj = JSON.parse(notes);
  }
  noteobj.push(txt.value);
  localStorage.setItem('notes', JSON.stringify(noteobj));
  txt.value = "";
  shownotes();
});
function shownotes() {
  var html = "";
  let note = localStorage.getItem('notes');
  note = JSON.parse(note)
  var row = document.getElementById('content');
  let dv = document.createElement('div');
  Array.from(note).forEach(function (element, index) {


    dv.className = "col-md-2 mx-0";
    dv.id = `dv${index}`;
    dv.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${element.toString().substr(0, 20)}</h5>
          <p class="card-text"> ${element}</p>
          <button id="${index}"onclick="de(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
     `;



  });
  row.appendChild(dv);



}
function onreloadd() {
  var html = "";
  let note = localStorage.getItem('notes');
  note = JSON.parse(note)
  var row = document.getElementById('content');

  Array.from(note).forEach(function (element, index) {

    let dv = document.createElement('div');
    dv.className = "col-md-2 mx-0";
    dv.id = `dv${index}`;
    dv.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${element.toString().substr(0, 20)}</h5>
          <p class="card-text"> ${element}</p>
          <button id="${index}"onclick="de(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
     `;
  


    row.appendChild(dv);

  });

}
function de(id) {
  let note = localStorage.getItem('notes');
  note = JSON.parse(note);
  note.splice(id, 1);
  localStorage.setItem('notes', JSON.stringify(note));
  let rd = document.getElementById(`dv${id}`);
  let ct = document.getElementById('content');
  ct.removeChild(rd);

};
search();
function search() {

  let sfield = document.getElementById('serc');
  sfield.addEventListener('input', function () {
    let notes = localStorage.getItem('notes');
    notes = JSON.parse(notes);
    let dv = document.querySelectorAll('div');
    Array.from(dv).forEach(function (element, index) {

      if (element.id.substr(0, 2) == "dv") {
        let sfield = document.getElementById('serc');
         if( element.innerText.includes(sfield.value)){
           element.style.display="block";
         }
         else{
          element.style.display="none";
         }
      } 
    });



  });
}
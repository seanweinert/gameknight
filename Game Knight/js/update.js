var config = {
    apiKey: "AIzaSyDpJR8mT0XluC3oG2nVK4SLEgT_wfKd8EQ",
    authDomain: "game-knight.firebaseapp.com",
    databaseURL: "https://game-knight.firebaseio.com",
    projectId: "game-knight",
    storageBucket: "game-knight.appspot.com",
    messagingSenderId: "79119445341"
  };
firebase.initializeApp(config);

const button = document.querySelector('.btn'),
      dungeonMaster = document.querySelector('#dm'),
      partyCode = document.querySelector('#code'),
      experiencePoints = document.querySelector('#experience'),
      partyMemebers = document.querySelector('#party'),
      sessionNotes = document.querySelector('#sessionNotes'),
      updateForm = document.querySelector('#updateForm');

updateForm.addEventListener("submit", function(){
    event.preventDefault();
    partyId = partyCode.value;
    notes = today + ' : ' + sessionNotes.value;
    partyCode.value = ''
    sessionNotes.value ='';
    writeData(notes)
    alert('Your note has been logged!')

});

function writeData(notes) {
    firebase.database().ref('party/' + partyId).push({
      sessionNotes: notes,
      
    });
  }

let today = new Date().toLocaleDateString()

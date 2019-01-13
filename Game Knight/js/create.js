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
      partyMembers = document.querySelector('#party'),
      sessionNotes = document.querySelector('#sessionNotes'),
      createForm = document.querySelector("#createForm");

createForm.addEventListener("submit", function(){
    event.preventDefault();
    DM = dungeonMaster.value;
    partyId = partyCode.value;
    partyMems = partyMembers.value;
    notes = today + ' : ' + sessionNotes.value;
    dungeonMaster.value = '';
    partyCode.value = '';
    partyMembers.value = '';
    sessionNotes.value ='';
    writeData(partyId,DM,partyMems,notes)
    alert('Your party has been logged!')
});

//writes to DB
function writeData(partyId, DM, partyMems, notes) {
  firebase.database().ref('party/' + partyId).push({
    DM: DM,
    party: partyMems,
    sessionNotes: notes,
    
  });
}
let today = new Date().toLocaleDateString()
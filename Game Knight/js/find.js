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
    partyMembers = document.querySelector('#party'),
    sessionNotes = document.querySelector('#sessionNotes'),
    findForm = document.querySelector('#findForm');

findForm.addEventListener("submit", function(){
    event.preventDefault();
    partyId = partyCode.value;
    let getData = firebase.database().ref('party/' + partyId);

    getData.on('value', function(results) {
      allData = results.val();
      updateFrame.innerHTML = '';
        console.log(allData)
      
    for (var i in allData){
      let d = document.createElement("h3"),
          printDM = allData[i].DM;
          d.innerHTML = 'DM : ' + printDM;
          updateFrame.appendChild(d);
      let h = document.createElement("h3"),
          printParty = allData[i].party;
          h.innerHTML = 'Party : ' + printParty;
          updateFrame.appendChild(h);
          break;
    }
    for (var x in allData){
      let p = document.createElement('P'),
          printNotes = allData[x].sessionNotes;
          p.innerHTML = printNotes;
          updateFrame.appendChild(p);
    }
});
});

let partyId = '',
    updateFrame = document.getElementById('findFrame');

//writes to DB
function writeUserData(partyId, DM, XP, partyMems, notes) {
firebase.database().ref('party/' + partyId).push({
  DM: DM,
  EXP: XP,
  party: partyMems,
  sessionNotes: notes,
});
}


// function divChecker(){
//   updateFrame.innerHTML = '<h1>NEWSHIT!</h1>'
// }
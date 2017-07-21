import * as firebase from 'firebase'


var config = {
 apiKey: "AIzaSyD8GFolNptpLVLoxAXcdDU0S1Jt8v6i_z4",
 authDomain: "giveaway-a0b3b.firebaseapp.com",
 databaseURL: "https://giveaway-a0b3b.firebaseio.com",
 projectId: "giveaway-a0b3b",
 storageBucket: "giveaway-a0b3b.appspot.com",
 messagingSenderId: "94459880442"
};
 firebase.initializeApp(config);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCf6QtzItOBh0OymAk7RJaYgaAAjzL71Ac',
  authDomain: 'pocemon-game-a3f63.firebaseapp.com',
  databaseURL: 'https://pocemon-game-a3f63-default-rtdb.firebaseio.com',
  projectId: 'pocemon-game-a3f63',
  storageBucket: 'pocemon-game-a3f63.appspot.com',
  messagingSenderId: '332256939830',
  appId: '1:332256939830:web:8563f9457d18d94400ad97',
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;

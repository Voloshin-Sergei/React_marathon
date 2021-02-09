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
class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    });
  };

  getPokemonsOnce = async () => {
    return await this.database
      .ref('pokemons')
      .once('value')
      .then((snapshot) => snapshot.val());
  };

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  };

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database
      .ref('pokemons/' + newKey)
      .set(data)
      .then(() => cb());
  };
}

export default Firebase;

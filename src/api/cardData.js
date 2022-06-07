import axios from 'axios';

const dbUrl = 'https://vocab-you-default-rtdb.firebaseio.com';

const getCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards/${firebaseKey}.json`)
    .then((cardObj) => resolve(cardObj.data))
    .catch((error) => reject(error));
});

const createCard = (obj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/cards.json`, obj)
    .then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cards/${response.data.name}.json`, update)
        .then(() => {
          getCards(uid).then((cardsArr) => resolve(cardsArr));
        });
    }).catch((error) => reject(error));
});

const updateCard = (obj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/cards/${obj.firebaseKey}.json`, obj)
    .then(() => {
      getCards(obj.uid).then((cardsArr) => resolve(cardsArr));
    }).catch((error) => reject(error));
});

const deleteCard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cards/${firebaseKey}.json`)
    .then(() => {
      getCards(uid).then((booksArr) => resolve(booksArr));
    }).catch((error) => reject(error));
});

export {
  getCards, createCard, updateCard, deleteCard, getSingleCard
};

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

// eslint-disable-next-line import/prefer-default-export
export { getCards };

import axios from 'axios';

const dbUrl = 'https://vocab-you-default-rtdb.firebaseio.com';

const getAllCategories = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/categories.json`)
    .then((catArray) => resolve(Object.values(catArray.data)))
    .catch((error) => reject(error));
});

const getCategories = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/categories.json?orderBy="uid"&equalTo="${uid}"`)
    .then((catArray) => resolve(Object.values(catArray.data)))
    .catch((error) => reject(error));
});

const addCategory = (catObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/categories.json`, catObj)
    .then((firebaseObj) => {
      const update = { firebaseKey: firebaseObj.data.name };
      axios.patch(`${dbUrl}/categories/${firebaseObj.data.name}.json`, update)
        .then(() => {
          getCategories(uid).then((catArray) => resolve(catArray));
        });
    }).catch((error) => reject(error));
});

const getSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/categories/${firebaseKey}.json`)
    .then((catObj) => resolve(catObj.data))
    .catch((error) => reject(error));
});

const updateCategory = (firebaseKey, update) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/categories/${firebaseKey}.json`, update)
    .then(resolve)
    .catch(reject);
});

export {
  getAllCategories, getCategories, addCategory, getSingleCategory, updateCategory
};

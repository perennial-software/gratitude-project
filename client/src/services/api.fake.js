function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const API_FAKE_DB = "API_FAKE_DB";
const ID_LENGTH = 16;

function getDB() {
  return JSON.parse(sessionStorage.getItem(API_FAKE_DB)) || {};
}

function setDB(db) {
  sessionStorage.setItem(API_FAKE_DB, JSON.stringify(db));
}

function insertMessage(id, message) {
  const db = getDB();
  const row = {
    id,
    ...message
  };
  db[id] = row;
  setDB(db);
  return row;
}

function getMessage(id) {
  const db = getDB();
  return db[id];
}

export default {
  getVimeoCredentials() {
    return new Promise(resolve => {
      resolve({
        clientId: "client_id",
        clientSecret: "client_secret",
        accessToken: "access_token"
      });
    });
  },
  postGratitudeMessage(gratitudeMessage) {
    return new Promise(resolve => {
      const id = makeid(16);
      const message = insertMessage(id, gratitudeMessage);
      resolve(message);
    });
  },
  getGratitudeMessage(messageId) {
    return new Promise(resolve => {
      resolve(getMessage(messageId));
    });
  }
};

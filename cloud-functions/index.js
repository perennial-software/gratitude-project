const Firestore = require("@google-cloud/firestore");
const PROJECTID = "fast-synapse-246815";
const GRATITUDE_MESSAGE_COLLECTION = "gratitude-messages";
const BASE_URL = "";
const firestore = new Firestore({
  projectId: PROJECTID,
  timestampsInSnapshots: true
});

exports.gratitudeMessage = (req, res) => {
  // POST a new gratitude message
  if (req.method === "POST") {
    return firestore
      .collection(GRATITUDE_MESSAGE_COLLECTION)
      .add(req.body)
      .then(doc => {
        // generate email
        // send email
        return res.status(200).send(doc);
      })
      .catch(err => {
        console.error(err);
        return res.status(404).send({
          error: "unable to store and send the gratitude message",
          err
        });
      });
  }

  // GET an existing gratitude message
  if (req.method === "GET") {
    const messsageid = req.query.messsageid.replace(/[^a-zA-Z0-9]/g, '').trim();
    return firestore
      .collection(GRATITUDE_MESSAGE_COLLECTION)
      .doc(messsageid)
      .get()
      .then(doc => {
        if (!(doc && doc.exists)) {
          return res
            .status(404)
            .send({ error: "Unable to find the gratitude message" });
        }
        const data = doc.data();
        return res.status(200).send(data);
      })
      .catch(err => {
        console.error(err);
        return res
          .status(404)
          .send({ error: "Unable to retrieve the gratitude message" });
      });
  }
};

sendEmail = () => {};

generateEmail = () => {};

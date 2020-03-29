import { getFirebaseAdmin } from "../../utils/auth/firebaseAuth";

export default async (req, res) => {
  const admin = getFirebaseAdmin();
  const db = admin.firestore();
  const ref = db.collection("queue");

  await ref
    .get()
    .then(snapshot => {
      const result = snapshot.docs.map(doc => {
        return doc.data();
      });
      res.status(200).json(JSON.stringify(result));
    })
    .catch(err => {
      console.error(err);
    });
};

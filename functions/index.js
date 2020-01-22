const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.addMessage = functions.https.onRequest(async (req, res) => {
    const original = req.query.text;
    const snapshot = await admin.database().ref('/messages').push({original: original});

    res.redirect(303, snapshot.ref.toString());
})

exports.makeUppercase = functions.database.ref('messages/{pushID}/original')
    .onCreate((snapshot, context) => {
        const original = snapshot.val();
        console.log('Uppercasing', context.params.pushId, original);
        const uppercase = original.toUpperCase();

        return snapshot.ref.parent.child('uppercase').set(uppercase);

    });

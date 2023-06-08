const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
const { google } = require('googleapis');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/submit-form', async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: './googleSheets.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: 'v4', auth: client });

  const { data, sheetName } = req.body;

  const ageGroupToSheetName = {
    'U11': 'U11RepPrep',
    'U13': 'U13RepPrep',
    'U15': 'U15RepPrep',
    'U18': 'U18RepPrep',
  };

  const newSheetName = ageGroupToSheetName[sheetName];

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId: '1FdnLQIpqjP5j4P57kgdjXSCYojrI32C_HuUUw6P5Fx8',
    range: `${newSheetName}!A:A`,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [Object.values(data)],
    },
  });

  res.status(200).json({ success: true });
});

exports.app = functions.https.onRequest(app);

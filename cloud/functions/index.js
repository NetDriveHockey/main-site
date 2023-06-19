const functions = require('firebase-functions');
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const app = express();
const { google } = require('googleapis');
const multer = require('multer');

app.use(cors());

app.post("/camp-register", async (req, res) => {

    let credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
    if (typeof credentials === 'string') {
        credentials = JSON.parse(credentials);
    }

    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: "https://www.googleapis.com/auth/spreadsheets",
      
    });
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });

    const { data, sheetName } = req.body;

    logger.log(data);
  
    const ageGroupToSheetName = {
      "U11": "U11RepPrep",
      "U13": "U13RepPrep",
      "U15": "U15RepPrep",
      "U18": "U18RepPrep",
    };

    logger.log(sheetName);
  
    const newSheetName = ageGroupToSheetName[sheetName];

    logger.log(newSheetName);
    try {
      await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: "1FdnLQIpqjP5j4P57kgdjXSCYojrI32C_HuUUw6P5Fx8",
        range: `${newSheetName}!A:A`,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [Object.values(data)],
        },
      });
    } catch (err) {
      logger.log(err);
    }
});



exports.app = functions.https.onRequest(app);
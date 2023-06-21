const functions = require('firebase-functions');
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const app = express();
const { google } = require('googleapis');
const admin = require('firebase-admin');
const {Storage} = require('@google-cloud/storage');
const fs = require('fs');

admin.initializeApp();

app.use(cors({
  origin: true,
  methods: 'POST',
  credentials: true,
  preflightContinue: true,
  maxAge: 86400,  // 24 hours
}));

app.post("/camp-register", async (req, res) => {
    logger.log("Starting camp register");
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

exports.onFileUpload = functions.storage.object().onFinalize(async (object) => {
  const filePath = object.name;
  const bucketName = object.bucket;

  const storage = new Storage();

  try {
      let destFilename = '/tmp/downloadedFile';
      const options = {
          // The path to which the file should be downloaded
          destination: destFilename,
      };

      // Downloads the file
      await storage.bucket(bucketName).file(filePath).download(options);

      // Upload to Google Drive code goes here
      let credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
      if (typeof credentials === 'string') {
          credentials = JSON.parse(credentials);
      }

      const auth = new google.auth.GoogleAuth({
          credentials: credentials,
          scopes: ['https://www.googleapis.com/auth/drive'],
      });

      const client = await auth.getClient();
      const drive = google.drive({ version: 'v3', auth: client });

      const response = await drive.files.create({
          requestBody: {
              name: filePath,
              parents: ['1ykB-yVSuVIy-vCsHEpeiRSIHHDwYT59b']
          },
          media: {
              body: fs.createReadStream(destFilename)
          }
      });

      console.log(response.data);
  }
  catch (error) {
      console.error('Error:', error);
  }
});

exports.app = functions.https.onRequest(app);
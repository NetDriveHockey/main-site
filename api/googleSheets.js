const express = require('express');
const cors = require('cors');
const { google } = require("googleapis");


const app = express();
app.use(express.json()); // Middleware for parsing JSON
app.use(cors());

app.post('/submit-form', async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: './googleSheets.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: 'v4', auth: client });

    // Extract form data and sheet name from request body
    const { data, sheetName } = req.body;

    const ageGroupToSheetName = {
        'U11': 'U11Registration',
        'U13': 'U13Registration',
        'U15': 'U15Registration',
        'U18': 'U18Registration',
        // add other mappings as necessary
    };

    const newSheetName = ageGroupToSheetName[sheetName];

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: '1FdnLQIpqjP5j4P57kgdjXSCYojrI32C_HuUUw6P5Fx8',
        range: `${newSheetName}!A:A`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [Object.values(data)], // assumes that data is an object where each property is a field in the form
        },
    });

    res.status(200).json({ success: true });
});


app.listen(3334, () => console.log('Server running on port 3334'));

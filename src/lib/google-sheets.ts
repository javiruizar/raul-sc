import { google } from 'googleapis';

async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      // Reemplazamos los saltos de línea escapados para que el formato PEM sea válido
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  
  return google.sheets({ version: 'v4', auth });
}

export async function appendToSheet(data: string[]) {
  try {
    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Presupuestos!A:I', // Apunta a la pestaña "Presupuestos"
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [data],
      },
    });
  } catch (error) {
    console.error('Error en la integración con Google Sheets:', error);
    throw new Error('No se pudo guardar en Google Sheets');
  }
}
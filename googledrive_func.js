  // Create a folder in Google Drive for the applicant
  var parentFolder = DriveApp.getFolderById('https://drive.google.com/drive/folders/10_1TnrCgKEBlRji-BDIpxAC6eg8maTtf'); // Specify the parent folder where you want to store the PDFs
  var applicantFolder = parentFolder.createFolder(folderName);

  // Handle the uploaded file
    if (pdfFile && pdfFile.contents) {
      var blob = Utilities.newBlob(pdfFile.contents, pdfFile.mimeType, pdfFile.name);
      var uploadedFile = applicantFolder.createFile(blob);
      Logger.log('File uploaded successfully: ' + uploadedFile.getUrl());
    } else {
      Logger.log('No valid PDF file found in the request.');




    }



    function ensureSheetsScope() {
      const sheet = SpreadsheetApp.openById('1J1liVf4OUPZylyN1zImVV_3H_mrSRXdpKJrJyluZSoQ'); // Replace with an actual or dummy IDj:\OneDrive\Documents\gitHub\MATAI_Current\matai_v2\proxy.mjs
      Logger.log('Sheets scope ensured.');
    }

    function ensureDriveScope() {
      const folder = DriveApp.getFolderById('10_1TnrCgKEBlRji-BDIpxAC6eg8maTtf'); // Replace with an actual or dummy ID
      Logger.log('Drive scope ensured.');
    }

    function doPost(e) {

      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var formData = e.parameter;

      // Save form data to Google Sheets

      sheet.appendRow([
        data.name_first,
        data.name_last,
        data.eaddy,
        data.home_address,
        data.city,
        data.state,
        data.zip,
        data.tel_home,
        data.tel_work,
        data.org,
        data.title,
        data.empl_dur,
        data.course_interm_loc,
        data.course_interm_name,
        data.course_interm_dates,
        data.course_adv_loc,
        data.course_adv_name,
        data.course_adv_dates,
        data.course_tech_loc,
        data.course_tech_name,
        data.course_tech_dates,
        data.course_recon_loc,
        data.course_recon_name,
        data.course_recon_dates,
        data.actar_status,
        data.actar_number]);

          // Return success response
        return ContentService.createTextOutput(
          JSON.stringify({ result: 'success' })
        ).setMimeType(ContentService.MimeType.JSON);
    }

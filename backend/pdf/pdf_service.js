const PDFDocument = require("pdfkit");

const generatePDF = (stream, workouts, username) => {
  const doc = new PDFDocument();
  doc.pipe(stream);

  username = username.split("@")[0];

  doc.text(`Summary of ${username}`, {
    align: "center",
    underline: true,
  });

  workouts.forEach((workout) => {
    doc.text(`Title: ${workout.title}`);
    doc.text(`Reps: ${workout.reps}`);
    doc.text(`Loads: ${workout.load}`);
    doc.moveDown();
  });

  doc.end();
};

module.exports = generatePDF;

let studentName = "Enaro Caber";
let currentSection = "BSIT3A";
let passingScore = 75;

let webScores = [80, 85, 90, 72];
let mobileScores = [88, 92, 70, 95];
let databaseScores = [65, 78, 82, 89];

if (passingScore >= 75) {
  console.log(`Evaluating scores for ${studentName} (${currentSection})...`);
}

if (webScores.length === mobileScores.length) {
  console.log("Subject score counts are synchronized.");
}

let allScores = [webScores, mobileScores, databaseScores];
if (allScores.length > 0) {
  console.log("Processing all subject categories...");
}

for (let i = 0; i < webScores.length; i++) {
  console.log(`Web Score #${i + 1}: ${webScores[i]}`);
}

for (let score of mobileScores) {
  if (score >= passingScore) {
    console.log(`Passed Mobile Assessment: ${score}`);
  }
}

let index = 0;
while (index < databaseScores.length) {
  console.log(`Database Score #${index + 1}: ${databaseScores[index]}`);
  index++;
}
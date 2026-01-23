const fs = require('fs');

const csvContent = fs.readFileSync('forexport.csv', 'utf8');
const lines = csvContent.trim().split('\n');
const data = lines.map(line => line.split('#').slice(0, 7).map(cell => cell.trim()));

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Master Time Table Data</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { text-align: center; }
        table { border-collapse: collapse; width: 100%; margin: 0 auto; }
        th, td { border: 1px solid black; padding: 8px; text-align: center; }
        th { background-color: #f0f0f0; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Master Time Table</h1>
    <table id="masterTableData">
        <thead>
            <tr>
                <th>Time/Section</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(rowData =>
                `<tr>${rowData.map(cell => `<td>${cell.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>').replace(/"/g, '"').replace(/,/g, '<br>')}</td>`).join('')}</tr>`
            ).join('')}
        </tbody>
    </table>
</body>
</html>
`.trim();

fs.writeFileSync('forexport_timetable.html', htmlContent);
console.log('HTML file generated: forexport_timetable.html');

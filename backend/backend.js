const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const config = {
  user: 'DOM',
  password: '231799@Kavi',
  server: '192.168.0.100',
  database: 'Amigoes',
  options: {
    encrypt: false,
  },
};

sql.connect(config, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM Spectro');
    res.json(result.recordset);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error: ' + error.message);
  }
});

app.post('/production', async (req, res) => {
  const newEntry = req.body;

  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('date', sql.Date, newEntry.date)
      .input('timing', sql.VarChar, newEntry.timing)
      .input('operatorName', sql.VarChar, newEntry.operatorName)
      .input('machineNo', sql.VarChar,newEntry.machineNo)
      .input('heatNo', sql.VarChar,newEntry.heatNo)
      .input('customerName', sql.VarChar,newEntry.customerName)
      .input('partName', sql.VarChar,newEntry.partName)
      .input('operationNo', sql.VarChar,newEntry.operationNo)
      .input('cycleTime', sql.VarChar,newEntry.cycleTime)
      .input('targetQty', sql.VarChar,newEntry.targetQty)
      .input('achievedQty', sql.VarChar,newEntry.achievedQty)
      .input('remarks', sql.VarChar,newEntry.remarks)
      .query(`INSERT INTO production_planning (Date, Timing, OperatorName, MachineNo, HeatNo, CustomerName, PartName, OperationNo, CycleTime, TargetQTY, AchievedQTY, Remarks) 
              VALUES (@date, @timing, @operatorName, @machineNo, @heatNo, @customerName, @partName, @operationNo, @cycleTime, @targetQty, @achievedQty, @remarks)`);
    
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send('Failed to insert data');
  }
});

app.get('/Dashboard', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM production_planning');
    res.json(result.recordset);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error: ' + error.message);
  }
});



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

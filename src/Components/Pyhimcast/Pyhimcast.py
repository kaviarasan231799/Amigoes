from flask import Flask, jsonify
from flask_cors import CORS
import pyodbc   

app = Flask(__name__)
CORS(app)

server = '192.168.0.100'

database = 'Dyna_Himcast'
username = 'DOM'  
password = '231799@Kavi'


@app.route("/", methods =['GET'])
def get_data():
    try:
        connection_string = f'DRIVER={{SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password};'
        connection = pyodbc.connect(connection_string)
        cursor = connection.cursor()
        query = 'SELECT * FROM Spectro' 
        cursor.execute(query)
        rows = cursor.fetchall()
        result = [dict(zip([column[0] for column in cursor.description],row)) for row in rows]
        connection.close()
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error':str(e)})
        
if __name__ == '__main__':
    app.run(port=5001,debug=True)

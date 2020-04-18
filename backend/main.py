import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash, request
import json

@app.route('/usuarios/adicionar', methods=['POST'])
def add_usuario():
	try:
		_json = request.json
		_email = _json['email']
		_senha = _json['senha']
		if _email and _senha and request.method == 'POST':			
			sqlQuery = "INSERT INTO usuario(email, senha) VALUES(%s, %s)"
			bindData = (_email, _senha)
			conn = mysql.connect()
			cursor = conn.cursor()
			cursor.execute(sqlQuery, bindData)
			conn.commit()
			_result = jsonify({'description': 'Cadastrado com sucesso'})
			response = _result
			response.status_code = 200
			return response
		else:
			return not_found()
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()

@app.route('/usuarios', methods=['GET'])
def lista_usuarios():
	try:
		conn = mysql.connect()
		cursor = conn.cursor(pymysql.cursors.DictCursor)
		cursor.execute("SELECT * FROM usuario")
		empRows = cursor.fetchall()
		respone = jsonify(empRows)
		respone.status_code = 200
		return respone
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Record not found: ' + request.url,
    }
    respone = jsonify(message)
    respone.status_code = 404
    return respone


if __name__ == "__main__":
    app.run()
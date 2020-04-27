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

@app.route('/produto/adicionar', methods=['POST'])
def add_produto():
	try:
		_json = request.json
		_nome_produto = _json['nome_produto']
		_quantidade = _json['quantidade']
		_tipo_qtd = _json['tipo_qtd']
		_validade = _json['validade']
		_usuario_id_usuario = _json['usuario_id_usuario']
		if _nome_produto and _quantidade and _tipo_qtd and _usuario_id_usuario and _validade and request.method == 'POST':			
			sqlQuery = "INSERT INTO produto(nome_produto, quantidade, tipo_qtd, usuario_id_usuario, validade) VALUES(%s, %s, %s, %s, %s)"
			bindData = (_nome_produto, _quantidade, _tipo_qtd, _usuario_id_usuario, _validade)
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

@app.route('/produto', methods=['GET'])
def lista_produto():
	try:
		conn = mysql.connect()
		cursor = conn.cursor(pymysql.cursors.DictCursor)
		cursor.execute("SELECT * FROM produto")
		empRows = cursor.fetchall()
		respone = jsonify(empRows)
		respone.status_code = 200
		return respone
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()

@app.route('/produto/atualizar', methods=['POST'])
def atualizar_produto():
	try:
		_json = request.json
		_id_produto = _json['id_produto']
		_nome_produto = _json['nome_produto']
		_quantidade = _json['quantidade']
		_tipo_qtd = _json['tipo_qtd']
		_validade = _json['validade']
		_usuario_id_usuario = _json['usuario_id_usuario']

		if _id_produto and _nome_produto and _quantidade and _tipo_qtd and _usuario_id_usuario and _validade and request.method == 'POST':			
			sqlQuery = "UPDATE produto WHERE id_produto '%s' (nome_produto, quantidade, tipo_qtd, usuario_id_usuario, validade) VALUES(%s, %s, %s, %s, %s)"
			bindData = (_nome_produto, _quantidade, _tipo_qtd, _usuario_id_usuario, _validade)
			conn = mysql.connect()
			cursor = conn.cursor()
			cursor.execute(sqlQuery, bindData)
			conn.commit()
			_result = jsonify({'description': 'Atualizado com sucesso'})
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
	

if __name__ == "__main__":
    app.run()
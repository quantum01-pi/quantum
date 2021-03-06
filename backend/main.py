import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash, request
import json
import smtplib

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
			_result = jsonify({'description': 'Cadastrado com sucesso', 'id': cursor.lastrowid, 'email': _email})
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
		_descricao = _json['descricao']
		_usuario_id_usuario = _json['usuario_id_usuario']
		if _nome_produto and _quantidade and _tipo_qtd and _usuario_id_usuario and _validade and _descricao and request.method == 'POST':			
			sqlQuery = "INSERT INTO produto(nome_produto, quantidade, tipo_qtd, usuario_id_usuario, validade, descricao) VALUES(%s, %s, %s, %s, %s, %s)"
			bindData = (_nome_produto, _quantidade, _tipo_qtd, _usuario_id_usuario, _validade, _descricao)
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

@app.route('/produto/atualizar', methods=['PUT'])
def atualizar_produto():
	try:
		_json = request.json
		_id_produto = _json['id_produto']
		_nome_produto = _json['nome_produto']
		_quantidade = _json['quantidade']
		_tipo_qtd = _json['tipo_qtd']
		_validade = _json['validade']
		_descricao = _json['descricao']
		_usuario_id_usuario = _json['usuario_id_usuario']

		if _id_produto and _nome_produto and _quantidade and _tipo_qtd and _usuario_id_usuario and _validade and _descricao and request.method == 'PUT':			
			sqlQuery = "UPDATE produto SET nome_produto = %s, quantidade = %s, tipo_qtd = %s, usuario_id_usuario = %s, descricao = %s, validade = %s WHERE id_produto = %s"
			bindData = (_nome_produto, _quantidade, _tipo_qtd, _usuario_id_usuario, _validade, _id_produto, _descricao)
			print(sqlQuery)
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


@app.route('/usuarios/atualizar/', methods=['PUT'])
def atualizar_usuario():
	try:
		_json = request.json
		_id_usuario = _json['id']
		_email = _json['email']
		_senha = _json['senha']

		if  _email and _senha and _id_usuario and request.method == 'PUT':			
			sqlQuery = "UPDATE usuario SET email = %s, senha = %s WHERE id_usuario = %s"
			bindData = (_email, _senha, _id_usuario)
			conn = mysql.connect()
			cursor = conn.cursor()
			cursor.execute(sqlQuery, bindData)
			conn.commit()
			_result = jsonify({'description': 'Atualizado com sucesso', 'id': _id_usuario, 'email': _email })
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


@app.route('/deletar/<int:id>', methods=['DELETE'])
def delete_emp(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		cursor.execute("DELETE FROM usuario WHERE id_usuario =%s", (id,))
		conn.commit()
		respone = jsonify('Usuário deletado com sucesso')
		respone.status_code = 200
		return respone
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()

@app.route('/email', methods=['POST'])
def envia_email():
	try:
		msgFrom = str(input("Informe o e-mail de destino: "))
		#codigo configura para servidor outlook
		smtpObj = smtplib.SMTP('smtp.outlook.com', 587)
		smtpObj.ehlo()
		smtpObj.starttls()
		msgTo = 'quantum01.pi@outlook.com'
		toPass = 'usjt@123'
		smtpObj.login(msgTo, toPass)
		msg = '''
		Mensagem do E-mail projeto Quantum.

		'''
		smtpObj.sendmail(msgTo,msgFrom,'Subject: Notificação Quantum.\n{}'.format(msg))
		smtpObj.quit()
		print("Email enviado com sucesso!")
	except:
		print("Erro ao enviar e-mail")

if __name__ == "__main__":
    app.run()
from flask import Flask, render_template, request
from flask_mysqldb import MySQL
import yaml


app = Flask(__name__)

#configuracao DB

db = yaml.load(open('db.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']

mysql = MySQL(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        details = request.form
        email = details['email']
        senha = details['senha']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO usuario(email, senha) VALUES (%s, %s)", (email, senha))
        mysql.connection.commit()
        cur.close()
        return 'CADASTRADO'
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
























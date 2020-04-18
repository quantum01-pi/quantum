from app import app
from flaskext.mysql import MySQL

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'admin'
app.config['MYSQL_DATABASE_PASSWORD'] = 'qunatum2020'
app.config['MYSQL_DATABASE_DB'] = 'quantum'
app.config['MYSQL_DATABASE_HOST'] = 'projeto-db.cy6iplei0dnz.us-east-2.rds.amazonaws.com'
mysql.init_app(app)
from app import db

class Usuario_model(db.Model):
    __tablename__='usuario'
    id = db.Colum(db.Integer, primary_key=True, autoincrement=True)
    email = db.Colum(db.String(50))
    senha = db.Colum(db.Integer(8))

    def __init__(self,usuario_id,email,senha):
        self.usuario_id = usuario_id
        self.email = email
        self.senha = senha

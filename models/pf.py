from app import db

class Pf_model(db.Model):
    __tablename__='pf'
    id_pf = db.Colum(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Colum(db.String(50))
    cpf = db.Colum(db.Integer(14))
    endereco = db.Colum(db.String(100))
    email = db.Colum(db.String(50))
    telefone = db.Colum(db.String(15))
    data_nascimento = db.Colum(db.String(10))


    def __init__(self, nome, cpf, endereco, email, telefone, data_nascimento):
        self.nome = nome
        self.cpf = cpf
        self.endereco = endereco
        self.email = email
        self.telefone = telefone
        self.data_nascimento = data_nascimento

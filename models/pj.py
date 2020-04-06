from app import db

class Pj_model(db.Model):
    __tablename__='pj'
    id_pj = db.Colum(db.Integer, primary_key=True, autoincrement=True)
    razao_social = db.Colum(db.String(150))
    cnpj = db.Colum(db.Integer(18))
    endereco = db.Colum(db.String(100))
    email = db.Colum(db.String(50))
    telefone = db.Colum(db.String(15))

    def __init__(self, razao_social, cnpj, endereco, email, telefone):
        self.razao_social = razao_social
        self.cnpj = cnpj
        self.endereco = endereco
        self.email = email
        self.telefone = telefone

from app import db

class Categoria_model(db.Model):
    __tablename__='categoria'
    id_categoria = db.Colum(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Colum(db.String(50))


    def __init__(self, nome):
        self.categoria_id = categoria_id
        self.nome = nome

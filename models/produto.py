from app import db

class Produto_model(db.Model):
    __tablename__='produto'
    id_produto = db.Colum(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Colum(db.String(50))
    quantidade = db.Colum(db.Integer(8))
    validade = db.Colum(db.String(10))
    categoria = db.Colum(db.String(50))
    descricao = db.Colum(db.String(250))

    def __init__(self, nome, quantidade, validade, categoria, descricao):
        self.nome = nome
        self.quantidade = quantidade
        self.validade = validade
        self.categoria = categoria
        self.dcescricao = descricao

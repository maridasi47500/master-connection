from tabula import read_pdf
import tabula
class Facture:
    def __init__(self,hey):
      self.df = read_pdf(hey)
    def page1(self):
      return self.df[1]

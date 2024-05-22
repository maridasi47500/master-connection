from directory import Directory
class Pic(Directory):
    def __init__(self,name):
        self.name=name
        self.pic=name.split(".")[1]
        try:
          self.content=open("."+name, 'rb').read()
        except:
          print("ERREUR d'IMAGE NON TROUVEE : "+name)
          self.content="".encode("utf-8")
    def get_name(self):
        return self.name
    def get_html(self):
        return self.content

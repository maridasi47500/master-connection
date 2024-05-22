#from facegraph import Graph
from os import environ
class Facebook:
    def __init__(self,accesstoken=environ["facebooktoken"]):
        self.g=""#Graph(accesstoken)
    def me(self):
        self.about_me=self.g.me
    def person(self,num):
        self.about_me=self.g[num]
    def first_name(self):
        return self.about_me.first_name
    def home_town(self):
        return self.about_me.hometown.name
    def create_post(self,test):
        self.post = self.about_me.feed.post(message=test)  # Status update
        self.post_id=self.post.id
    def comment_post(self,test):
        self.g[self.post_id].comments.post(message=test)
    def like_post(self):
        self.g[self.post_id].likes.post()
    def delete_post(self):
        self.g[self.post_id].delete()
    def get_post_text(self):
        self.g[self.post_id]().text
    def get_post_id(self):
        return self.post_id
    def get_post(self,hey):
        self.post_id=hey
    def get_event(self,hey):
        self.event_id=hey
        self.event=self.g[self.event_id]()
    def get_event_name(self,hey):
        return self.event.name
    def attend_event(self,hey):
        self.event.attending.post()

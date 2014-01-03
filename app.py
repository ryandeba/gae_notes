import webapp2
import os
from google.appengine.ext.webapp import template
from google.appengine.api import users

class index(webapp2.RequestHandler):
	def get(self):
		user = users.get_current_user()

		if user:
			path = os.path.join(os.path.dirname(__file__), 'views/index.html')
			self.response.write(template.render(path, {}))
		else:
			self.redirect(users.create_login_url(self.request.uri))

class notes(webapp2.RequestHandler):
	def get(self):
		user = users.get_current_user()

		if user:
			self.response.write('hi')
		else:
			self.redirect(users.create_login_url(self.request.uri))

application = webapp2.WSGIApplication([
	('/', index),
	('/notes', index),
], debug=True)

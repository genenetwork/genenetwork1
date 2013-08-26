import re
from dbFunction import webqtlDatabaseFunction

class GOSearch:

	def __init__(self, s):
		cursor = webqtlDatabaseFunction.getCursor()
		if not cursor:
			return
		#
		self.olds = s
		self.news = s
		self.match = False
		self.match_from = ''
		self.match_to = ''
		#
		search_name = re.compile('\s*go\s*[:=]\s*\S+\s*', re.I).search(self.olds)
		if search_name:
			self.match = True
			self.match_from = search_name.group()
			self.news = self.olds.replace(self.match_from, ' ')
			self.match_from = re.compile('\s+').sub('', self.match_from)
			cursor.execute(
				"""
				select genes from GORef
				where goterm=%s
				""", (self.match_from))
			gorefs = cursor.fetchall()
			if len(gorefs) == 0:
				self.match_to = ""
			else:
				self.match_to = gorefs[0][0]
			self.news = self.match_to.strip() + ' ' + self.news.strip()
		
	def get_match_to(self):
		match_to = self.match_to.split()
		return " ".join(match_to)

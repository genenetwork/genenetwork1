import re
from dbFunction import webqtlDatabaseFunction

class GOSearch:

		def __init__(self, s):
				cursor = webqtlDatabaseFunction.getCursor()
				if not cursor:
					return
				self.olds = s
				self.news = s
				#
				search_name = re.compile('\s*go\s*[:=]\s*\S+\s*', re.I).search(self.olds)
				if search_name:
					goterm = search_name.group()
					self.news = self.news.replace(goterm, ' ')
					goterm = re.compile('\s+').sub('', goterm)
					cursor.execute(
						"""
						select genes from goref
						where goterm=%s
						""", (goterm))
					gorefs = cursor.fetchall()
					if len(gorefs) == 0:
						genes = ""
					else:
						genes = gorefs[0][0]
					self.news = genes.strip() + ' ' + self.news.strip()
				else:
					self.news = self.olds

		def getNewS(self):
				return self.news

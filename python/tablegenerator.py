import urllib2
import json
import random

resp = urllib2.urlopen("http://vazzak2.ci.northwestern.edu/subjects/")
#send the html get request
#html is the json string returned
html = resp.read()

#parsing of the json string
#putting the list of departments in depts (array type)
js = json.loads(html)
depts = []
for x in range(0, len(js)):
	depts.append(js[x]['symbol'])

#checkpoint
print len(depts)
print depts[0]
	
#get first (latest) term
resp = urllib2.urlopen("http://vazzak2.ci.northwestern.edu/terms/")
html = resp.read()

#parse
terms = []
js = json.loads(html)
for x in range(0, len(js)):
	terms.append(js[0]['term_id'])

#checkpoint
print terms[0]

#looping through the departments and generating for one term
#1) overall rating of instruction
#2) overall rating of course
#3) how much did you learn in the class
#4) how intellectually difficult was the course
#5) how effective was the instructor
#6) how time-consuming was the class
#7) how fulfilling was the class
courses = []
count = 0
for term in terms:
	print term
	for dept in depts:
		resp = urllib2.urlopen("http://vazzak2.ci.northwestern.edu/courses/?term=" + str(term) + "&subject=" + dept)
		html = resp.read()
		js = json.loads(html)
		print dept
		for x in range(0, len(js)):
			class_title = js[x]['title']
			print class_title
			class_num = js[x]['catalog_num']
			instructor = js[x]['instructor']['name']
			location = js[x]['room']
			rating1 = random.randint(1,3)
			rating2 = random.randint(1,3)
			rating3 = random.randint(1,3)
			rating4 = random.randint(1,3)
			rating5 = random.randint(1,3)
			rating6 = random.randint(1,3)
			rating7 = random.randint(1,3)
			courses.append([dept, class_num, rating1, rating2, rating3, rating4, rating5, rating6, rating7, class_title, instructor, location])
		print "\n"
	print "\n\n"


#checkpoint
print len(courses)

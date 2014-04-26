from flask import render_template
from flask import request
from app import app
import urllib2
import os
import json

@app.route("/")

@app.route("/index")
def index():
	return render_template("index.html", title="Home", array=[1,2,3])

@app.route("/suggestions")
def suggestions():
	courses = ""
	path = os.path.dirname(os.path.abspath(__file__)) + "/table.txt"
	fyle = open(path)
	for lyne in fyle :
		courses += lyne.rstrip() + "|"
	fyle.close()

	return render_template("suggestions.html", crs=courses)

@app.route("/browse")
def browse():
	courses = ""
	path = os.path.dirname(os.path.abspath(__file__)) + "/table.txt"
	fyle = open(path)
	for lyne in fyle :
		courses += lyne.rstrip() + "|"
	fyle.close()

	return render_template("browse.html", crs=courses)

@app.route("/departments")
def departments():
	response = urllib2.urlopen('http://vazzak2.ci.northwestern.edu/subjects/')
	return response.read()

@app.route("/terms")
def terms():
	response = urllib2.urlopen('http://vazzak2.ci.northwestern.edu/terms/')
	return response.read()

@app.route("/courses")
def courses():
	term = request.args.get('term')
	subject = request.args.get('subject')
	url = 'http://vazzak2.ci.northwestern.edu/courses/?term=' + str(term) + '&subject=' + str(subject)
	print url
	response = urllib2.urlopen(url)
	return response.read()
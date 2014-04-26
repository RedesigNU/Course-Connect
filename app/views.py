from flask import render_template
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

@app.route("/find")
def find():
	return render_template("find.html")

# @app.route("/department")
# def department():
# 	dept = request.args.get('dept')
# 	response = urllib2.urlopen('http://vazzak2.ci.northwestern.edu/courses/')
# 	return response.read()
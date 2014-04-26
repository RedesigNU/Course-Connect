from flask import render_template
from app import app

@app.route("/")
@app.route("/index")

def index():

	return render_template("index.html", title="Home")

@app.route("/suggestions")
def suggestions():
	return render_template("suggestions.html")
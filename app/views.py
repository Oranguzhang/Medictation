from flask import render_template

from app import app

@app.route('/')
def index ():
    return render_template("index.html")

@app.route('/patient')
def patient():
    return render_template("bootstrapwebsite.html")

@app.route('/refillrequest')
def refillrequest():
    return render_template("refillrequest.html")
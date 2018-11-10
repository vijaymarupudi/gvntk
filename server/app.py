from flask import Flask
app = Flask(__name__)


@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route("/")
def hello():
    return "Hello World!"
app.run()
from flask import Flask, redirect
app = Flask(__name__)


@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:3000'
    return response


@app.route("/")
def index():
    return redirect('http://127.0.0.1:3000')

@app.route('/new_user', methods=["POST"])
def hello():
    print('GOT POST')
    return "Test"

app.run()

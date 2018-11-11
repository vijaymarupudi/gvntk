from flask import Flask, redirect, request
import database_tools

app = Flask(__name__)

def get_post_data():
    return request.get_json(force=True)

@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:3000'
    return response



@app.route("/")
def index():
    return redirect('http://127.0.0.1:3000')

@app.route('/new_user', methods=["POST"])
def hello():
    makeUser(data[name],data[password],data[type],data[location],data[email])
    data = get_post_data()
    print('name', data['email'])
    return 'sdfsd'


app.run()


""" name: "asddasf", password: "sdofnsf", location: "asdfadsf", email: "sdfsdf", type: "Giver"}
email: "sdfsdf"
location: "asdfadsf"
name: "asddasf"
password: "sdofnsf"
type: "Giver """
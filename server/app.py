from flask import Flask, redirect, request,jsonify
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
    data = get_post_data()
    print (data)
    print(dir(database_tools))
    database_tools.makeUser((data['name']),data['password'],data['type'],data['location'],data['email'])
    print ('test')
    return (jsonify('success'))

@app.route('/u_item', methods=["POST"])
def itemCreation():
    data = get_post_data()
    print (data)
    print(dir(database_tools))
    database_tools.itemCreation((data['name']),data['mainCatagory'],data['subCatagory'],data['date'],
                                 data['description'],data['timeCreated'],data['email'],data['typeItem'])
    print ('test')
    return (jsonify('success'))

@app.route('/CHANGE WHAT HE TELLS US', methods=["POST"])
def feedback():
    data = get_post_data()
    print (data)
    print(dir(database_tools))
    database_tools.makeFeedback((data['feedback']),data['timeCreated'],data['feedBackName'])
    return (jsonify('success'))

@app.route('/login', methods=["POST"])
def email():
    data = get_post_data()
    if database_tools.emailPassword(email,password) == data['email'] and database_tools.password() == data['password']:
        return (jsonify('success'))
    else:
        return (jsonify('failure'))
    return (jsonify('success'))

app.run(threaded = False)


""" name: "asddasf", password: "sdofnsf", location: "asdfadsf", email: "sdfsdf", type: "Giver"}
email: "sdfsdf"
location: "asdfadsf"
name: "asddasf"
password: "sdofnsf"
type: "Giver """
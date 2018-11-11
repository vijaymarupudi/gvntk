from flask import redirect, request, jsonify, session
from app import app
import database_tools


def get_post_data():
    return request.get_json(force=True)


@app.after_request
def add_header(response):
    response.headers["Access-Control-Allow-Origin"] = "http://127.0.0.1:3000"
    return response


@app.route("/")
def index():
    return redirect("http://127.0.0.1:3000")


@app.route("/new_user", methods=["POST"])
def hello():
    data = get_post_data()
    print(data)
    database_tools.makeUser(
        (data["name"]), data["password"], data["type"], data["location"], data["email"]
    )
    return jsonify("success")


@app.route("/new_item", methods=["POST"])
def itemCreation():
    data = request.form
    files = request.files

    name = data['name']
    description = data['description']
    mainCategory = data['mainCategory']
    image = files['image']
    imageData = image.read()
    print(session)

    database_tools.itemCreation(
        name,
        mainCategory,
        description,
        imageData,
        session['email']
    )
    return jsonify("success")


@app.route("/CHANGE WHAT HE TELLS US", methods=["POST"])
def feedback():
    data = get_post_data()
    print(data)
    print(dir(database_tools))
    database_tools.makeFeedback(
        (data["feedback"]), data["timeCreated"], data["feedBackName"]
    )
    return jsonify("success")


@app.route("/login", methods=["POST"])
def login_check():
    data = get_post_data()

    if database_tools.emailPassword(data['email'], data['password']):
        session['email'] = data['email']
        session.modified = True
        return jsonify("success")

    return jsonify("failure")


app.run(threaded=False)


""" name: "asddasf", password: "sdofnsf", location: "asdfadsf", email: "sdfsdf", type: "Giver"}
email: "sdfsdf"
location: "asdfadsf"
name: "asddasf"
password: "sdofnsf"
type: "Giver """

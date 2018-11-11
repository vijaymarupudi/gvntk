from flask import redirect, request, jsonify, session
import os
from app import app
import database_tools


global_state = {}
upload_folder = '/tmp/uploads'


try:
    os.mkdir(upload_folder)
except:
    pass


def save_file(image):
    save_image_filepath = os.path.join(upload_folder, image.filename)
    image.save(save_image_filepath)
    return save_image_filepath

@app.route('/images')
def get_images():
    image_path = request.args.get('path')
    return app.send_static_file(image_path)

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
    image_filepath = save_file(image)
    print(image_filepath)
    database_tools.itemCreation(
        name,
        mainCategory,
        description,
        image_filepath,
        global_state['email']
    )
    return jsonify("success")

@app.route('/get_items')
def get_items():
    items = database_tools.returnItems()
    return jsonify(items)

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
        global_state['email'] = data['email']
        return jsonify("success")

    return jsonify("failure")


app.run(threaded=False)

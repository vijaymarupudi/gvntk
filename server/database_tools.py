import sqlite3
from flask import g
from app import app

DATABASE = './userDatabase.db'

# It connects the database if it's not connected.
def get_conn():
    conn = getattr(g, '_database', None)
    if conn is None:
        conn = g._database = sqlite3.connect(DATABASE)
    return conn

# It disconnects automatically
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


def itemCreation(
    name, mainCategory, subCategory, date, description, timeCreated, email, typeItem
):
    with get_conn():
        get_conn().execute(
            "INSERT INTO item (name, mainCategory, subCategory, date, description,timeCreated, ownerEmail, typeItem) VALUES (?,?,?,?,?,?,?)",
            (
                name,
                mainCategory,
                subCategory,
                date,
                description,
                timeCreated,
                email,
                typeItem,
            ),
        )


def makeUser(userName, password, accountType, location, email):

    with get_conn():

        get_conn().execute(
            "INSERT INTO user (userName, password, accountType, location, email) VALUES (?,?,?,?,?)",
            (userName, password, accountType, location, email),
        )
        get_conn().commit()


def makeFeedback(feedback, timeCreated, feedBackName):

    with get_conn():

        get_conn().execute(
            "INSERT INTO user (feedback,timeCreated,feedBackName) VALUES (?,?,?)",
            (feedback, timeCreated, feedBackName),
        )


def returnItems(mainCategory, typeItem):
    with get_conn():
        listOfItems = get_conn().execute(
            "SELECT * FROM item where (mainCategory,typeItem) = (?,?)",
            (mainCategory, typeItem),
        )

    return listOfItems


def emailPassword(email, password):
    with get_conn():
        userPassword = get_conn().execute(
            "SELECT password FROM user WHERE email = ?", (email,)
        ).fetchall()
        print(userPassword)
        if userPassword == None:
            return False
        if userPassword == password:
            return True
        else:
            return False

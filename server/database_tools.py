import sqlite3
from flask import g
import datetime
from app import app

DATABASE = './userDatabase.db'

# It connects the database if it's not connected.
def get_conn():
    conn = getattr(g, '_database', None)
    if conn is None:
        conn = g._database = sqlite3.connect(DATABASE, isolation_level=None)
    return conn

# It disconnects automatically
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


def itemCreation(
    name, mainCategory, description, photo_filepath, email
):
    with get_conn():
        get_conn().execute(
            "INSERT INTO item (name, mainCategory, photo, description,timeCreated, typeItem, ownerEmail) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (
                name,
                mainCategory,
                photo_filepath,
                description,
                datetime.datetime.isoformat(datetime.datetime.now()),
                'GIVEN',
                email
            )
        )


def makeUser(userName, password, accountType, location, email):

    with get_conn():

        get_conn().execute(
            "INSERT INTO user (userName, password, accountType, location, email) VALUES (?,?,?,?,?)",
            (userName, password, accountType, location, email),
        )


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


def emailPassword(email, userPassword):
    with get_conn():
        databasePasswordRow = get_conn().execute(
            "SELECT password FROM user WHERE email = ?", (email,)
        ).fetchone()

        try:
            if userPassword == databasePasswordRow[0]:
                return True
        except:
            return False
        
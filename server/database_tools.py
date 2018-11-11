import sqlite3
from flask import g
import datetime
from app import app

DATABASE = './userDatabase.db'

def rows_to_dict(rows):
    final_list = []
    for row in rows:
        keys = row.keys()
        new_dict = {}
        for key in keys:
            new_dict[key] = row[key]
        final_list.append(new_dict)
    return final_list

# It connects the database if it's not connected.
def get_conn():
    conn = getattr(g, '_database', None)
    if conn is None:
        conn = g._database = sqlite3.connect(DATABASE, isolation_level=None)
        conn.row_factory = sqlite3.Row
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


def returnItems():
    with get_conn():
        items = get_conn().execute('SELECT * from item').fetchall()

    return rows_to_dict(items)


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

def takenUpdate(name, typeItem):
    with get_conn():
        get_conn().execute('UPDATE item SET typeItem = data[typeItem] WHERE name=(?)',(name,))


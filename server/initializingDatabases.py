import sqlite3

conn = sqlite3.connect('./userDatabase.db')

with conn:
    conn.execute(
        """CREATE TABLE IF NOT EXISTS item (
        name TEXT NOT NULL,
        mainCategory TEXT NOT NULL,
        photo BLOB NOT NULL,
        description TEXT NOT NULL,
        timeCreated TEXT NOT NULL,
        typeItem TEXT NOT NULL,
        ownerEmail TEXT NOT NULL
    )"""
    )

# name item name
# type of item i.e clothes
# subtype is subtype of item i.e coat
# photo is a picture of the item
# explaination of item
# timecreated is when the item was created
# typeitem is either a give or take
# owner is the user email who posted the item


with conn:
    conn.execute(
        """CREATE TABLE IF NOT EXISTS user (
        userName TEXT NOT NULL,
        password TEXT NOT NULL,
        accountType TEXT NOT NULL,
        location TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
        )"""
    )

with conn:
    # feedback contains feed back from the user
    # timecreated is the time of the feedback posting
    # creates the feedback schema

    conn.execute(
        """CREATE TABLE IF NOT EXISTS feedback (
            feedback TEXT NOT NULL,
            timeCreated TEXT NOT NULL,
            feedBackName TEXT NOT NULL
            )"""
    )

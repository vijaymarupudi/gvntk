import sqlite3

conn = sqlite3.connect('./userDatabase.db')

with conn:
    conn.execute("""CREATE TABLE IF NOT EXISTS item (
        name TEXT,
        type TEXT,
        subtype TEXT,
        photo BLOB,
        description TEXT,
        timeCreated TEXT,
        typeItem TEXT,
        ownerEmail TEXT,
        id INT
    )""")

# name item name
# type of item i.e clothes
# subtype is subtype of item i.e coat
# photo is a picture of the item
# explaination of item
# timecreated is when the item was created
# typeitem is either a give or take
# owner is the user email who posted the item

name = "Burei Watch"
type = "accesories"
subtype = "wrists"
date = "today"
description = "a black watch with mesh steel band"
timeCreated = "now"

def itemCreation(name,type,subtype,date,description,timeCreated,email):
    with conn:
        conn.execute('INSERT INTO item (name, type, subtype, date, description,timeCreated, ownerEmail) VALUES (?,?,?,?,?,?,?)', (name,type,subtype,date,description,timeCreated,email))

name = "n"
password = "p"
type = "t"
location = "l"
email = "e"
id = "i"

conn.execute("""CREATE TABLE IF NOT EXISTS user (
    name TEXT,
    password TEXT,
    type TEXT,
    location TEXT,
    email TEXT,
    )""")
# name is name
# password is password
# type is either giver or taker
# location is a string with the location they entered
# email is the user email

def makeUser(name,password,type,location,email):
    
    with conn:

        conn.execute('INSERT INTO user (name, password, type, location, email) VALUES (?,?,?,?,?)',(name,password,type,location,email))

makeUser(name,password,type,location,email)
itemCreation(name,type,subtype,date,description,timeCreated,email)
conn.close()




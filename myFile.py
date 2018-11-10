import sqlite3

conn = sqlite3.connect('./userDatabase.db')

with conn:
    conn.execute("""CREATE TABLE IF NOT EXISTS item (
        name TEXT,
        type TEXT,
        subtype TEXT,
        date TEXT,
        photo BLOB,
        description TEXT,
        timeCreated TEXT,
        typeItem TEXT,
        ownerEmail TEXT,
        id INT
    )""")
name = "Burei Watch"
type = "accesories"
subtype = "wrists"
date = "today"
description = "a black watch with mesh steel band"
timeCreated = "now"
def itemCreation(name,type,subtype,date,description,timeCreated,email):
    conn.execute('INSERT INTO item (name, type, subtype, date, description,timeCreated, ownerEmail) VALUES (?,?,?,?,?,?,?)', (name,type,subtype,date,description,timeCreated,email))

with conn:
    conn.execute('INSERT INTO item (name, type, subtype, date) VALUES ("Vijay", "Clothes",  "Coat", "Today")')

name = "n"
password = "p"
type = "t"
location = "l"
email = "e"
id = "i"

def makeUser(name,password,type,location,email):
    
    with conn:
        conn.execute("""CREATE TABLE IF NOT EXISTS user (
            name TEXT,
            password TEXT,
            type TEXT,
            location TEXT,
            email TEXT,
            id INT
            )""")

    
    conn.execute('INSERT INTO user (name, type, location, email, id) VALUES ("Hamza", "giver", "madison, Wi", "hamza.ehsan@lawrence.edu", 1 )')
    conn.execute('INSERT INTO item (name, type, subtype, date) VALUES ("Fila Coat", "Clothes",  "Coat", "Today")')
    conn.execute('INSERT INTO user (name, password, type, location, email, id) VALUES (?,?,?,?,?,?)',(name,password,type,location,email,id))
    conn.execute("""CREATE TABLE IF NOT EXISTS user (
        name TEXT,
        password TEXT,
        type TEXT,
        location TEXT,
        email TEXT,
        )""")
    
    conn.execute('INSERT INTO user (name, password, type, location, email) VALUES (?,?,?,?,?)',(name,password,type,location,email))

itemCreation(name,type,subtype,date,description,timeCreated,email)
conn.close()


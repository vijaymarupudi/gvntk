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
        id INT
    )""")
    conn.execute('INSERT INTO item (name, type, subtype, date) VALUES ("Vijay", "Clothes",  "Coat", "Today")')

name = "n"
password "p"
type = "t"
location= "l"
email ="e"
id = "i"

def makeUser(name,password,type,location,email,id):
    
    with conn:
    conn.execute("""CREATE TABLE IF NOT EXISTS user (
        name TEXT,
        password TEXT,
        type TEXT,
        location TEXT,
        email TEXT,
        id INT
        )""")
    
    conn.execute('INSERT INTO user (name, password, type, location, email, id) VALUES (?,?,?,?,?,?)',(name,password,type,location,email,id))

    conn.close()


    

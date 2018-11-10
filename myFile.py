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

    conn.execute("""CREATE TABLE IF NOT EXISTS user (
        name TEXT,
        type TEXT,
        location TEXT,
        email TEXT,
        id INT
        )""")
    
    conn.execute('INSERT INTO user (name, type, location, email, id) VALUES ("Hamza", "giver", "madison, Wi", "hamza.ehsan@lawrence.edu", 1 )')
    conn.execute('INSERT INTO item (name, type, subtype, date) VALUES ("Vijay", "Clothes",  "Coat", "Today")')

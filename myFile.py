import sqlite3

conn = sqlite3.connect('./test_database.db')

id = 0

with conn:
    conn.execute("""CREATE TABLE IF NOT EXISTS user (
        name TEXT,
        type TEXT,
        location TEXT,
        email TEXT,
        id INT
        )""")
    
    conn.execute('INSERT INTO user (name, type, location, email, id) VALUES ("Hamza", "giver", "madison, Wi", "hamza.ehsan@lawrence.edu", 1 )')

conn.close()

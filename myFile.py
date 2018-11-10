import sqlite3

conn = sqlite3.connect('./userDatabase.db')

with conn:
    conn.execute("""CREATE TABLE IF NOT EXISTS item (
        name TEXT,
        type TEXT,
        subtype TEXT,
        date TEXT
    )""")

    conn.execute('INSERT INTO item (name, type, subtype, date) VALUES ("Vijay", "Clothes",  "Coat", "Today")')

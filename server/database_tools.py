import sqlite3

conn = sqlite3.connect('./userDatabase.db')

with conn:
    conn.execute("""CREATE TABLE IF NOT EXISTS item (
        name TEXT,
        mainCatagory TEXT,
        subCatagory TEXT,
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

itemName = "Burei Watch"
mainCataogry = "accesories"
subCatagory = "wrists"
date = "today"
typeItem = "give"
description = "a black watch with mesh steel band"
timeCreated = "now"

def itemCreation(name,mainCatagory,subCatagory,date,description,timeCreated,email,typeItem):
    with conn:
        conn.execute('INSERT INTO item (name, mainCatagory, subCatagory, date, description,timeCreated, ownerEmail, typeItem) VALUES (?,?,?,?,?,?,?)', (name,mainCatagory,subCatagory,date,description,timeCreated,email, typeItem))

userName = "n"
password = "p"
location = "l"
email = "e"
id = "i"

with conn:

    conn.execute("""CREATE TABLE IF NOT EXISTS user (
        userName TEXT,
        password TEXT,
        type TEXT,
        location TEXT,
        email TEXT
        )""")


# name is name
# password is password
# type is either giver or taker
# location is a string with the location they entered
# email is the user email

def makeUser(name,password,type,location,email):
    
    with conn:

        conn.execute('INSERT INTO user (name, password, type, location, email) VALUES (?,?,?,?,?)',(name,password,type,location,email))

makeUser(userName,password,type,location,email)
itemCreation(userName,mainCataogry,subCatagory,date,description,timeCreated,email,typeItem)
conn.close()


def returnItems(type, typeItem):
    with conn:
        listOfItems = conn.execute('SELECT * FROM item where (type,typeItem) = (?,?)',(type,typeItem))
    return listOfItems
conn.close()

returnItems(mainCataogry, typeItem)




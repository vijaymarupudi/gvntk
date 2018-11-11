import sqlite3

conn = sqlite3.connect("./userDatabase.db")

with conn:
    conn.execute(
        """CREATE TABLE IF NOT EXISTS item (
        name TEXT,
        mainCatagory TEXT,
        subCatagory TEXT,
        photo BLOB,
        description TEXT,
        timeCreated TEXT,
        typeItem TEXT,
        ownerEmail TEXT,
        id INT
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
        userName TEXT,
        password TEXT,
        accountType TEXT,
        location TEXT,
        email TEXT
        )"""
    )

with conn:
    # feedback contains feed back from the user
    # timecreated is the time of the feedback posting
    # creates the feedback schema

    conn.execute(
        """CREATE TABLE IF NOT EXISTS feedback (
            feedback TEXT,
            timeCreated TEXT,
            feedBackName TEXT
            )"""
    )


def itemCreation(
    name, mainCatagory, subCatagory, date, description, timeCreated, email, typeItem
):
    with conn:
        conn.execute(
            "INSERT INTO item (name, mainCatagory, subCatagory, date, description,timeCreated, ownerEmail, typeItem) VALUES (?,?,?,?,?,?,?)",
            (
                name,
                mainCatagory,
                subCatagory,
                date,
                description,
                timeCreated,
                email,
                typeItem,
            ),
        )


def makeUser(userName, password, accountType, location, email):

    with conn:

        conn.execute(
            "INSERT INTO user (userName, password, accountType, location, email) VALUES (?,?,?,?,?)",
            (userName, password, accountType, location, email),
        )
        conn.commit()


def makeFeedback(feedback,timeCreated,feedBackName):
    
    with conn:
        
        conn.execute('INSERT INTO user (feedback,timeCreated,feedBackName) VALUES (?,?,?)',(feedback,timeCreated,feedBackName))



def returnItems(mainCatagory, typeItem):
    with conn:
        listOfItems = conn.execute(
            "SELECT * FROM item where (mainCatagory,typeItem) = (?,?)", (mainCatagory, typeItem)
        )

    return listOfItems

def emailPassword(email,password):
    with conn:
        password = conn.execute('SELECT password FROM user where email = ?', (email))
        email = conn.execute('SELECT email FROM user where password = ?', (password))
        return password,email

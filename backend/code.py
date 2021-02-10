import sqlite3
from random import *
import random
from flask import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

connection = sqlite3.connect("passwords.db", check_same_thread=False)
crsr = connection.cursor()


class password_class:
    webiste = None
    username = None
    password = None

    def __init__(self, website, username, password):
        self.website = website
        self.username = username
        self.password = password


def insert_query(obj):
    q = "insert into PASSWORD(website, username, password) values ( '" + \
        obj.website + "', '" + obj.username + "', '" + obj.password + "');"
    print(q)
    return q


def retrieve_query(id):
    return "SELECT * FROM PASSWORD WHERE id = " + str(id)


def delete_query(n):
    return "delete from PASSWORD where id = " + str(n)


def get_all_query():
    return "select * from PASSWORD"


@app.route('/passwords', methods=['POST', 'GET'])
def passwords():
    if request.method == 'POST':
        return insert_row(password_class(
            request.json.get('website'), request.json.get('username'), request.json.get('password')))
    elif request.method == 'GET':
        return get_all_rows()


def dictForm(list):
    res = {}
    res['passwords'] = list
    return res


def get_all_rows():
    q = get_all_query()
    crsr.execute(q)
    return dictForm(crsr.fetchall())


def getDict(obj):
    res = {}
    res['website'] = obj.website
    res['password'] = obj.password
    res['username'] = obj.username
    return res


def insert_row(obj):
    query = insert_query(obj)
    crsr.execute(query)
    connection.commit()
    return getDict(obj)


@app.route('/gen_pass/<length>', methods=['GET'])
def gen_pass(length):
    # print(request.json)
    res = {}
    res["password"] = get_new_password(length)
    return res


def get_new_password(length):
    length = int(length)
    caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    low = "abcdefghijklmnopqrstuvwxyz"
    digits = "0123456789"
    special = "!@#$%&*+"
    strings = [caps, low, digits, special]
    password = ""
    ind = randint(0, 25)
    password += caps[ind]
    ind = randint(0, 25)
    password += low[ind]
    ind = randint(0, 9)
    password += digits[ind]
    ind = randint(0, 7)
    password += special[ind]
    length -= 4
    for i in range(length):
        ind = randint(0, 3)
        str_len = len(strings[ind])
        ind2 = randint(0, str_len-1)
        password += strings[ind][ind2]
    ''.join(random.sample(password, len(password)))
    return password


@app.route('/passwords/<id>', methods=['DELETE'])
def delete_row(id):
    query = retrieve_query(id)
    crsr.execute(query)
    res = {}
    listt = crsr.fetchall()
    if len(listt) == 0:
        res["result"] = "not found"
    else:
        res["result"] = "found"
        res["deleted Row"] = listt[0]
    query = delete_query(id)
    crsr.execute(query)
    connection.commit()
    return res

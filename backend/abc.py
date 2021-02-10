from random import *
import random


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


for i in range(15):
    print(get_new_password(12))

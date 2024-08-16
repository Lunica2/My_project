import random

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
number = "0123456789"
symbols ="[]{}ZX*;/,._-"

all = lower + upper + number + symbols
length = 16
password = "".join(random.sample(all,length))

print(password)
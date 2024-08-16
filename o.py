strx='1'
for i in range(1,11):
    newstrx = strx*i
    if i==10:
        print(12345678910987654321)
    elif i!=10:    
        print("-"*(10-i)+str(int(newstrx)*int(newstrx)))
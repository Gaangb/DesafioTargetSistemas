#4- Questão Python

string = "Hello, world!"
string_invertida = "" 

for i in range(len(string)-1, -1, -1):
    string_invertida += string[i] 

print(string_invertida)
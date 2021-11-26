import os
pasta = './'


files = []

objects = []

for diretorio, subpastas, arquivos in os.walk(pasta):
    for arquivo in arquivos:
		arq = os.path.join(diretorio, arquivo)
		files.append(arq[2:])
		
		
for arquive in files:
	print(arquive[(len(arquive) - 4):] )
	if(arquive[(len(arquive) - 4):] == ".glb"):
		objects.append(arquive)
				
string = ""

for obj in objects:
	string += "'" + obj + "'" + ","

print(string)
        

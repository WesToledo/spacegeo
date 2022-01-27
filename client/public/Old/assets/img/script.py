import os
pasta = './'


files = []

objects = []

for diretorio, subpastas, arquivos in os.walk(pasta):
    for arquivo in arquivos:
		arq = os.path.join(diretorio, arquivo)
		files.append(arq[2:])
		
		
for arquive in files:
	if(arquive[(len(arquive) - 4):] == ".bmp"):
		objects.append(arquive)
				
print(objects)
        

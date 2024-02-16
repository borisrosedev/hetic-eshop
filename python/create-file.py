from pathlib import Path 

question = "Voulez-vous créer un fichier ?(oui/non)"
name = "Quel nom voulez-vous donner au fichier ?(oui/non)"
file_answer = input(question)
if file_answer == "oui":
    name_answer = input(name)
    file = Path('..',name_answer)
    if file.exists(): 
        print("Le fichier existe déjà")
    else:
        file.touch(mode=438, exist_ok=True)
        print("Le fichier a été créé")


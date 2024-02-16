from pathlib import Path 

question = "Voulez-vous créer un dossier ?(oui/non)"
name = "Quel nom voulez-vous donner au dossier ?(oui/non)"
folder_answer = input(question)
if folder_answer == "oui":
    name_answer = input(name)
    folder = Path('..',name_answer)
    if folder.exists(): 
        print("Le dossier existe déjà")
    else:
        folder.mkdir()
        print("Le dossier a été créé")


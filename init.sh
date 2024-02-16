#!/bin/bash
declare -r folder="Voulez-créer un dossier?"
declare -r file="Voulez-créer un fichier?"

create_folder() {
    read -p "$folder" answer_folder
    if [[ "$answer_folder" = "oui" ]]; then
        echo "Nom du dossier à créer: "
        read name
        if [[ "$name" ]]; then
            read -p "$file" answer_file
            if [[ "$answer_file" == "oui" ]]; then
                echo "Nom du ou des fichiers"
                read files
                if [[ "$files" ]]; then
                    cd java
                    java Main .. $name $files
                fi
            else
                cd java
                java Main .. $name
            fi
        else
            echo "aucun nom de dossier donné"
        fi
    fi

}

push_workflow() {
    echo "Message: "
    read message
    if [[ "$message" ]]; then
        git add .
        git commit -m"feat/$message"
        git push origin main
    fi
}

echo "Voulez-vous démarrer le scripte de création de dossiers et fichiers"
read
if [[ "$REPLY" = "oui" ]]; then
    create_folder
else
    echo "Voulez-vous démarrer le push workflow"
    read answer
    if [[ "$answer" = "oui" ]]; then
        push_workflow
    fi
fi

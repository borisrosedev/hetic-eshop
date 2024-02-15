#!/bin/bash
declare -r question="Voulez-vous démarrer l'exécution des scripts ?"

start(){
    
    read -p "$question" answer_question
    if [[ "$answer_question" = "oui" ]] then;
        echo "Démarrage des scripts git"
        read git 
        if [[ "$git" = "oui" ]]; then 
            ./scripts/git.sh
        fi
        echo "Démarrage des scripts plugins"
        read plugins
        if [[ "$plugins" = "oui" ]]; then 
            ./scripts/plugins.sh
        fi
    fi

}

start
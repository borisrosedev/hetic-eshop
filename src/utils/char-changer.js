export default function(word, option){
    if(option == 'lower'){
        return word.toLowerCase()
    }

    if(option == 'upper'){
        return word.toUpperCase()
    }
}
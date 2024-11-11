export default function errorRegex(error){
    const regex = /(?<=\/)[^)]+(?=\))/ig;
    const message = error.toLowerCase().match(regex)

    return message
}
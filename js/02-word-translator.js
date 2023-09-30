// The Word Translator
/*
Usage: Use simple conditional statements

Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. 
If the user enters anything but those four language codes, the application should default to English. 
The result should be (for example):

Hello World translated in French is: Bonjour le monde
*/

let language = prompt("Please enter one of the languages. es, de, en or fr.")
if (language == "es")
{
    document.write("Hello World translated in Spanish is: Hola Mundo")
}
else if (language == "de")
{
    document.write("Hello World translated in German is: Hallo Welt")
}
else if (language == "en")
{
    document.write("Hello World translated in English is: Hello World")
}
else if (language == "fr")
{
    document.write("Hello World translated in French is: Bonjour le monde")
}
else
{
    document.write("Hello World translated in English is: Hello World")
}

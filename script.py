lista = ['Romulo', 'Gaby', 'Cachorro']

lista2 = [(word*2) for word in lista]
print(lista2)

# regex for removing punctuation!
import re
# nltk preprocessing magic
import nltk
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer
# grabbing a part of speech function:
from part_of_speech import get_part_of_speech

text = "He didn't So many squids are jumping out of suitcases these days that you can barely go anywhere without seeing one burst forth from a tightly packed valise. I went to the dentist the other day, and sure enough I saw an angry one jump out of my dentist's bag within minutes of arriving. She hardly even noticed."
print('normal text:')
print(text,'\n')
#making a regex
cleaned = re.sub('\W+', ' ', text)
print('after the regex:')
print(cleaned,'\n')

tokenized = word_tokenize(cleaned)
print('texto tokenizado:')
print(tokenized,'\n')


stemmer = PorterStemmer()
stemmed = [stemmer.stem(token) for token in tokenized]

## -- CHANGE these -- ##
lemmatizer = WordNetLemmatizer()
lemmatized = [lemmatizer.lemmatize(token, get_part_of_speech(token)) for token in tokenized]

print("Stemmed text:")
print(stemmed,'\n')
print("\nLemmatized text:")
print(lemmatized,'\n')
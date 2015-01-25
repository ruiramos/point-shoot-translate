# ss15-baliteam
Point/Shoot/Translate is an experiment with computer vision and machine translation.

The ideia was to create a web app that would allow a user to know how something's called in different languages just by using their phones and taking a picture (or uploading one, if they're using a computer and not a phone).

The system is working as a static webapp and was built for the Static Showdown 2015 hackathon.

It uses several APIs, namely:
 - [Imgur](https://api.imgur.com/) for hosting
 - [Alchemy Vision](http://www.alchemyapi.com/products/alchemyvision/) for extracting meaning (in English)
 - [Yandex Translate API](https://api.yandex.com/translate/) for translation
 - [Yahoo's YQL](https://developer.yahoo.com/yql/) for bypassing CORS

It was built using React and Fluxxor.
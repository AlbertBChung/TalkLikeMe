/* This simple app uses the '/translate' resource to translate text from
one language to another. */

/* This template relies on the request module, a simplified and user friendly
way to make HTTP requests. */
require('dotenv').config()
const express = require('express');
// const createError = require('http-errors');
const bodyParser = require('body-parser').json();

const request = require('request-promise');
const uuidv4 = require('uuid/v4');

var app = express();

var subscriptionKey = process.env.TRANSLATOR_TEXT_SUBSCRIPTION_KEY;
var endpoint = process.env.TRANSLATOR_TEXT_ENDPOINT;

var output;

/* If you encounter any issues with the base_url or path, make sure that you are
using the latest endpoint: https://docs.microsoft.com/azure/cognitive-services/translator/reference/v3-0-translate */
async function translateText(text, language){
    let options = {
        method: 'POST',
        baseUrl: endpoint,
        url: 'translate',
        qs: {
          'api-version': '3.0',
          'to': [language]
        },
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Content-type': 'application/json',
          'X-ClientTraceId': uuidv4().toString()
        },
        body: [{
              'text': text
        }],
        json: true,
    };

    await request(options, function(err, res, body){
        //console.log(JSON.stringify(body, null, 4));
        let translation = (body[0].translations)[0].text;
        output = translation;
    });
};

app.get(
  "/",
  function(req, res, user) {
    res.send("Adam's translation app");
  }
);

app.get(
  "/translate",
  async function(req, res, user) {
    let texts = ['one', 'two', 'hello'];
    let language = 'ja'
    // Call the function to translate text.
    for (text of texts) {
      await translateText(text, language);
      console.log(output);
    }
    res.send(output + '!');
  }
);

app.post(
  "/translate",
  bodyParser,
  async function(req, res, user) {
    res.body = req.body;
    const { nouns, adjs, verbs, language } = res.body;
    // Call the function to translate text.
    for (i in nouns) {
      await translateText(nouns[i], language);
      // console.log(output);
      nouns[i] = output;
    }
    for (i in adjs) {
      await translateText(adjs[i], language);
      // console.log(output);
      adjs[i] = output;
    }
    for (i in verbs) {
      await translateText(verbs[i], language);
      // console.log(output);
      verbs[i] = output;
    }
    console.log(res.body);
    res.send(res.body);
  }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
module.exports = app;
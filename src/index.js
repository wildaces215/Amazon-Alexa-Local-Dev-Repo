const Alexa = require("ask-sdk");
//const i18n = require("i18next");
//const sprintf = require("i18next-sprintf-postprocessor");
//const https = require("https");

const skillName = "Crypto Prices";

const LaunchHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;

    return request.type === "LaunchRequest";
  },
  handle(handlerInput) {
    const speakOutput =
      "Hello! Welcome to cake walk. That was a piece of cake! Bye!";

    return (
      handlerInput.responseBuilder

        .speak(speakOutput)

        //.reprompt(speakOutput)

        .getResponse()
    );
  }
};
const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(LaunchHandler)
  .lambda();

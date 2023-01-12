import { Meteor } from "meteor/meteor";

import { sendMessageToMupi } from "./Api";

Meteor.methods({
  "Message.sendMessageToMupi": sendMessageToMupi,
});

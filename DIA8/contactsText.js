"use strict";
exports.__esModule = true;
var contacts_1 = require("./contacts");
var reto1_1 = require("./reto1");
var sofia = new reto1_1.Person("Sofia", 25, "Una calle");
var mario = new reto1_1.Person("mario", 25, "Una calle");
var elena = new reto1_1.Person("elena", 25, "Una calle");
var agenda = new contacts_1.Contacts();
agenda.people = [sofia, mario, elena];
agenda.printCalendar();

const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const env = process.env.NODE_ENV;
require("dotenv").config({ path: `./ENV/${env}.env` });
const Contact = require("../api/contacts");

describe("Should be able to create contact", function () {
  this.timeout(30000);
  const issueName = ["Totally Works", "Totally doesnt Work"];
  beforeEach(async function () {});
  afterEach(async function () {
    
  });
  it("1 should be able to log in", async function () {
    const contact = new Contact();
    const cont = {
      firstName: "Vytenis",
      lastName: "Testas",
      gender: "m",
      identifiers: [
        {
          type: "email",
          channels: {
            email: {
              status: "subscribed",
            },
          },
          id: "testas@gmail.com",
        },
      ],
    };
    const response = await contact.create(cont);
    console.log(response.data);
  });
});

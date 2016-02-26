const ctx = module.exports = Object.assign({}, require("../lib/context"));
const assert = ctx.assert = require("assert");
const supertest = require("supertest");
const app = require("../lib/app");
ctx.agent = require("supertest-as-promised")(app.callback());
ctx.uuid = require("uuid");

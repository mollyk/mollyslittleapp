#!/bin/env node
const ctx = require("../lib/context");
const co = require("co");
const exec = require("child_process").exec();
const config = require("config");
ctx.db = require("../lib/services/db")(config.get("db"), ctx);
ctx.models = ctx.db.models;

co(function *() {
	yield ctx.db.sync({force: true});
	yield ctx.models.Role.bulkCreate([
			{description: "An administrator", title:"admin"},
			{description: "A guest", title:"guest"},
			{description: "An editor", title:"editor"}
			], {ignoreDuplicates: true}
	);
	yield ctx.db.models.Post.bulkCreate([
		{
			title:"foobar",
			content: "bazbarbazbarbazbar"
		},
		{
			title:"barbaz",
			content: "foofoofoofoofoofoofoo"
		},
		{
			title:"bazfoo",
			content: "barbarbarbarbarbarbar"
		},
		{
			title:"foobaz",
			content: "barbarbarbar"
		},
		{
				title:"barfoo",
			content: "bazbazbazbazbazbazbaz"
		}], {ignoreDuplicates: true}
	);
})
.then (() => {
	console.log("Done");
	process.exit();
})
.catch ((err) =>{
	console.error(err);
	process.exit(1);
});

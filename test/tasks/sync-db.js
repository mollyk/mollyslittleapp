#!/bin/env node
const ctx = require("../lib/context");
const co = require("co");
const exec = require("child_process").exec();
const config = require("config");
ctx.db = require("../lib/services/db")(ctx);
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
			id: "1e659b39-d76a-4bdf-bea4-f48af6e86c88",
			title:"foobar",
			content: "bazbarbazbarbazbar"
		},
		{
			id: "9ea99667-202f-446c-adfd-588d1d5b269f",
			title:"barbaz",
			content: "foofoofoofoofoofoofoo"
		},
		{
			id: "b1e438bd-1025-41dc-b14c-6e5612ab3d8c",
			title:"bazfoo",
			content: "barbarbarbarbarbarbar"
		},
		{
			id: "9d4bb1c8-0a08-4082-b1a7-c3d547c05ec5",
			title:"foobaz",
			content: "barbarbarbar"
		},
		{
			id: "ba4ab14d-ff24-4e67-9fe4-393100e448dc",
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

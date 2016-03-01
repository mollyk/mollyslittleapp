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
//
// // ctx.db.Role.sync();
// // ctx.db.Post.sync();
// ctx.db.sync({force});
//
// ctx.models.Role.bulkCreate({[
// 	{
// 		id: "admin",
// 		description: "An administrator",
// 		title:"admin"
// 	},
// 	{
// 		id: "guest",
// 		description: "A guest",
// 		title:"guest"
// 	},
// 	{
// 		id: "editor",
// 		description: "An editor",
// 		title:"editor"
// 	}], ignoreDuplicates: true
// });
//
// ctx.models.Post.bulkCreate({[
// 	{
// 		id: "d3b6601b-78b3-41f9-b8a1-82693c0f4032",
// 		title:"foobar",
// 		content: "bazbarbazbarbazbar"
// 	},
// 	{
// 		id: "8b36135d-6d98-4ebe-958d-d5adc7228a24",
// 		title:"barbaz",
// 		content: "foofoofoofoofoofoofoo"
// 	},
// 	{
// 		id: "c0cf8944-ba53-4cb5-ab84-87e784aaf64e",
// 		title:"bazfoo",
// 		content: "barbarbarbarbarbarbar"
// 	},
// 	{
// 		id: "2a555a03-927a-46c2-b5b8-410e54d8f6b9",
// 		title:"foobaz",
// 		content: "barbarbarbar"
// 	},
// 	{
// 		id: "c3d9fe3c-8064-41e5-86a9-0a43ede945de",
// 		title:"barfoo",
// 		content: "bazbazbazbazbazbazbaz"
// 	}], ignoreDuplicates: true
// });
//
// exports.ctx.models.Role = Role;
// exports.ctx.models.Post = Post;

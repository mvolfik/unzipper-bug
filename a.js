const fs = require("node:fs");
const unzipper = require("unzipper");

// const https = require("node:https");
// https.get(
//     // "http://localhost:8000/a.zip",
//     "https://raw.githubusercontent.com/apify/actor-templates/master/dist/templates/ts-crawlee-cheerio.zip",
//     (response) => {
//         response.on("data", (chunk) => {
//             console.log("Chunk", chunk.length);
//         });
//         const unzip = unzipper.Extract({ path: "./ahoj" });
//         response.pipe(unzip);
//     }
// );

const data = fs.readFileSync("a.zip");
const extractor = unzipper.Extract({ path: "./test" });

extractor.write(Uint8Array.prototype.slice.call(data, 0, 1378));
extractor.write(Uint8Array.prototype.slice.call(data, 1378, 1378 * 2));
extractor.write(Uint8Array.prototype.slice.call(data, 1378 * 2, 1378 * 3));
extractor.write(Uint8Array.prototype.slice.call(data, 1378 * 3));

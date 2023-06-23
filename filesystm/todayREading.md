

writeFileFn("Hello JavaScript");
[09:39, 6/12/2023] Sajid Ali Khan Si: function writeFileFn(data) {
  try {
    const prom = fs.writeFile("output.txt", data);
    prom
      .then(function () {
        console.log("Success");
      })
      .catch(function (error) {
        console.error(error.message);
      });
  } catch (err) {
    console.log(err);
  }
}
writeFileFn("Hello JavaScript");
[09:43, 6/12/2023] Sajid Ali Khan Si: const fs = require("fs/promises");
async function readFileFn() {
  try {
    const out = await fs.readFile("input.txt", { encoding: "utf-8" });
    console.log(out);
  } catch (err) {
    console.log(err);
  }
}
readFileFn();
[09:45, 6/12/2023] Sajid Ali Khan Si: const fs = require("fs/promises");
function readFileFn() {
  try {
    const prom = fs.readFile("input.txt", { encoding: "utf-8" });
    prom
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  } catch (err) {
    console.log(err);
  }
}
readFileFn();
[09:49, 6/12/2023] Sajid Ali Khan Si: const fs = require("fs/promises");
async function readFileFn() {
  try {
    const out = await fs.readFile("input.txt", { encoding: "utf-8" });
    console.log(out);
  } catch (err) {
    console.log(err);
  }
}
readFileFn();
console.log("Hello JavaScript");
[09:51, 6/12/2023] Sajid Ali Khan Si: const fs = require("fs");
function readFileFn() {
  try {
    const out = fs.readFileSync("input.txt", { encoding: "utf-8" });
    console.log(out);
  } catch (err) {
    console.log(err);
  }
}
readFileFn();
console.log("Hello JavaScript");
[09:58, 6/12/2023] Sajid Ali Khan Si: const fs = require("fs");
const folderName = "./scripts/";
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("Successfully created the given folder");
  }
} catch (err) {
  console.error(err);
}
[10:05, 6/12/2023] Mo_Hassan: var x = 1;
	function hello(){
		x = 10;
		return;
		function x(){};
	}
	hello();
	console.log(x);
[10:05, 6/12/2023] Sajid Ali Khan Si: const fs = require("fs");
try {
  const stats = fs.statSync("input.txt");
  console.log(stats.isFile()); // true
  console.log(stats.isDirectory()); // false
  console.log(stats.isSymbolicLink()); // false
  console.log(stats.size / 1000); // 1024000 //= 1MB
} catch (err) {
  console.error(err);
}

*/



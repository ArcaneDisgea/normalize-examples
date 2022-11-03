const fs = require('fs');

async function read() {
	const text = await fs.readFileSync(__dirname + '/input.txt', { encoding: 'utf8' });
	const textArray = text.split('\n')
	for (const line of textArray) {
		fs.appendFileSync(__dirname + '/nfd.txt', `${line}\n${line.normalize('NFD')}\n\n`, { encoding: "utf8" })
		fs.appendFileSync(__dirname + '/nfc.txt', `${line}\n${line.normalize('NFC')}\n\n`, { encoding: "utf8" })
		fs.appendFileSync(__dirname + '/nfkd.txt', `${line}\n${line.normalize('NFKD')}\n\n`, { encoding: "utf8" })
		fs.appendFileSync(__dirname + '/nfkc.txt', `${line}\n${line.normalize('NFKC')}\n\n`, { encoding: "utf8" })
	}
	console.log("Done");
}

read();
const unrar = require("node-unrar-js"),
      fs = require("fs")

function checker(path) {
   const buf = Uint8Array.from(fs.readFileSync(path)).buffer;
   return (password) => {
        const extractor = unrar.createExtractorFromData(buf, password);
        var list = extractor.getFileList();
        if (list[0].state === "SUCCESS") {
            console.log(list);
            console.log(extractor);
        }
   }
}

module.exports = {
    checker
}

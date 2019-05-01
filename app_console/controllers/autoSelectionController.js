const rarManager = require("../managers/rarManager"),
      selectionManager     = require("../managers/selectionManager");

/**
 * node console --section autoSelection --action rar
 * @param {*} opt 
 */
async function rar(opt) {
    const archivePath = opt.path || "./data/test.rar";
    const alphabet = "01";
    const start = 3;
    const end = 3;
    await selectionManager.prepare(archivePath, alphabet);
    console.log(`START FOR ${archivePath}`);

    const startTime = new Date();
    const countChecked = await selectionManager.select(archivePath, rarManager.check2, start, end, alphabet);
    console.log(`COUNT CHECKED: ${countChecked}`);
    console.log(`PROCESS TIME: ${new Date() - startTime}`);
}

async function zip() {
    console.log("Hello .zip");
}

module.exports = {
    rar,
    zip
}
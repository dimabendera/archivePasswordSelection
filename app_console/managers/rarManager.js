const {unrar, list} = require('unrar-promise');

async function check(path, password) {
    try {
        await unrar(path, "./data/res", {password});
        return 1;
    } catch {
        return 0;
    }
}

async function check2(path, password) {
    try {
        await unrar(`./data/tmp/${password[0]}.rar`, "./data/res", {password});
        return 1;
    } catch {
        return 0;
    }
}

module.exports = {
    check,
    check
}

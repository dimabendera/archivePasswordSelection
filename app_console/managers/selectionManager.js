const rarManager = require("../managers/rarManager"),
     path = require('path'),
      fs = require("fs");

async function doSelection(  checker,  
                        path     =  "./data/test.rar",
                        start    = 4, 
                        end      = 4, 
                        alphabet = "01",
                        password = "") {
    let COUNTER = 0;
    console.log(checker);
    const selector = checker(path);
    await (async function select( path, selector, start, end, alphabet, password) {
        if (password.length < end) { 
            const promiseArr = [];
            for (const item of alphabet) {
                const new_pswd = password + item
                if (new_pswd.length >= start) {
                        console.log(new_pswd);
                        const res = await selector(new_pswd);
                    if (res) {
                        console.log(`PASSWORD: ${new_pswd}`);
                        break;
                    }
                }
                promiseArr.push(select(path, selector, start, end, alphabet, new_pswd));
            }
            if (promiseArr.length) {
                await Promise.all(promiseArr);
            }
        }
    })(path, selector, start, end, alphabet, password);
    return COUNTER;
}

async function prepare(path, alphabet="01") {
    const ext = "rar";
    for (const item of alphabet) {
        for (const item2 of alphabet) {
            fs.copyFileSync(path, `./data/tmp/${item}${item2}.${ext}`);
        }
    }
}

module.exports = {doSelection, prepare};
const openurl = require("openurl");

module.exports = () => {
    return new Promise((resolve, reject) => {
        openurl.open("raycast://confetti", (err) => {
            if (err) resolve(false);
            else resolve(true);
        });
    });
};
const openurl = require("openurl");

module.exports = () => {
    try {
        openurl.open("raycast://confetti");
        return true;
    } catch (err) {
        return false;
    }
};
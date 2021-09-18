const redis = require("redis");
const manipulateList = require("./manipulate-list");
const allowList = redis.createClient({ prefix: "allowlist-refresh-token:" });
module.exports = manipulateList(allowList);

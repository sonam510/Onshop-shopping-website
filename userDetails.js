const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        userName: String,
        email: String,
        password: String,
    }
);

module.exports = mongoose.model("users", userSchema);
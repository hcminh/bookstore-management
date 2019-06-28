module.exports = {
    PORT: "3000",
    SECRET: "Express_Nodejs_Template_secret",
    DATA_COLLECTION: "Express_Nodejs_Template",
    SESSION: {
        name: 'session_Express_Nodejs_Template',
        proxy: true,
        resave: true,
        secret: "session_Express_Nodejs_Template.secrect", // session secret
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false /*Use 'true' without setting up HTTPS will result in redirect errors*/,
        }
    },
    DEBUG: {
        server: "Express_Nodejs_Template"
    }
}
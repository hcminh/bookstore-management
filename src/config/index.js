module.exports = {
    PORT: "3000",
    DATA_COLLECTION: "Bookstore_Management",
    SESSION: {
        name: 'session_Bookstore_Management',
        proxy: true,
        resave: true,
        secret: "session_Bookstore_Management.secrect", // session secret
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false /*Use 'true' without setting up HTTPS will result in redirect errors*/,
        }
    },
    DEBUG: {
        server: "Bookstore_Management"
    }
}
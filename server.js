const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy example
app.use(
    "/proxy",
    createProxyMiddleware({
        target: "https://browse.therealsnubby.com",
        changeOrigin: true,
        pathRewrite: {
            "^/proxy": "",
        },
    })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Proxy running on port", PORT);
});
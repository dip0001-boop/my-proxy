const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy example
app.use(
    "/proxy",
    createProxyMiddleware({
        target: "https://example.com",
        changeOrigin: true,
        pathRewrite: {
            "^/proxy": "",
        },
    })
);

app.listen(3000, () => {
    console.log("Proxy running on http://localhost:3000");
})
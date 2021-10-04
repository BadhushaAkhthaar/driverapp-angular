const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");
const app = express();
const port = process.env.PORT || 4300;
app
  .use(express.static(path.join(__dirname, "dist", "driver")))
  .use(
    "/odata",
    createProxyMiddleware({
      target: "http://vm2110.sapls.local:8000/",
      changeOrigin: true,
      pathRewrite: {
        "^/odata/driver": "/sap/opu/odata/sap/ZTMDRIROOT_C_CDS/ZTMDRIROOT_C",
      },
    })
  )
  .all("/*", (req, res) => {
    res
      .set({ "content-type": "text/html; charset=utf-8" })
      .sendFile(__dirname + "/dist/driver/index.html");
  });
  
app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`);
});

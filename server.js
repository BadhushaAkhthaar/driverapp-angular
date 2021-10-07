const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");
const app = express();
const port = process.env.PORT || 4300;
function pathRewriteFn(path,req){
  const basePath = "/sap/opu/odata/sap/ZTMDRIROOT_C_CDS/ZTMDRIROOT_C";
  console.log(path);
  return path.replace("/odata/driver/ZTMDRIROOT_C",basePath);
}
app
  .use(express.static(path.join(__dirname, "dist", "driver")))
  .use(
    "/odata/driver/ZTMDRIROOT_C*",
    createProxyMiddleware({
      target: "http://vm2110.sapls.local:8000/",
      changeOrigin: true,
      pathRewrite: pathRewriteFn,
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

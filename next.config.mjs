/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Here you may add your source(s) using a regular expression.
        source: "<your-source-url(s)>",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          // Here you add your whitelisted origin
          // { key: "Access-Control-Allow-Origin", value: "<your-origin>" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};

export default nextConfig;

module.exports = {
    apps : [
        {
          name: "lovogorden-no",
          script: "./app.js",
          watch: true,
          env: {
              "PORT": 5000,
              "NODE_ENV": "dev"
          },
          env_prod: {
              "PORT": 5000,
              "NODE_ENV": "prod",
          }
        }
    ]
  }
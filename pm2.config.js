module.exports = {
    apps : [
        {
          name: "lovogorden-no",
          script: "./app.js",
          watch: true,
          env: {
              "PORT": 4000,
              "NODE_ENV": "dev"
          },
          env_prod: {
              "PORT": 4000,
              "NODE_ENV": "prod",
          }
        }
    ]
  }
# git
git fetch origin
git checkout master
git merge origin/master

## git - get node branch
git pull origin node

# Install
npm i

# Run
npm start

# certbot (doesnt work one hour after dns change)
certbot certonly --dry-run
certbot --nginx certonly --dry-run
certbot

certbot --authenticator standalone
certbot certonly --standalone

# pm2
pm2 start app.js -i 0 --name "lovogorden-no"
pm2 restart lovogorden-no
pm2 stop lovogorden-no

# Log
pm2 logs
pm2 logs api

# list all
pm2 status

# kill
pm2 kill lovogorden-no

# delete 
pm2 delete lovogorden-no

# config
pm2 start pm2.config --env dev
pm2 start pm2.config --env prod
# git
git fetch origin
git checkout master
git merge origin/master

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
pm2 start app.js -i 0 --name "advhasle-no"
pm2 restart advhasle-no
pm2 stop advhasle-no


# Log
pm2 logs
pm2 logs api

# list all
pm2 status

# kill
pm2 kill advhasle-no

# delete 
pm2 delete advhasle-no


# config
pm2 start app.pm2.config.js --env dev
pm2 start app.pm2.config.js --env prod
npm install

timeout 10 node app.js

if [ "$?" = "124" ]; then
	exit 1
else
	exit 0
fi

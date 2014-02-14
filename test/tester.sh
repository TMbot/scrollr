timeout 5 node app.js

if [ "$?" = "124" ]; then
	exit 1
else
	exit 0
fi

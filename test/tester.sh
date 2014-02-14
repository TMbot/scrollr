timeout 5 node app.js

if [ "$?" = "124" ]; then
	exit 0
else
	exit 1
fi

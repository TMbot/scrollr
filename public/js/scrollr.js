(function (io) {

	var socket = io.connect('http://142.4.215.62:80');
	socket.on('test', function (data) {
		console.log(data);
	});

})(io);
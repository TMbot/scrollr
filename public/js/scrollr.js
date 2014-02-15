(function (io) {

	var socket = io.connect('http://142.4.215.62:80');
	socket.on('test', function (data) {
		console.log(data);
	});

})(io);

$(function () {
	$('.chat-expand').on('click', function (e) {
		var $body = $('.chat-body');
		var $expand = $('.chat-expand');
		if ($body.css('display') === 'none') {
			$body.slideDown();
			$expand.html('&#9660;');
		} else {
			$body.slideUp();
			$expand.html('&#9650;');
		}
	});
});
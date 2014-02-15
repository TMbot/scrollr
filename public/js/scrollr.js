(function (io) {

	var socket = io.connect('http://scrollr.subd.in:80');
	socket.on('test', function (data) {
		console.log(data);
	});

})(io);

$(function () {
	$('.chat-expand').on('click', function (e) {
		var $chat = $('.chat');
		var $expand = $('.chat-expand');
		if ($chat.css('margin-bottom') === '-384px') {
			$chat.css('margin-bottom', '0');
			$expand.html('&#9660;');
		} else {
			$chat.css('margin-bottom', '-384px');
			$expand.html('&#9650;');
		}
	});
});
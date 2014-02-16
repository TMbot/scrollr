(function (io) {

	var socket = io.connect('http://scrollr.subd.in:80');
	socket.on('output', function (data) {
		if (data.length) {
			for (var i = 0; i < data.length; i++) {

				$('.chat-message')
					.append('<span>' + data.name + ':</span> ' + data.message + '<br>');

			}
		}
	});

	$('.chat textarea').on('keydown', function (e) {
		var name = $('.chat-name').val();
		var self = this;

		if (e.which === 13 && e.shiftKey === false) {
			socket.emit('input', { "name": name, "message": self.val() });
			e.preventDefault();
		}
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
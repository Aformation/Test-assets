ffmpeg('/path/to/video.avi')
	.on('filenames', function (filenames) {
		console.log('Will generate ' + filenames.join(', '));
	})
	.on('end', function () {
		console.log('Screenshots taken');
	})
	.screenshots({
		// Will take screens at 20%, 40%, 60% and 80% of the video
		count: 4,
		folder: '/path/to/output',
	});

ffmpeg('/path/to/video.avi').screenshots({
	timestamps: [30.5, '50%', '01:10.123'],
	filename: 'thumbnail-at-%s-seconds.png',
	folder: '/path/to/output',
	size: '320x240',
});

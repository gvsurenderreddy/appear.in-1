const Config = require('electron-config');

module.exports = new Config({
	defaults: {
		lastWindowState: {
      x: 0,
      y: 0,
			width: 1280,
			height: 720
		}
	}
});

const { Plugin } = require('@vizality/entities');
const activity = require('./src/activity');

module.exports = class PreMID extends Plugin {
	start() { activity.init() }

	stop() { activity.destroy(); }
};
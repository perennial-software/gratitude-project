var hasStorage = (() => {
	try {
		localSorage.setItem(test,test);
		localSorage.removeItem(test);
		return true;
	} catch (exception) {
		return false;
	}
})

exports.hasStorage = hasStorage;
var standardPageTypes = {
	'event': /^(19|20)[0-9]{2}\//
};

var resolveUrl = function(urlFragment) {
	return (/^http:\/\//).test(urlFragment) ? urlFragment : 'http://lanyrd.com/' + urlFragment.replace(/^\//, '');
};

var shortenUrl = function(url) {
	return url.replace(/^(http:\/\/.*?)?\//, '');
};

var resolvePageType = function(url, types) {
	url = resolveUrl(url);
	types = types || standardPageTypes;
	
	var matches = Object.keys(types).filter(function(type) {
		var urlRegExp = types[type];
		return urlRegExp.test(url);
	});

	return matches.length ? matches[0] : null;
};

module.exports = {
	resolveUrl: resolveUrl,
	shortenUrl: shortenUrl,
	resolvePageType: resolvePageType
};
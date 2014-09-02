var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-327124-1']);
_gaq.push(['_setDomainName', 'thecrimson.com']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
	var gads = document.createElement('script');
	gads.async = true;
	gads.type = 'text/javascript';
	var useSSL = 'https:' == document.location.protocol;
	gads.src = (useSSL ? 'https:' : 'http:') + 
	'//www.googletagservices.com/tag/js/gpt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(gads, node);
})();

googletag.cmd.push(function() {
	googletag.defineSlot('/1046082/TheCrimson_AllArticles_ATF_728x90', [728, 90], 'TheCrimson_AllArticles_ATF_728x90').addService(googletag.pubads());
	googletag.defineSlot('/1046082/TheCrimson_AllArticles_BTF_728x90', [728, 90], 'TheCrimson_AllArticles_BTF_728x90').addService(googletag.pubads());
	googletag.defineSlot('/1046082/TheCrimson_AllArticles_ATF_300x250', [300, 250], 'TheCrimson_AllArticles_ATF_300x250').addService(googletag.pubads());
	googletag.defineSlot('/1046082/TheCrimson_AllArticles_BTF_300x250', [300, 250], 'TheCrimson_AllArticles_BTF_300x250').addService(googletag.pubads());
	googletag.pubads().enableSingleRequest();
	googletag.enableServices();
});

addthis.layers({
	'theme' : 'transparent',
	'share' : {
	  'position' : 'right',
	  'numPreferredServices' : 5
	}
});
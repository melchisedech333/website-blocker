
(function() {
	console.log("Yaew, Yet Another Extension to block Websites - Iesus s2")

	var blacklist = get_blacklist()
	var messages  = get_messages()
	var url       = window.location.href.toString().trim()
    
	for (var a=0; a<blacklist.length; a++) {
		if (url.indexOf(blacklist[a]) != -1) {

			var item    = Math.floor(Math.random() * (messages.length - 1))
			var message = messages[item]

			document.body.innerHTML = message
			break
		}
	}
})()

function get_blacklist () {
	return [
		'site1.com',
		'site2.com',
		'siteN.com'
	]
}

function get_messages () {
	return [
		'Site blocked!',
		'Sorry, site blocked'
	]
}



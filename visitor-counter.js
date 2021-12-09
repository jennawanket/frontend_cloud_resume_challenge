function visitorCounter(){
	fetch("https://fhg8g0gwd1.execute-api.us-east-2.amazonaws.com/visitorCounter")
		.then(response => response.text())
		.then((body) => {
			document.getElementById("visitor-counter").innerHTML=body
		})
}
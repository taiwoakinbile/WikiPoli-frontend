auth_token = "wikipoli_auth_token";

let data = 
{
	name: "Johnson",
	email: "jaycodist@gmail.com",
	password: "devlin"
}
fetch("http://wikipoli.gq/WikiPoli-backend/Api/signup.php",
{
	method: 'POST',
	headers: 
	{
	  'Content-Type': 'application/json',
	  'Origin': 'wiki-client',
	  'Authorization': 'Bearer ' + (localStorage.getItem(auth_token) || '')
	},
	body: JSON.stringify(data)
})
.then(data => data.json()).then(json => alert(json));
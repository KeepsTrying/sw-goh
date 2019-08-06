function getAuthToken(username, password, grant_type) {
    body = "username=" + username
    body += "&password=" + password + "&grant_type=" + grant_type
    body += "&client_id=" + username
    body += "&client_secret=" + password
    
    $.ajax({
        type:"POST",
        url: "http://api.swgoh.help/auth/signin/",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body,
        
        success: function(response){
            return response.access_token
        },
        error: function(error){
            // display error and exit?
            console.log(`error ${error}`);
        }
    })
}

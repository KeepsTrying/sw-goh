$(document.readyState(function() {
    
    $("button").on('click', function(allyCodes){
        // validate field information is correct

        // display requesting...

        $.each(allyCodes, function(index, ac) {

            $.ajax({
                type:"GET",
                url: "https://swgoh.gg/api/player/" + ac,
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "authorization": "\\" + username + "\\" + authToken
                },

                success: function(result){
                    // do work on result
                    $("#div1").html(result);
                },
                error: function(error){
                    // display error
                    console.log(`error ${error}`);
                }
            })

        })

    })

}))

$("login").on('click', function() {
    var user = $('username').text();
    var password = $('password').text();
    var grant_type = 'password'

    getAuthToken( user, password, grant_type)
})
  var PostRoster = [];














var randomUserId = Math.floor((Math.random() * 15) +1);


// console.log(randomUserId);



//document will be ready after random button on member.html has been clicked
//therefore the following code will be anonymous 

//do a math random for the users 




$.get("/api/articleAll/", function(data) {
  console.log(data);



for (var a = 0; a < 5; a++){

// var randoPost = data[t].link;
// var randoPost2 = data[t+1].link;
// console.log(randoPost);
// console.log(randoPost2);
 
  PostRoster.push(data[a].link);


console.log(PostRoster);
return PostRoster;

};

console.log(PostRoster);






var Viewer = $("<div>");
Viewer.addClass("post-viewer");

var userSearch = data[t].link;
                         Viewer.append(data[t].link);
                         // Viewer.append(PostRoster[i]);
                            // console.log("User search: " + userSearch);

                            var apiKey = "07ee4686e047984c7bb492";
                            var URL = "http://iframe.ly/api/oembed?url=" + userSearch + "&api_key=" + apiKey
                                //var URL = "http://iframe.ly/api/iframely?url=" + userSearch + "&api_key=" + apiKey
                            $.ajax({
                                url: URL,
                                method: 'GET'
                            }).done(function(response) {
                                // console.log(response);
                                //var code = replace("//cdn", "http//:");
                                // console.log(response.html);
                                Viewer.append(response.html);

                            });


$("#post-well").append(Viewer);


















// if( data === undefined || data ===null ){
//   console.log("no"); } else{



 
//   }



  






// console.log(PostRoster);


//loading them with divs from PostRoster


































})













//then pass into the get posts function 















































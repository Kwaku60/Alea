


// $(document).ready(function() {
$("#random-user").on("click", function(){


window.location.href = "/randomUser";

});
	



















var randomUserId = Math.floor((Math.random() * 15) +1);


console.log(randomUserId);



//document will be ready after random button on member.html has been clicked
//therefore the following code will be anonymous 

//do a math random for the users 


$.get("/api/random/" + randomUserId, function(data) {
                   
                        if(data == null){

                        	alert("We don't have many users to sort through, try the button again");
                        }
                        console.log(data.email);
                    
//                         for (var i = 0; i < posts.length; i++) {

 $("#member-name").text(data.email);
getPosts(data.email);
getArticles(data.email);



function getArticles(user){

  data.email = user;
$.get("/api/article/" + data.email, function(data) {



console.log(data);

for(var a = 0; a< data.length; a++){


var link = data[a].link


                            var apiKey = "07ee4686e047984c7bb492";
                            var URL = "http://iframe.ly/api/oembed?url=" + link + "&api_key=" + apiKey
                                //var URL = "http://iframe.ly/api/iframely?url=" + userSearch + "&api_key=" + apiKey
                            $.ajax({
                                url: URL,
                                method: 'GET'
                            }).done(function(response) {
                     
                                //var code = replace("//cdn", "http//:");
                                // console.log(response.html);
                                var thumb = $("<div>");
                                
                                thumb.addClass("thumb");
                                thumb.append(response.html);
                         
                                $("#article-well").append(thumb);
                  
                  

                            });






}











//end of article get request 

})


















//end of getArticles function

}










function getPosts(user) {
                data.email = user;
                console.log("made it to getPostsRandom function!");


                $.get("/api/posts/" + data.email, function(data) {
                        console.log("Posts", data);
// loop start

for(var c = 0; c< data.length; c++ ){
                    var PostBody =  data[c].body; 
                    console.log(PostBody);



   getComments(PostBody);

   //end of loop

}















function getComments(PostBody){


// alert(CommentedPostText);



                $.get("/api/comments/" + PostBody, function(data) {
                 
                  console.log(PostBody);
                         console.log(data);
                        // alert("Grabbing comments");
                        
                        for (var i = 0; i < data.length; i++) {
               

                         

      
                console.log(data);





        //    8.) create div for comments

               var replies = $("<div>"); 
               replies.addClass("replies-container");

        //    9.) creat a p or alternatively create an li 
              var p = $("<div>");
              p.addClass("response-post")
              var ptwo = $("<div>");
              ptwo.addClass("response-user")
              var pthree = $("<div>");
              pthree.addClass = $("response-comment");
              

//create container
                 var replyContain = $("<div>");
                replyContain.addClass("replies-parent-container");
               

        //    10.) append p to div for comments 
              replies.append(p);
              replies.append(ptwo);
              replies.append(pthree);
              // getElementById("reply-contain" + m);
              replyContain.append(replies);
 

        //    11.) append current comment username to p

              // p.append("Original Post:  " + data[m].body );
          

        //    12.) append current comment to p
              ptwo.append(data[i].userEmail);
            

              pthree.append(data[i].comment);


   
//grab the relevant comment area
//     var relevantCommentArea = document.getElementById("c" + postLoopPosition);
//     console.log(postLoopPosition);
// console.log(relevantCommentArea);
        //    13.) append  div for comments to postwell
             
// 
              // if ( data[m].body = data[m + 1].body || !data[m-1].body)



              // {


  $("#comment-well").append(replyContain);





//               } else{

// var replyContainNext = $("<div>");
//    replyContainNext.addClass("reply-parent-container2");


//               }




//end of get comments request
 















//                               // var speaker = data[i].userEmail;
//                               // // var words = data[i].comment;
//                               // console.log(speaker);
//                               // console.log(words);
//                                 var line = document.createElement("div");
//                                 line.setAttribute("class", "line");
//                                 var lineText = document.createElement("div");
//                                 lineText.setAttribute("class", "line-text");
//                               // var speakerContainer = $("<p>");
//                               // var wordsContainer = $("<div>");
//                               // wordsContainer.addClass("words-container");
//                               // speakerContainer.append(speaker);
//                               // wordsContainer.append(words);
//                               // AltCommentSpace.append(speakerContainer);
//                               // AltCommentSpace.append(wordsContainer);
// var AltCommentSpace = document.getElementById(i);
//  AltCommentSpace.setAttribute( "class", "alt-comment-space");
// console.log(AltCommentSpace);
//                             AltCommentSpace.appendChild(line);
//                             AltCommentSpace.appendChild(lineText);
//                                   line.append(data[i].userEmail);
//                                   lineText.append(data[i].comment);

//                               console.log("appended previous comments!");
                        

};




});
              }
































                  

for (var i = 0; i < data.length; i++) {




  var commentContainer = $("<div>");
                            var commentDisplay = $("<div>");

                            //kwaku changes Teusday
                            //deleted line with "<textarea>" code
                            //added unique id to submit button


                            commentDisplay.addClass("comment-display");
                            var TextArea = document.createElement("textarea");
                            TextArea.id = i;
                            TextArea.setAttribute("class", "comment-input-general");
                            
                            var submit = document.createElement("button");
                          
                            
                           


                            submit.setAttribute("type", "submit");
                           
                            submit.id = i;
                              
                      
                            submit.setAttribute("class", "btn btn-primary reply-button");
                          
                            // submit.appendChild(document.createTextNode("reply"));

                            var formDiv = document.createElement("div");
                            formDiv.setAttribute("class", "form-div");
                            formDiv.append(TextArea);
                            formDiv.append(submit);

var form = document.createElement("form");
                            form.setAttribute("class", "reply-submit");
                            form.id = submit.id;

                            form.appendChild(formDiv);
                           

                            commentDisplay.append(form);
                           

 var postViewer = $("<div>");
                            postViewer.text(data[i].body);
                            postViewer.addClass("post-viewer");
                            postViewer.attr("id","" + i + "" ); 


                            commentContainer.append(commentDisplay);
                            postViewer.append(commentContainer);
                            $("#post-well").prepend(postViewer);











}




                          







function getComments2(commentParentPost){

  commentParentPost = CommentedPostText;

// alert(CommentedPostText);



                $.get("/api/comments/" + CommentedPostText, function(data) {
                         console.log(data);
                        alert("Grabbing comments");
                        comments = data;
                        for (var i = 0; i < data.length; i++) {
               
                           
                         
                              // var speaker = data[i].userEmail;
                              // // var words = data[i].comment;
                              // console.log(speaker);
                              // console.log(words);
                                var line = document.createElement("div");
                                line.setAttribute("class", "line");
                                var lineText = document.createElement("div");
                                lineText.setAttribute("class", "line-text");
                              // var speakerContainer = $("<p>");
                              // var wordsContainer = $("<div>");
                              // wordsContainer.addClass("words-container");
                              // speakerContainer.append(speaker);
                              // wordsContainer.append(words);
                              // AltCommentSpace.append(speakerContainer);
                              // AltCommentSpace.append(wordsContainer);
var AltCommentSpace = document.getElementById(match);
 AltCommentSpace.setAttribute( "class", "alt-comment-space");
console.log(AltCommentSpace);
                            AltCommentSpace.appendChild(line);
                            AltCommentSpace.appendChild(lineText);
                                  line.append(data[i].userEmail);
                                  lineText.append(data[i].comment);

                              console.log("appended previous comments!");
                              getComments(CommentedPostText);

};




});
              }














// $(cmsForm).on("submit", handleFormSubmit);

//  function handleFormSubmit(event) {
//           event.preventDefault();


//           // Wont submit the post if we are missing a body or userName
//           if (!bodyInput.val().trim()) {
//               return;
//           }
// }
  
$(".reply-submit").on("submit", handleCommentSubmit );


function handleCommentSubmit(event){
   event.preventDefault();


 var match = this.id;

      
     var textboxContent =  document.getElementById(match);
     console.log(textboxContent);
     var commentText = textboxContent.getElementsByTagName("textarea");
     console.log(commentText);
        var comment = commentText[0].value;
        console.log(comment);


 var CommentedPost=  document.getElementById(match);
     console.log(CommentedPost);
     var CommentedPostText = CommentedPost.firstChild.nodeValue;
     console.log(CommentedPostText);

     // var commentPostTrim = CommentedPostText.substring(0, CommentedPostText.indexOf("r"));
     //    console.log(commentTrim);
        //store commentPostTrim as the value in the comment object some lines below.
        //issue is if a user has an "r" in their post body, this function would trim out the "reply"
//button text, but if it see's an r befrehand- it will trim out the rest. best to keep button blank for 
//now so there is nothing needed to trim 






// run a get request here to get the current user. and store their name as the user Email :)

$.get("/api/user_data").then(function(data) {
    
// alert("c");

      console.log(data.email);

      var userEmail = data.email 




      var newComment = {


              comment: comment,
                
              userEmail: userEmail,

              body: CommentedPostText,

              email: 1,

              PostId: 1,




        };


                   console.log(CommentedPostText);



   // getComments(CommentedPostText);

   //end of loop





//needs to grab the user who is logged in


function submitComment(comment) {
            $.post("/api/comments", comment, function(event) {
          
                // window.location.href = "/members";
              
            });
        }



submitComment(newComment);





})

}




          // console.log(userName);

          // Constructing a newPost object to hand to the database
          // var newPost = {
          //     body: bodyInput
          //         .val()
          //         .trim(),

          //     UserId: 1,

          //     userEmail: userName,



          // };

          // console.log(newPost);
          // submitPost(newPost);
      



        // Submits a new post and brings user to blog page upon completion
        function submitPost(post) {
            $.post("/api/posts", post, function() {
                // window.location.href = "/members";
            });
        }


























	var userSearch = data[i].body;
                         
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
                                postViewer.append(response.html);
                            });




//repply submit must be connected to creating and posting comments, 
  // $(".reply-submit").on("submit",handleCommentSubmit);
});

 // //grab random  user from database and then pass that into the get posts. past the posts
 // into the get comments

//get posts

//load posts

//get comments


//load comments

//load reply onclicks
 
};


     });


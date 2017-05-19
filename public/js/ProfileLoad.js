// empty global variables

var postLoopPosition;
var currentPostBodies = [];
var formid;
var associated = 0;

// other variables
 var cmsForm = $("#cms");
var bodyInput = $("#body");
var bodyInput2 = $("#body2");


// onClick to access newsFeedx
$("#feed").on("click", function(){


window.location.href = "/newsFeed";


})


//onClick to logout
$("#sign-out").on("click", function(){


window.location.href = "/logout";


})



// 1.) onClick to go to random user route
$("#random-user").on("click", function() {
    window.location.href = "/randomUser";
});





//
// 2.) Larger function LOAD PROFILE

function LoadProfile() {



    
     // 3.) get user data 
    $.get("/api/user_data").then(function(data) {

//storing username
        var userName = data.email;
         $(".member-name").text(userName);





         //4.) pass user email to posts table
        $.get("/api/posts/" + userName, function(data) {

        	//storing array of posts
        	   var PostBatch =  data; 

// 5.) loop through each post
        	   for (var i = 0; i< PostBatch.length; i++){


 // 		store the postBatch position in a variable 
        	   	postLoopPosition = i;


  // 		 store post body as variable by assigning new value to currentPostBody
        	   	currentPostBodies.push(PostBatch[i].body);






//use api incase article









    	// 	3.) create a div  and giv this div an id of postLoopPosition
  				var HoldPost = document.createElement("div");
  				HoldPost.setAttribute("class", "hold-post");
          HoldPost.id = "hold-p" + postLoopPosition;

        //  4.) append the current post body to it. currentPostBody
        		// HoldPost.append(PostBatch[i].body);


var userSearch = PostBatch[i].body;
                         
                            // console.log("User search: " + userSearch);
 HoldPost.append(userSearch);
                            var apiKey = "07ee4686e047984c7bb492";
                            var URL = "http://iframe.ly/api/oembed?url=" + userSearch + "&api_key=" + apiKey
                                //var URL = "http://iframe.ly/api/iframely?url=" + userSearch + "&api_key=" + apiKey
                            $.ajax({
                                url: URL,
                                method: 'GET'
                            }).done(function(response) {
                     
                                //var code = replace("//cdn", "http//:");
                                // console.log(response.html);
                                var thumb = $("<div>");
                                // HoldPost.append(thumb);
                                thumb.addClass("thumb");
                                thumb.append(response.html);
                         
                                $("#post-well").append(thumb);
                                $("#post-well").append(form);
                            


                            });




    console.log("b");
        // 	5.) append this div to postWell
        		$("#post-well").append(HoldPost);

        // 		6.) create form and button with id postLoopPosition. 
        				//creating text area
 				var TextArea = document.createElement("textarea");
                TextArea.id = postLoopPosition;
                TextArea.setAttribute("class", "comment-input-general"); 

                //creating reply button to submit comments in textbox                       
                var submit = document.createElement("button");
                submit.setAttribute("type", "submit");  
                         submit.id = postLoopPosition;
                submit.setAttribute("class", "btn btn-primary reply-button");

                //creating div to hold form           
          	    var formDiv = document.createElement("div");
                formDiv.setAttribute("class", "form-div-test");
                formDiv.append(TextArea);
                formDiv.append(submit);
    console.log("d");
                //creating form 
                var form = document.createElement("form");
                form.setAttribute("class", "reply-submit");
                form.id = postLoopPosition;

               	//apending form to div to hold it 
                form.appendChild(formDiv);
                           
                //appending form div with contents to post well
                $("#post-well").append(form);
             

                //create a div to hold comments. later when we loop through the comments
                // the moment we realize we've reached the last comment with the post, we will add 1 to
                //the counter and will grab the reply-contain + [counterAmt] and append the replies there.
                // $("#comment-well").append(replyContain);

    console.log("e");

                // var commentArea = document.createElement("div");
                // commentArea.setAttribute("class", "comment-hold-container");
                // commentArea.addClass("comment-area");
          
                // commentArea.id = "c" + postLoopPosition; 
        
                
                // $("#post-well").append(commentArea);

         //get commments
//post loop ending here
//solution- create a div that appends after post. Append the comments to this already creatediv
console.log(currentPostBodies);
         		// 7.) pass the currentPostBody to get comments route	
//[end of looping through larger loop = posts
             }
           
           for( var z=0; z<currentPostBodies.length; z++){
 
            // var currentPostBody = currentPostBodies[z];


//think its stopping the loop at this get request

$.get("/api/comments/" + currentPostBodies[z], function(data) { 
// alert("running2");


              //make sure this is the comment data, not the post data 
              console.log(data);
              var associatedComments = data;

            //don't worry about empty array. there will be a textbox generated to separate posts



  //    [new loop with new letter

        //    7.) loop through the comments received

              for(var m = 0; m < associatedComments.length; m++){
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
       var referenceFull = data[m].body;
       var referenceTrim = referenceFull.slice(0,25) + "...";

              p.append("Re: " + referenceTrim);
              ptwo.append(data[m].userEmail);
            

              pthree.append(data[m].comment);


   
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

        //    [end of new loop with new letter]
              }


//end of get comments request
            })

              
 







           }

         		
//creating a post


//articles

// create a new article post









//when user clicks on post
$(cmsForm).on("submit", handleFormSubmit);

 function handleFormSubmit(event) {
          event.preventDefault();









          // Wont submit the post if we are missing a body or userName
          if (!bodyInput.val().trim()) {
              return;
          }

// Constructing a newPost object to hand to the database
          var newPost = {
              body: bodyInput
                  .val()
                  .trim(),

              UserId: 1,

              userEmail: userName,



          };


 function submitPost(post) {
            $.post("/api/posts", post, function(){
                window.location.href = "/members";
            });
        }
          // console.log(newPost);
          submitPost(newPost);








}






///comment what you're doing here




//creating  a comment
      
$(".reply-submit").on("submit", handleCommentSubmit );


function handleCommentSubmit(event){
   event.preventDefault();


 var match = this.id;
 console.log(match);

      
     var textboxContent =  document.getElementById(match);
     console.log(textboxContent);
     var commentText = textboxContent.getElementsByTagName("textarea");
     console.log(commentText);
        var comment = commentText[0].value;
        console.log(comment);
console.log("hold-p" + match);

 var CommentedPost=  document.getElementById("hold-p" + match);
     console.log(CommentedPost);
     var CommentedPostText = CommentedPost.firstChild.nodeValue;
     console.log(CommentedPostText);

     
    
$.get("/api/user_data").then(function(data) {
    
// alert("c");

      console.log(data.email);

      var userEmail = data.email 




      var newComment = {


              comment: comment,
                
              userEmail: data.email,

              body: CommentedPostText,

              email: 1,

              PostId: 1,




        };







   // getComments(CommentedPostText);

   //end of loop





//needs to grab the user who is logged in






submitComment(newComment);





})

}


function submitComment(comment) {
            $.post("/api/comments", comment, function(event) {
          
                window.location.href = "/members";
              
            });
        }















//end of get posts function
        })




$("#cms2").on("submit", handleArticleFormSubmit);

 function handleArticleFormSubmit(event) {
          event.preventDefault();









          // Wont submit the post if we are missing a body or userName
          if (!bodyInput2.val().trim()) {
              return;
          }

// Constructing a newPost object to hand to the database
          var newArticle = {
              link: bodyInput2
                  .val()
                  .trim(),

    

              userEmail: userName,



          };

console.log(newArticle);

 function submitArticle(article) {
            $.post("/api/article", article, function(){
                window.location.href = "/members";
            });
        }
          // console.log(newPost);
          submitArticle(newArticle);








}



//load articles




$.get("/api/article/" + userName, function(data) {



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













  //end of get user data request
      
    })









    // end of load function
}

//calling load function	
LoadProfile();

// //////// 


// 	CONSIDER STORING POSTING TO DATABASE FUNCTIONS SEPARATELY AND CALLING THEM HERE. COPY AND PASTE WORKING CODE

// 15.) Post submission on submit function 
// 		15.5 this.id will be the id of the submission form
// 		15.6 store this.id by assigning new value to forrmId



// call function



// 16.) Post comment on submit function

// 		16.5

// call it

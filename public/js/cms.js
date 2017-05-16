// $(document).ready(function() {
//     // Getting jQuery references to the post body, title, form, and author select
//     var bodyInput = $("#body");

//     //May 5th Kwaku: we're grabbing the member name that appears on this user's
//     //home page and using it as an id that will be linked with whatever they post
//     //only will work if the member name actually exists with the loaded user email
//     //it should have upon load..
//     var userName = $(".member-name").html();
//     console.log(userName);
//      var cmsForm = $("#cms");

//      $(cmsForm).on("submit", handleFormSubmit);
//   // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
//   var url = window.location.search;
//   var postId;
//   var authorId;
//   // Sets a flag for whether or not we're updating a post to be false initially
//   var updating = false;

//   // If we have this section in our url, we pull out the post id from the url
//   // In '?post_id=1', postId is 1
//   if (url.indexOf("?post_id=") !== -1) {
//     postId = url.split("=")[1];
//     getPostData(postId, "post");
//   }
//   // Otherwise if we have an author_id in our url, preset the author select box to be our Author
//   else if (url.indexOf("?author_id=") !== -1) {
//     authorId = url.split("=")[1];
//   }







//     // A function for handling what happens when the form to create a new post is submitted
//     function handleFormSubmit(event) {
//         event.preventDefault();
        
      
//         // Wont submit the post if we are missing a body or userName
//         if (!bodyInput.val().trim()) {
//             return;
//         }

//         console.log("constructing");

//         console.log(userName);
//         console.log(userName);
//         // Constructing a newPost object to hand to the database
//         var newPost = {
//             body: bodyInput
//                 .val()
//                 .trim(),
//             AuthorId: userName
//         }
//     };



//     // Submits a new post and brings user to blog page upon completion
//     function submitPost(post) {
//         $.post("/api/posts", post, function() {
//             window.location.href = "/members";
//         });
//     }


// });

$("#random-user").on("click", function() {

    alert("running");
    window.location.href = "/randomUser";

});

function handleCommentSubmit(event) {
    event.preventDefault();


}


function createNewRow(post) {

    return newPostPanel;
}

// This file just does a GET request to figure out which user is logged in
// and updates the HTML on the page
$.get("/api/user_data").then(function(data) {
        console.log(data);
        $(".member-name").text(data.email);
        var take = data.email;
        //may 5 kwaku: trying to run the getPosts in here to see if it will load
        //all of the users posts based on their authorID
        getPosts(take);



        var bodyInput = $("#body");

        //May 5th Kwaku: we're grabbing the member name that appears on this user's
        //home page and using it cr an id that will be linked with whatever they post
        //only will work if the member name actually exists with the loaded user email
        //it should have upon load..
        var userName = data.email;
        // console.log(userName);
        var cmsForm = $("#cms");

        $(cmsForm).on("submit", handleFormSubmit);

        // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
        var url = window.location.search;
        var postId;
        var authorId;
        // Sets a flag for whether or not we're updating a post to be false initially
        var updating = false;

        // If we have this section in our url, we pull out the post id from the url
        // In '?post_id=1', postId is 1
        if (url.indexOf("?post_id=") !== -1) {
            postId = url.split("=")[1];
            getPostData(postId, "post");
        }
        // Otherwise if we have an author_id in our url, preset the author select box to be our Author
        else if (url.indexOf("?author_id=") !== -1) {
            authorId = url.split("=")[1];
        }


        // A function for handling what happens when the form to create a new post is submitted
        function handleFormSubmit(event) {
            event.preventDefault();


            // Wont submit the post if we are missing a body or userName
            if (!bodyInput.val().trim()) {
                return;
            }



            // console.log(userName);

            // Constructing a newPost object to hand to the database
            var newPost = {
                body: bodyInput
                    .val()
                    .trim(),

                UserId: 1,

                userEmail: userName,



            };


            // console.log(newPost);
            submitPost(newPost);
        };


    })
    // Submits a new post and brings user to blog page upon completion
function submitPost(post) {
    $.post("/api/posts", post, function() {
        window.location.href = "/members";
    });
}



function getPosts(take) {
    // data.email = author;
    console.log("made it to getPosts function!");


    $.get("/api/posts/" + take, function(data) {
        console.log("Posts", data);
        posts = data;


        for (var i = 0; i < posts.length; i++) {








            var postViewer = $("<div>");
            var thumbnail = $("<div class='api'>");
            postViewer.text(data[i].body);
            postViewer.addClass("post-viewer");
            postViewer.attr("id", "" + i + "");
$("#post-well").prepend(postViewer);








            var commentContainer = $("<div>");
            var commentDisplay = $("<div>");

            //kwaku changes Teusday
            //deleted line with "<textarea>" code
            //added unique id to submit button


            commentDisplay.addClass("comment-display");
            commentContainer.append(commentDisplay);
            postViewer.append(commentContainer);
            postViewer.append(thumbnail);
            
            // console.log(posts[i].body);





            var userSearch = posts[i].body;

            // console.log("User search: " + userSearch);

            var apiKey = "07ee4686e047984c7bb492";
            var URL = "http://iframe.ly/api/oembed?url=" + userSearch + "&api_key=" + apiKey
                //var URL = "http://iframe.ly/api/iframely?url=" + userSearch + "&api_key=" + apiKey
            $.ajax({
                url: URL,
                method: 'GET'
            }).done(function(response) {
                //response.html.attr("id","" + i + "" );
                //console.log(response);
                // console.log(response);
                //var code = replace("//cdn", "http//:");
                // console.log(response.html);
                //for (var )
                postViewer.prepend(response.html);
            })





            for (var c = 0; c < data.length; c++) {
                var PostBody = data[c].body;
                console.log(PostBody);
                var place = c;







      getComments(PostBody);

                function getComments(PostBody) {

                    // commentParentPost = CommentedPostText;

                    // alert(CommentedPostText);



                    $.get("/api/comments/" + PostBody, function(data) {
                        console.log(PostBody);
                        console.log(data);

                        comments = data;
                        for (var j = 0; j < data.length; j++) {



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


                            var AltCommentSpace = document.getElementById(i);
                            AltCommentSpace.setAttribute("class", "alt-comment-space");
                            console.log(AltCommentSpace);
                            AltCommentSpace.appendChild(line);
                            AltCommentSpace.appendChild(lineText);
                            line.append(data[j].userEmail);
                            lineText.append(data[j].comment);

                            console.log("appended previous comments!");

                        };




                    });
                }







          




            }

creation();
creation2();
creation3();

        }

















function creation(){




        var TextArea = document.createElement("textarea");
        TextArea.id = i;
        TextArea.setAttribute("class", "comment-input-general");

        var submit = document.createElement("button");





        submit.setAttribute("type", "submit");

        submit.id = i;


        submit.setAttribute("class", "btn btn-primary reply-button");

        submit.appendChild(document.createTextNode("View Comments or reply"));

        var formDiv = document.createElement("div");
        formDiv.setAttribute("class", "form-div");
        formDiv.append(TextArea);
        formDiv.append(submit);


        var form = document.createElement("form");
        form.setAttribute("class", "reply-submit");
        form.id = submit.id;

        form.appendChild(formDiv);


        commentDisplay.append(form);


        //end of get posts loop




        var match = form.id;

        var textboxContent = document.getElementById(match);
        console.log(textboxContent);
        var commentText = textboxContent.getElementsByTagName("textarea");
        console.log(commentText);
        var comment = commentText[0].value;
        console.log(comment);
        // alert("b");
        var CommentedPost = document.getElementById(match);

        $.get("/api/user_data").then(function(data) {

            // alert("c");

            // console.log(data.email);


            console.log(CommentedPost);

            var CommentedPostText = CommentedPost.firstChild.nodeValue;
            console.log(CommentedPostText);

getComments(CommentedPostText);




            $(".reply-submit").on("submit", handleCommentSubmit);

            var newComment = {


                comment: comment,

                userEmail: data.email,

                body: CommentedPostText,

                email: 1,

                PostId: 1,




            };

            // alert("d");
            var sentBy = data.email;
            var sentByDisplay = $("<div>");
            var sentByNameContainer = $("<div>");
            sentByNameContainer.append(sentBy + ":");
            sentByNameContainer.addClass("sent-by-container");
            sentByDisplay.prepend(sentByNameContainer);
            sentByDisplay.addClass("sent-by-display");

            //***THIS is the issue- SentBYDisplay appending to wrong commentDisplay
            //must grab comment display that is same id as reply button

            // alert(match);
            //we have access to it
            var AltCommentSpace = document.getElementById(match);
            console.log(AltCommentSpace);
            console.log(sentByDisplay);
            AltCommentSpace.setAttribute("class", "alt-comment-space");
            // AltCommentSpace.append(sentBy + ":" + "");
            // AltCommentSpace.append(newComment.comment);

            var sentContent = $("<div>");
            sentContent.addClass("sent-content");
            sentContent.append(comment);
            sentByNameContainer.append(sentContent);






        })


    











}



function creation2(){




        var TextArea = document.createElement("textarea");
        TextArea.id = i;
        TextArea.setAttribute("class", "comment-input-general");

        var submit = document.createElement("button");





        submit.setAttribute("type", "submit");

        submit.id = i;


        submit.setAttribute("class", "btn btn-primary reply-button");

        submit.appendChild(document.createTextNode("View Comments or reply"));

        var formDiv = document.createElement("div");
        formDiv.setAttribute("class", "form-div");
        formDiv.append(TextArea);
        formDiv.append(submit);


        var form = document.createElement("form");
        form.setAttribute("class", "reply-submit");
        form.id = submit.id;

        form.appendChild(formDiv);


        commentDisplay.append(form);


        //end of get posts loop




        var match = form.id;

        var textboxContent = document.getElementById(match);
        console.log(textboxContent);
        var commentText = textboxContent.getElementsByTagName("textarea");
        console.log(commentText);
        var comment = commentText[0].value;
        console.log(comment);
        // alert("b");
        var CommentedPost = document.getElementById(match);

        $.get("/api/user_data").then(function(data) {

            // alert("c");

            // console.log(data.email);


            console.log(CommentedPost);

            var CommentedPostText = CommentedPost.firstChild.nodeValue;
            console.log(CommentedPostText);


            $(".reply-submit").on("submit", handleCommentSubmit);

            var newComment = {


                comment: comment,

                userEmail: data.email,

                body: CommentedPostText,

                email: 1,

                PostId: 1,




            };

            // alert("d");
            var sentBy = data.email;
            var sentByDisplay = $("<div>");
            var sentByNameContainer = $("<div>");
            sentByNameContainer.append(sentBy + ":");
            sentByNameContainer.addClass("sent-by-container");
            sentByDisplay.prepend(sentByNameContainer);
            sentByDisplay.addClass("sent-by-display");

            //***THIS is the issue- SentBYDisplay appending to wrong commentDisplay
            //must grab comment display that is same id as reply button

            // alert(match);
            //we have access to it
            var AltCommentSpace = document.getElementById(match);
            console.log(AltCommentSpace);
            console.log(sentByDisplay);
            AltCommentSpace.setAttribute("class", "alt-comment-space");
            // AltCommentSpace.append(sentBy + ":" + "");
            // AltCommentSpace.append(newComment.comment);

            var sentContent = $("<div>");
            sentContent.addClass("sent-content");
            sentContent.append(comment);
            sentByNameContainer.append(sentContent);






        })


    
}


    //                           $(".reply-button").on("click", function(){

    //                                  console.log("click");




    //                          var content = document.getElementById(match); 

    //                           console.log(match);
    //                           console.log(content);

    //                       //code to call api route to submit comment to db
    //                       //code to find all comments associated with post and load
    //                       //so newest comment will also show

    //                       //note: load all comments associated with posts on page onload
    //                       //just as posts associated with user laod on load

    // });

function creation3(){







// console.log(userName);
//pulling correct id

// alert("e");


function submitComment(comment) {
    $.post("/api/comments", comment, function() {
        // window.location.href = "/members";

    });
}


function getComments(commentParentPost) {

    commentParentPost = CommentedPostText;

    // alert(CommentedPostText);



    $.get("/api/comments/" + CommentedPostText, function(data) {
        console.log(data);
        alert("This runs2");
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

            AltCommentSpace.appendChild(line);
            AltCommentSpace.appendChild(lineText);
            line.append(data[i].userEmail);
            lineText.append(data[i].comment);

            console.log("appended previous comments!");

        };




    });
}
















// console.log(newComment);
submitComment(newComment);



}




})

}


















//end of kwaku changes Tuesday














//end of getpost (author) function

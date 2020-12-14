$(document).ready(function() {
    $("#post-form").submit(function(event) {
        event.preventDefault();
        createPost();
    });

    function createPost(){
        var formData = {
            title : $("#title").val(),
            author : $("#author").val(),
            content : $("#content").val(),
            tags : $("#tags").val()
        }

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:3000/posts",
            data: JSON.stringify(formData),
            dataType: "json",
            success: function(customer) {
                window.location.href = "index.html";
            },
            error: function(i) {
                alert("Error!")
                console.log("Error: ", i);
            }
        });
    }

    resetData();
    function resetData(){
        $("#title").val("");
        $("#author").val("");
        $("#content").val("");
        $("#tags").val("");
    }
});
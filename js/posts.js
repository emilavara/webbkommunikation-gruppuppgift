$(document).ready(function(){
    $.getJSON("http://localhost:3000/posts", function(data){
        var post_data = '';
        $.each(data, function(key, value){
            post_data += '<div class="title">'+value.title+'</div>';
            post_data += '<div class="author"> by '+value.author+'</div>';
            post_data += '<div class="date">'+value.date+'</div>';
            post_data += '<div class="content">'+value.content+'</div>';
            post_data += '<div class="tags">'+value.tags+' </div>' + '<hr class="mgn-btm">';

        });
        $('.posts-container').html(post_data);
    });
});
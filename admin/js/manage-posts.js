$(document).ready(function(){
    $.getJSON("http://localhost:3000/posts", function(data){
        var post_data = '';
        $.each(data, function(key, value){
            post_data += '<tr></tr>';
            post_data += '<td>'+value.title+'</td>';
            post_data += '<td>'+value.author+'</td>';
            post_data += '<td>'+value.date+'</td>';
            post_data += `<th><a href="./update-post.html">✎</a> | <a class="delete-action" onclick="deletePost('${value._id}')">✖</a></th>`;

        });
        $('.table').append(post_data);
    });
});
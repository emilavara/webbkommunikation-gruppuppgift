const deletePost = async (postId) => {
   await fetch('http://localhost:3000/posts/' + postId, {
       method: "DELETE"
   })
   
   location.reload();
} 
window.onload = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const postId = urlParams.get('id');

    const response = await fetch('http://localhost:3000/posts/' + postId);
    const data = await response.json();

    document.querySelector('.title-form').value = data.title;
    document.querySelector('.author-form').value = data.author;
    document.querySelector('.content-form').value = data.content;
    document.querySelector('.tags-form').value = data.tags;

    
    const submitBtn = document.querySelector('.submit-form');
    submitBtn.addEventListener('click', (e) => updatePost(e, postId));
}

const updatePost = async (e, postId) => {
    e.preventDefault();

    await fetch('http://localhost:3000/posts/' + postId, {
        method: "PATCH",
        body: JSON.stringify({
            "title": document.querySelector('.title-form').value,
            "author": document.querySelector('.author-form').value,
            "content": document.querySelector('.content-form').value,
            "tags": document.querySelector('.tags-form').value.split(",")
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    location.href = 'index.html';
};
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        res.send(await Post.find());
    } catch(error) {
        res.send({message: error});
    }
});

// Get specific post
router.get('/:postId', async (req, res) => {
    try {
        res.send(await Post.findById(req.params.postId));
    } catch(error) {
        res.send({message: error});
    }
});

// Create post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        tags: req.body.tags
    })

    try {
        res.send(await post.save());
    } catch(error) {
        res.send({message: error});
    }
});


// Update post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: {
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                tags: req.body.tags
                }
            }
        )
        res.send(updatedPost);
    } catch(error) {
        res.send({message: error});
    }
});

// Delete post
router.delete('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.deleteOne(
            { _id: req.params.postId }
        )
        res.send(updatedPost);
    } catch(error) {
        res.send({message: error});
    }
});

module.exports = router;
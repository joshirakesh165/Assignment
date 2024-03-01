import React, { useState } from 'react'

import postdata from './postdata'
import Post from './Post'
import { addComment, deleteComment, likePost } from './modifyPost';
const PostWrapper = () => {
    const [post, setPost] = useState({ ...postdata });

    const addCommentOnPost = (postId, newComment) => {
        setPost(addComment(postId, newComment));
    }

    const likePostFn = (postId) => {
        setPost(likePost(postId));
    }
    const deleteCommentOrPost = (parentId,id) => {
        setPost(deleteComment(parentId,id));
    }


    return (
        <div>
            <Post {...post}
                likePost={likePostFn}
                addCommentOnPost={addCommentOnPost} 
                deleteCommentOrPost={deleteCommentOrPost}/>
        </div>
    )
}

export default PostWrapper

import React, { useState } from 'react'
import './Post.css'

const Post = (props) => {
  const [edit, setEdit] = useState(false);
  const [commentText, setCommentText] = useState('');

  const onReplyClick = (id) => {
    let newComment = {
      id: 'c' + (+new Date()),
      content: commentText,
      author: 'Tester',
      parentId:id,
      likeCount:0,
      comments: []
    }

    props.addCommentOnPost(props.id, newComment);
    setEdit(false);
    setCommentText('')
  }
  const likePost = () => {
    props.likePost(props.id);
  }
  const deleteComment = () => {
    props.deleteCommentOrPost(props.parentId,props.id);
  }


  const onTextAreaKeyDown = (e,id) => {
    if (e.code == "Enter") {
      onReplyClick(id);
    }
  }
  return (
    <>
      <div className='post'>
        <div className='flex'>
          <div className='post-avatar'>
            <img src="/user.svg" alt="" />
          </div>
          <div className='post-detail'>
            <h3>{props.author}</h3>
            <p>{props.content}</p>
            <div className='button flex'>
              <img className='img-btn' src="/like.svg"  onClick={likePost}/> {props.likeCount}
              <img className='img-btn' src="/comment.svg" onClick={() => setEdit(true)} alt="" />{props?.comments?.length}
              <img className='img-btn' src="/trash-2.svg"  onClick={deleteComment}/>

            </div>
          </div>
        </div>

        {edit && <div className='flex'>
          <textarea className="text-area"
            cols="30" rows="3"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyDown={(e) => onTextAreaKeyDown(e,props.id)}>

          </textarea>
          <div className='flex' style={{ alignItems: 'center' }}>
            <button className='reply-btn' type='button' onClick={() => onReplyClick(props.id)}>Reply</button>
          </div>
        </div>}
      </div>

      <ul className="comments">
        {props?.comments?.map(comment => <li key={comment.id}>
          <Post {...comment} 
          addCommentOnPost={props.addCommentOnPost} 
          likePost={props.likePost} 
          deleteCommentOrPost={props.deleteCommentOrPost}
          /></li>)}
      </ul>
    </>

  )
}

export default Post

import postdata from "./postdata";


const findPostById = (data, postId) => {
    if (postId == data.id) {
        return  data;
    } else {
        for (let i = 0; i < data.comments.length; i++) {
            let foundData = findPostById(data.comments[i], postId)
            if(foundData) {
                return foundData;
            }
        }
    }
}


const likePost = (postId) => {
    const data = findPostById(postdata, postId);
    data.likeCount++;
    return JSON.parse(JSON.stringify(postdata));
}
const addComment = (postId,newComment) => {
    const data = findPostById(postdata, postId);
    data.comments.push(newComment);
    return JSON.parse(JSON.stringify(postdata));
}

const deleteComment = (parentId,postId) => {
    if(!parentId){
        alert('can not delete post')
    } else {
        const data = findPostById(postdata, parentId);
        data.comments = data.comments.filter(comm => comm.id !== postId)
    }
    return JSON.parse(JSON.stringify(postdata));
}

export { addComment ,likePost , deleteComment}
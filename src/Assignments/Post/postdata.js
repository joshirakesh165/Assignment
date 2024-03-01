export default {
    id: 'p1',
    parentId: 0,
    content: 'React is a JavaScript library, whereas Angular is a front-end framework. React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM. what are your views on this ? ',
    likeCount: 0,
    comments: [
        {
            id: 'c1',
            parentId: 'p1',
            content: 'I prefer Angular for large scale project',
            author: 'Dev 1',
            likeCount: 0,
            comments:[]
        },
        {
            id: 'c2',
            parentId: 'p1',
            content: 'React is small librray which is easy to integrate with existing system 🥳',
            author: 'Dev 2',
            likeCount: 0,
            comments:[]
        },
        {
            id: 'c3',
            parentId: 'p1',
            content: 'I will go with vanila JS  😂',
            author: 'Dev 3',
            likeCount: 0,
            comments:[]
        },
    ],
    author: 'Developer'
}
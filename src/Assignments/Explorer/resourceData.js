const folderData = {
    id:1,
    type:'folder',
    name:'root',
    children:[
        {
            id:'11',
            type: 'folder',
            name:'public',
            children:[],
            showEmptyChild: false

        },
        {
            id:'12',
            type: 'folder',
            name:'images',
            children:[],
             showEmptyChild: false
        },
        {
            id:'13',
            type: 'file',
            name:'readme',
            children:[],
            showEmptyChild: false
        }
    ] ,
    isRoot: true,
}
export default folderData;
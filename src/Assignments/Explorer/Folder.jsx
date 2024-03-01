import React, { useRef, useState } from 'react'

const Folder = (props) => {
    const [showInput, setShowInput] = useState(false);
    const [showChilren, setShowChilren] = useState(true);
    const [type, setType] = useState('');
    const [itemName, setItemName] = useState('');
    const inputRef = useRef(null)

    const addClickHandler = (type) => {
        setShowInput(true);
        setType(type)
        setTimeout(() => {
            inputRef?.current?.focus();
        },0)
    }

    const addFolderOrFile = (folder) => {
        let newItem = {
            name: itemName,
            type: type,
            id: String(+new Date()),
            children: [],
            isRoot: false
        }
        folder = { ...folder, children: [...folder.children, newItem] }
        props.updateRootData(folder);
        setType('');
        setItemName('')
        setShowInput(false);
    }
    const deleteFolderOrFile = (folder) => {
        props.updateRootData(folder, 'delete');
    }

    const handleEnter =  (e) => {
        if(e.code == 'Enter') {
            addFolderOrFile(props?.folder)
        }
    }
    return (
        <div>
            <div className="flex folder">
                <div className='folder-name' onClick={() => setShowChilren(state => state = !state)}>
                    {props.folder.type == 'folder' ? <span>&#128210;</span> : <span>&#128195;</span>} {props.folder.name}
                </div>
                <div className='folder-btn-c'>
                    {props.folder.type == 'folder' && <span className='icon' onClick={() => addClickHandler('folder')}>&#128193;</span>}
                    {props.folder.type == 'folder' && <span className='icon' onClick={() => addClickHandler('file')}>&#128195;</span>}
                    <span className='icon' onClick={() => deleteFolderOrFile(props.folder)}>&#128465;</span>
                </div>
            </div>
            {showChilren &&
                <ul>
                    {props?.folder.children?.map(child =>
                        <li key={child?.id}><Folder
                            folder={child}
                            showInput={showInput}
                            addClickHandler={addClickHandler}
                            updateRootData={props.updateRootData}
                        /></li>)}
                    {showInput &&
                        <li> {type == 'folder' ? <span>&#128210;</span> : <span>&#128195;</span>}
                            <input type="text" ref={inputRef}
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                                onKeyDown={handleEnter}
                                onBlur={() => addFolderOrFile(props?.folder)} />
                        </li>}
                </ul>
            }
        </div>
    )
}

export default Folder

import React, { useState } from 'react'
import Folder from './Folder'
import folderData from './resourceData'
import modifyData from './modifyData'
import './Explorer.css';

const Explorer = () => {
  const [explorerData, setExplorerData] = useState(folderData)

  const updateRootData = (folder,action) => {
    let newData = modifyData(folderData,folder,action)
    setExplorerData({...newData})
  }

  return (
    <div>
      <Folder folder={explorerData} updateRootData={updateRootData} />
    </div>
  )
}

export default Explorer

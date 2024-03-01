const modifyData = (resourceData, folder, action) => {
    if (resourceData.id == folder.id) {
        return folder;
    } else {
        for (let i = 0; i < resourceData.children.length; i++) {
            let child = resourceData.children[i];
            let addedFolder = modifyData(child, folder,action);
            if (addedFolder) {
                if (action == 'delete') {
                    resourceData.children = resourceData.children?.filter(r => r.id != folder.id);
                } else {
                    resourceData.children[i] = { ...addedFolder };
                }
                return resourceData;
            }
        }
    }
}

export default modifyData;
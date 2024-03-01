var data = [];

for (let i = 0; i < 2000000; i++) {
    data.push({
        id: i + 1,
        name: `Task  ${i + 1}`,
        details: `Record ${i + 1} visible here`,
        author: `USER ${i + 1}`
    })
}

export default data;
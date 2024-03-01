const changeStringCodeToHTML = (code) => {
    code = code.replaceAll(/"([^"]*)"/g, match => `<span class="code-value">${match}</span>`)
    code = code.replaceAll(/'([^']*)'/g, match => `<span class="code-value">${match}</span>`)
    code = code.replaceAll(/\d+/g, match => `<span class="code-digit">${match}</span>`)
    code = code.replaceAll('[', match => `<span class="code-digit">${match}</span>`)
    code = code.replaceAll(']', match => `<span class="code-digit">${match}</span>`)

    let keywords = ['return','default','function','let', 'const', 
    'if','else', 'for', 'switch' , 'new','(', ')','{','}','=>' ,'break']

    keywords.forEach(keyword => {
        code = code.replaceAll(keyword,`<span class="code-keyword">${keyword}</span>`);
    })
    code = code.replaceAll(/\/\/.*$/gm, match => `<span class="code-digit">${match}</span>`);
    code = code.replaceAll(/\/\*([\s\S]*?)\*\//g, match => `<span class="code-digit">${match}</span>`);


   return code;
}
export default changeStringCodeToHTML;
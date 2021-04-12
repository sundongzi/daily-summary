const fs = require('fs')
const path = require('path')
const _path = path.dirname(__dirname)
let _name = '更多'
const dir = `${_path}/docs/${_name}`
const files = fs.readdirSync(dir)
let arr = []
for(let file of files) {
    if (file !== 'README.md') {
        let _file = file.replace(/.md$/g, '')
        let newArr = []
        newArr.push(`${_name}/${_file}`)
        newArr.push(_file)
        arr.push(newArr)
    }
}
console.log(arr)

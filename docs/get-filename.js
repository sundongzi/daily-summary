const fs = require('fs')
const path = require('path')
const _path = path.dirname(__dirname)
console.log('path', )
const dir = `${_path}/docs/项目积累`
// console.log('111111', fs.readdir(dir))
const files = fs.readdirSync(dir)
// console.log('files', files)
let arr = []
for(let file of files) {
    let newArr = []
    newArr.push(file)
    newArr.push(file)
    arr.push(newArr)
}
console.log(arr)

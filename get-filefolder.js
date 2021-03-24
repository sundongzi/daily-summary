const fs = require('fs')
const files = fs.readdirSync('./docs')
let _path = './docs/.vuepress/config/theme-config/nav.js'
let fileFolderArr = []
files.forEach((item, index) => {
    let obj = {}
    let stat = fs.lstatSync("./docs/" + item)
    if (stat.isDirectory() && item !== '.vuepress') {
        obj.text = item
        obj.link = `/${item}/`
        fileFolderArr.push(obj)
    }
})
// console.log('teteette', /\[\]/g.test(text))
fs.writeFileSync(_path, `module.exports = ${JSON.stringify(fileFolderArr)}` , 'utf8')
console.log(fileFolderArr)

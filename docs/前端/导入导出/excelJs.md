

```javascript
// 安装
npm install exceljs

// 引入
import ExcelJS from 'excel.js'

// 创建并加载workbook
async function createWorkBook () {
  const workbook = new ExcelJS.Workbook()
  await workbook.xlsx.load(data)
  return workbook
}
// 获取每个sheet页
function  getWorksheet () {
  let worksheet = workbook.getWorksheet(sheetName)
  return worksheet
}

function importExcel () {
  let result = []
  let worksheet = workbook.getWorksheet(sheetName)
  worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    result.push(row.values)
    console.log('row', row.values)
  })
  return result
}
```



![image-20220714114643781](/Users/sundong/Library/Application Support/typora-user-images/image-20220714114643781.png)
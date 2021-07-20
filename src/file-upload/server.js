const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

// 使用中间件
app.use(fileUpload())

// 处理路由
app.post('/upload', (req, res) => {
    // 判断files属性有没有文件
    if (req.files === null) {
        return res.status(400).json({msg: '没有上传的文件！'})
    }

    const file = req.files.file
    file.mv(`${__dirname}/client/uploads/${file.name}`, err => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        res.json({
            fileName: file.name,
            filePath: `/src/file-upload/client/uploads/${file.name}`
        })
    })

})

// 监听端口号
app.listen(5000, () => {
    console.log('服务器正在5000端口号运行...');
})
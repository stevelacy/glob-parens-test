const glob = require('glob')
const gs = require('glob-stream')

const path = './folder/gulp(brackets)/*.md'
const gStream = gs.create(path)

glob(path, (err, files) => {
  console.log(err, files)
})

gStream.on('data', (file) => {
  console.log(file)
})

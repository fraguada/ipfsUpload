const { create } = require('ipfs-http-client')
const infuraUrl = 'https://ipfs.infura.io:5001'

exports.pushFile = async (buffer) => {

    const ipfs = create(infuraUrl)

    const hash = await ipfs.add(buffer)
    console.log(hash)
    const cid = `https://ipfs.io/ipfs/${hash.path}`

    return cid

}
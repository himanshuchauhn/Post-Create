const  { ImageKit } = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    
    privateKey: "private_uqsTURrNZn0kbozDZXb7hZOPzVM="
  
});

async function uploadFile (buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result;
}
module.exports = uploadFile;
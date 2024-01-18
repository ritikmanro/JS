function download(cb) {
    console.log("Download starts");
    setTimeout(() => {
        console.log("Download Completed");
        cb(upload);
    }, 3000)
}

function compress(up) {
    console.log("Compression starts");
    setTimeout(() => {
        console.log("Compression Completed");
        up();
    }, 3000)
}

function upload() {
    console.log("Upload Startes");
    setTimeout(() => {
        console.log("Upload Completed");
    }, 3000)
}

download(compress); // We are doing this as we want to first start the download and then we need to start the compression, Now,
//It will first start the download and after than the compression will start
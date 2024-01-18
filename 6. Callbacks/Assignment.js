function download(url, cb) {
    console.log("Download Starts");

    const newUrl = url.split("/");
    setTimeout(() => {
        console.log("Download completed and got url as :", url);
        console.log(newUrl);
        let lastElement = newUrl[newUrl.length - 1];
        console.log(lastElement);
        cb(lastElement, upload);
    }, 3000)
}

function compress(newUrl, up) {
    // File.mp4 --> File.zip
    console.log("Compression starts");
    console.log(newUrl);
    setTimeout(() => {
        newUrl = newUrl.split(".")
        console.log(newUrl);
        newUrl[newUrl.length - 1] = ".zip"
        console.log(newUrl);
        newUrl = newUrl.join('');
        console.log(newUrl);
        up(newUrl, allDone);
        console.log("Compression completed");
    }, 3000)
}

function upload(newUrl, cb) {
    // new Url will be 'http://newcb.com/file.zip'

    console.log("Uploading starts")

    setTimeout(() => {
        newUrl = "http://newcb.com/" + newUrl;
        console.log(newUrl);
        cb(newUrl)
        console.log("Uploading completed");
    }, 3000)
}

function allDone(newUrl) {
    console.log("All done", newUrl);
}
let url = 'http://cb.com/file.mp4'
download(url, compress);
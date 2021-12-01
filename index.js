//Dependencies
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <file_path>")
    process.exit()
}

if(!Fs.existsSync(Self_Args[0])){
    console.log("file_path is invalid.")
    process.exit()
}

const file_data = Fs.readFileSync(Self_Args[0], "utf8")

try{
    let result = file_data.match(/"bin": "\w+.\w+"|"pkg":/)[0]

    if(result.indexOf("bin") != -1){
        console.log("The file is vulnerable to PKG code leakage.")
        process.exit()
    }else{
        console.log("The file is not vulnerable to PKG code leakage.")
        process.exit()
    }
}catch{
    console.log("The file is not vulnerable to PKG code leakage.")
    process.exit()
}

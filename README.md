<h1 align="center">PCL</h1>
<h4 align="center">Checks if file is vulnerable to PKG code leakage</h4>
<p align="center">
	<a href="https://github.com/I2rys/PCL/blob/main/LICENSE"><img src="https://img.shields.io/github/license/I2rys/PCL?style=flat-square"></img></a>
	<a href="https://github.com/I2rys/PCL/issues"><img src="https://img.shields.io/github/issues/I2rys/PCL.svg"></img></a>
	<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/-Nodejs-green?style=flat-square&logo=Node.js"></img></a>
</p>


## Installation
Github:

    git clone https://github.com/I2rys/PCL

## Usage

    node index.js <file_path>

+ file_path - The path of the file to check.

## Note
This only works If the file is compiled using [PKG](https://npmjs.com/package) and to find the code of the compiled file open the file in a file editor then find **"bin"** then above it may be the code of the file.

## License
MIT © I2rys

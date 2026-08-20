#file system of NodeJs
It allows js code runing outside the browser and interact directly to operating system
##common operations on file/folder
Reading and writing files -> readFile(), writeFile, appendFile()
-Directory management ->mkdir(),rmdir(),readdir()
-Metadata/Information-> stat(),lstat(),fstat()
-Watching for changes -> watch(), watchFile(), unwatchFile()
-Streaming Large Files-> createReadStream(), createWriteStream()
-File Opeartions-> rename(), truncate(), unlink(), link(),syslink() 
###CRUD: create retrieve update delete
Note: await can be used with any promise in async function. That async function will accessed by await keyword                                                     
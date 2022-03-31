# Strams 
- streams are use for read or write sequancially 

## ReadingPI.js
- Reading value of pi using streams insted of reading whole files 
- changing buffer size using highwatermark property 
- change the encode and read the contenet of file 

## LargeFileDirect.js
- read large file directly and populate that to web page 
- right click and go to inspect->network and refersh and observe whole file is loaded once 
- this is not very effient way 

## LargeFileChunk 
- Load the file content chunck by chunk using readStream and pipe
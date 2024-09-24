const fs = require('fs')

const errorCallb = (error, data)=>{
    if(error){
        console.log('gagal membaca berkas');
        return;
    }
    console.log(data);
}

fs.readFile('notes.txt', 'UTF-8', errorCallb)
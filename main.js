let downloadbtn = document.querySelector('.downloadbtn');

downloadbtn.addEventListener('click', function(){
    //create a blob
    const blob = new Blob(['this is my first blob', {type: 'text/mahady'}]);
    downloadFile(blob, 'newfile.text')
});

//function accese blob and File name
function downloadFile(blob, fliename){
    //create url for blob
    const url = window.URL.createObjectURL(blob);
    //Ancore tag for download
    let a = document.createElement('a');
    a.href = url;
    a.download = 'fliename';
    //click event
    a.click();
    a.remove();
   
}





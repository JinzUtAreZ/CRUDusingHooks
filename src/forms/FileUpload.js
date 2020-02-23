import React, { Fragment } from 'react';

// $('#multi_file_upload').change(function(e) {
//const onFileChange = e => {
var tmpID = 0;
window.addEventListener('load', function() {
  document
    .querySelector('input[type="file"]')
    .addEventListener('change', function() {
      if (this.files && this.files[0]) {
        //var img = document.querySelector('img'); // $('img')[0]
        var imgmulti = document.createElement('img');

        //img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        imgmulti.src = URL.createObjectURL(this.files[0]); // set src to blob url
        imgmulti.style.maxWidth = '200px';
        imgmulti.style.maxHeight = '200px';
        //img.onload = imageIsLoaded;

        document.getElementById('imgContainer').appendChild(imgmulti);
      }
    });
});

//});
//};

function imageIsLoaded() {
  alert(this.src); // blob url
  // update width and height ...
}

function check_multifile_logo(file) {
  var extension = file.substr(file.lastIndexOf('.') + 1);
  if (
    extension === 'jpg' ||
    extension === 'jpeg' ||
    extension === 'gif' ||
    extension === 'png' ||
    extension === 'bmp'
  ) {
    return true;
  } else {
    return false;
  }
}

const FileUpload = () => {
  return (
    <Fragment>
      <input type="file" />
      <img id="myImg" src="#" alt="your" height="200" width="200" />
      <div id="imgContainer"></div>
    </Fragment>
  );
};

export default FileUpload;

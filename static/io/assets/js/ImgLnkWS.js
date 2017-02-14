function find320Height(arrOfImageData) {
    //find hight first
    imgHeight = _.find(arrOfImageData, function (imageData) {
        return imageData.height <= 320;
    });

    return imgHeight;
    //if (imgHeight == 'undefined')
    //{

    //}
}

//style=\"height:100%\"
function writeImgTag(photoItem) {
    var image = find320Height(photoItem.images);
    var imageSource = image.source  //
    document.getElementById("imglnkws").innerHTML += "<li><img style=\"height:100%\" src=\"" + imageSource + "\"></li>";
}

function writeImgTagGallery(photoItem, counter, album) {
    var image = find320Height(photoItem.images);
    var imageSource = image.source  //
    var facebookimageid = "facebookimage_a" + album + "_" + counter
    var facebooktextid = "facebooktext_a" + album + "_" + counter
    try
    {
      document.getElementById(facebookimageid).innerHTML = "<img style=\"height:300px\" src=\"" + imageSource + "\">";
      document.getElementById(facebooktextid).innerHTML = photoItem.name;
    }
    catch (err)
    {

    }
}

function displayAlbum1(data) {
    $(function () {
        var photoArray = data.data
        var counter = 1
        for (var photoItem in photoArray) {
            if (photoArray.hasOwnProperty(photoItem)) {
                writeImgTagGallery(photoArray[photoItem], counter, 1)
                counter++
                console.log("item!")
            }
        }
        console.log("called back!")
    });
};

function displayAlbum2(data) {
    $(function () {
        var photoArray = data.data
        var counter = 1
        for (var photoItem in photoArray) {
            if (photoArray.hasOwnProperty(photoItem)) {
                writeImgTagGallery(photoArray[photoItem], counter, 2)
                counter++
                console.log("item!")
            }
        }
        console.log("called back!")
    });
};

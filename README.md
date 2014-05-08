simple-file-uploader
====================

simple file uploaded with jquery.

==================================

Usage in Jquery : 

$("#FileUploaderId").InitUploader({
    form: "uploadForm", //Name of the form that is going to be created for post.
    realFileId: "#BusinesLogo", // Real file id or name "HTTPPostedFile" object of variable which you are using in mvc action result
    action: "/Upload", //Action path image request to handle.
    targetFrame: "fileTarget", //Target Iframe name/id which will be created and return result to us.
    func: function (path) { //call back function in which file path will be returned after upload.
        
    },
});

Usage in MVC :

public ActionResult Upload(HttpPostedFileBase BusinesLogo)
{
    //read file and store in file system 
    return Content("path of the file");
}

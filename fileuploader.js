$(function () {
    $.fn.InitUploader = function (options) {

        var defaults = {
            form: $("form"),
            realFileId: null,
            action: "",
            targetFrame: "",
            clonedFileName: "",
            func: null
        }

        var opt = $.extend(defaults, options);

        $(opt.realFileId).live("change", function () {
            startUpload();
        });

        var loadFile = function () {
            if (document.getElementById(opt.targetFrame) != null && document.getElementById(opt.targetFrame) !== undefined) {
                var path = document.getElementById(opt.targetFrame).contentWindow.document.body.innerHTML;
                if (opt.func !== undefined) {
                    opt.func(path);
                }                
            }
        }

        var startUpload = function () {

            $("#" + opt.targetFrame).remove();
            $("#" + opt.form).remove();

            var frame = $("<iframe/>").attr("id", opt.targetFrame)
            .attr("name", opt.targetFrame);
            frame.bind("load", function () { loadFile() });
            frame.hide();
            $("body").append(frame);

            var form = $("<form/>")
                   .attr("action", opt.action)
                   .attr("id", opt.form)
                   .attr("method", "post")
                    .attr("id", "uploadForm")
                   .attr("target", opt.targetFrame)
                   .attr("enctype", "multipart/form-data");

            $("body").append(form);
            form.hide();
            var button = $("<button/>");
            button.addClass(opt.realFileId.replace("#", ""));
            button.attr("value", "Change File");
            button.attr("type", "button");
            
            button.html("Change File");
            button.bind("click", function () { changeFile(); });
            button.insertAfter($(opt.realFileId));

            $(opt.realFileId).appendTo(form);
            
            form.submit();
        }

        var changeFile = function () {
            var buttonId = opt.realFileId.replace("#", "");
            $("." + buttonId).hide();
            var inputField = $("<input/>").attr("id", buttonId)
            .attr("name", buttonId)
            .attr("type", "file");

            inputField.insertAfter($("." + buttonId));
            $("." + buttonId).remove();
        }
    }
});
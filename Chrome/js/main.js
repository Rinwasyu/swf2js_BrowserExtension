let embedElement = document.getElementsByTagName("embed");
let objectElement = document.getElementsByTagName("object");

for (let i = embedElement.length - 1; i >= 0; i--) {
    let src = embedElement[i].src;
    let type = embedElement[i].type;
    if (type == "application/x-shockwave-flash" || src.split(".")[src.split(".").length - 1] == "swf") {
        let container = document.createElement("div");
        let width = embedElement[i].width;
        let height = embedElement[i].height;
        container.id = "swfjs_be-e" + i;
        if (!isNaN(width) && !isNaN(height)) {
            width += "px";
            height += "px";
        }
        container.style = "display:inline-block;width:" + width + ";height:" + height;
        embedElement[i].parentNode.insertBefore(container, embedElement[i]);
        swf2js.load(src, {tagId: container.id});
        embedElement[i].parentNode.removeChild(embedElement[i]);
    }
}

for (let i = objectElement.length - 1; i >= 0; i--) {
    let src = objectElement[i].data;
    let type = objectElement[i].type;
    if (type == "application/x-shockwave-flash" || src.split(".")[src.split(".").length - 1] == "swf") {
        let container = document.createElement("div");
        let width = objectElement[i].width;
        let height = objectElement[i].height;
        container.id = "swfjs_be-o" + i;
        if (!isNaN(width) && !isNaN(height)) {
            width += "px";
            height += "px";
        }
        container.style = "display:inline-block;width:" + width + ";height:" + height;
        objectElement[i].parentNode.insertBefore(container, objectElement[i]);
        swf2js.load(src, {tagId: container.id});
        objectElement[i].parentNode.removeChild(objectElement[i]);
    }
}
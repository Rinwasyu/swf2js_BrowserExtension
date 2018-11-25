let embedElement = document.getElementsByTagName("embed");
let objectElement = document.getElementsByTagName("object");

for (let i = embedElement.length - 1; i >= 0; i--) {
    if (embedElement[i].type == "application/x-shockwave-flash") {
        let container = document.createElement("div");
        container.id = "swfjs_be-e" + i;
        container.style = "display:inline-block;width:" + embedElement[i].width + "px;height:" + embedElement[i].height + "px;";
        embedElement[i].parentNode.insertBefore(container, embedElement[i]);
        swf2js.load(embedElement[i].src, {tagId: container.id});
        embedElement[i].parentNode.removeChild(embedElement[i]);
    }
}

for (let i = objectElement.length - 1; i >= 0; i--) {
    if (objectElement[i].type == "application/x-shockwave-flash") {
        let container = document.createElement("div");
        container.id = "swfjs_be-o" + i;
        container.style = "display:inline-block;width:" + objectElement[i].width + "px;height:" + objectElement[i].height + "px;";
        objectElement[i].parentNode.insertBefore(container, objectElement[i]);
        swf2js.load(objectElement[i].data, {tagId: container.id});
        objectElement[i].parentNode.removeChild(objectElement[i]);
    }
}
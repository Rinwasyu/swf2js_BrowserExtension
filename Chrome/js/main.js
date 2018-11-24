let embed = document.getElementsByTagName("embed");

for (let i=embed.length-1; i>=0; i--) {
    let container = document.createElement("div");
    container.id = "swfjs_be-"+i;
    container.style = "display:inline-block;width:" + embed[i].width + ";height:" + embed[i].height;
    embed[i].parentNode.insertBefore(container, embed[i]);
    swf2js.load(embed[i].src, {tagId: container.id});
    embed[i].parentNode.removeChild(embed[i]);
}
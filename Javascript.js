function showPage(pageId) {
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    var page = document.getElementById(pageId);
    if (page) {
        page.style.display = "block";
    }
}

function openURl(url) {
    window.open(url, '_blank');
}

function downloadFile(file) {
    var link = document.createElement('a');
    link.href = file;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
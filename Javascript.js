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
    alert("Files are downloading, please wait...");
}

window.onload = function () {
    showPage('page1');
    currentPageIndex = 1;
};

var currentPageIndex = 1;

function showPage(pageId) {
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    var page = document.getElementById(pageId);
    if (page) {
        page.style.display = "block";

        currentPageIndex = getCurrentPageIndex();

        var btnPage1 = document.getElementById("btnPage1");
        var btnPage2 = document.getElementById("btnPage2");
        var btnPage3 = document.getElementById("btnPage3");

        btnPage1.style.backgroundColor = "#586b80";
        btnPage2.style.backgroundColor = "#586b80";
        btnPage3.style.backgroundColor = "#586b80";

        var currentPageButton = document.getElementById("btnPage" + currentPageIndex);
        if (currentPageButton) {
            currentPageButton.style.backgroundColor = "#435363";
        }
    }
}


function getCurrentPageIndex() {
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].style.display === "block") {
            return i + 1;
        }
    }
    return 1;
}
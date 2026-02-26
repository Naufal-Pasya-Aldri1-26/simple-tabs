function openTab (evt, tabNumber) {
    // Declare all variable
    var i, tabContent, tabLink;

    // Get all element with class Tab-content and hides them
    tabContent = document.getElementsByClassName("tab-content");
    for (i=0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // get all element with class tab-link
    tabLink = document.getElementsByClassName("tab-link");
    for (i=0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabNumber).style.display = "block";
    evt.currentTarget.className += "active";

}


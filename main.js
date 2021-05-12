var page_header = document.getElementById("page-header");
var main_heading = document.getElementById("main-heading");

main_heading.textContent = "New DOM Layout";
main_heading.classList.remove("bg-dark");
main_heading.classList.add("bg-success");

var item1 = document.getElementById("para1");
item1.textContent += "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

var item2 = document.getElementById("para2");
item2.textContent += "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

var item4 = document.getElementById("para4");
var item4Action = document.getElementById('btn');

item4Action.addEventListener('click', function() {
    item4.textContent += "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
}); 

red.classList.remove("bg-white");
red.classList.add("bg-danger");

blue.classList.remove("bg-white");
blue.classList.add("bg-primary");

yellow.classList.remove("bg-white");
yellow.classList.add("bg-warning");

green.classList.remove("bg-white");
green.classList.add("bg-success");

black.classList.remove("bg-white");
black.classList.add("bg-dark");

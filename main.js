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



const red = document.getElementById('red');

red.addEventListener('click', function() {
    if (red.classList.contains('bg-white')) {
        red.classList.remove('bg-white');
        red.classList.add('bg-danger');
    } else {
        red.classList.remove('bg-danger');
        red.classList.add('bg-white');
    }
});

const blue = document.getElementById("blue");

blue.addEventListener("click", function() {
    if (blue.classList.contains("bg-white")) {
    blue.classList.remove("bg-white");
    blue.classList.add("bg-primary");
    } else {
    blue.classList.remove("bg-white");
    blue.classList.add("bg-primary");
    }
});


const yellow = document.getElementById('yellow');

yellow.addEventListener('click', function() {
    if (yellow.classList.contains('bg-white')) {
        yellow.classList.remove('bg-white');
        yellow.classList.add('bg-warning');
    } else {
        yellow.classList.remove('bg-white');
        yellow.classList.add('bg-warning');
    }
});

const green = document.getElementById('green');

green.addEventListener('click', function() {
    if (green.classList.contains('bg-white')) {
        green.classList.remove('bg-white');
        green.classList.add('bg-success');
    } else {
        green.classList.remove('bg-white');
        green.classList.add('bg-success');
    }
});

const black = document.getElementById('black');

black.addEventListener('click', function() {
    if (black.classList.contains('bg-white')) {
        black.classList.remove('bg-white');
        black.classList.add('bg-dark');
    } else {
        black.classList.remove('bg-white');
        black.classList.add('bg-dark');
    }
});


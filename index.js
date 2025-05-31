function saveBook(bookData) {
    const line = document.createElement('tr');
    const titleColun = document.createElement('td');
    const synopsisColun = document.createElement('td');
    const authorsColun = document.createElement('td');
    const publisherColun = document.createElement('td');
    const yearColun = document.createElement('td');
    const formatColun = document.createElement('td');
    const dimensionsColun = document.createElement('td');
    const pagesColun = document.createElement('td');
    const subjectsColun = document.createElement('td');
    const locationColun = document.createElement('td');
    const priceColun = document.createElement('td');

    titleColun.innerText = bookData.title + ": " + bookData.subtitle;
    synopsisColun.innerText = bookData.synopsis;
    authorsColun.innerText = bookData.authors;
    publisherColun.innerText = bookData.publisher;
    yearColun.innerText = bookData.year;
    formatColun.innerText = bookData.format;
    dimensionsColun.innerText = bookData.dimensions;
    pagesColun.innerText = bookData.page_count;
    subjectsColun.innerText = bookData.subjects;
    locationColun.innerText = bookData.location;
    priceColun.innerText = bookData.retail_price;

    line.appendChild(titleColun)
    line.appendChild(synopsisColun)
    line.appendChild(authorsColun)
    line.appendChild(publisherColun)
    line.appendChild(yearColun)
    line.appendChild(formatColun)
    line.appendChild(dimensionsColun)
    line.appendChild(pagesColun)
    line.appendChild(subjectsColun)
    line.appendChild(locationColun)
    line.appendChild(priceColun)

    const table = document.getElementById("book-table");
    table.appendChild(line)
}

function showBook(bookData) {
    const coverField = document.getElementById("cover")
    const titleField = document.getElementById("title");
    const subtitleField = document.getElementById("subtitle");
    const synopsisField = document.getElementById("synopsis");
    const authorsField = document.getElementById("authors");
    const publisherField = document.getElementById("publisher");
    const yearField = document.getElementById("year");
    const formatField = document.getElementById("format");
    const dimensionsField = document.getElementById("dimensions");
    const pagesField = document.getElementById("pages");
    const subjectsField = document.getElementById("subjects");
    const locationField = document.getElementById("location");
    const priceField = document.getElementById("price");
    const saveButton = document.getElementById("save-button");

    const cover = bookData.cover_url;
    const title = bookData.title;
    const subtitle = bookData.subtitle;
    const synopsis = bookData.synopsis;
    const authors = bookData.authors;
    const publisher = bookData.publisher;
    const year = bookData.year;
    const format = bookData.format;
    const dimensions = bookData.dimensions;
    const pages = bookData.page_count;
    const subjects = bookData.subjects;
    const location = bookData.location;
    const price = bookData.retail_price;

    if (!cover) {
        coverField.src = "./imgs/NotBookCover.png";
    } else {
        coverField.src = cover;
    }

    titleField.innerText = title;
    subtitleField.innerText = subtitle;
    synopsisField.innerText = synopsis;
    authorsField.innerText = "Authors: " + authors;
    publisherField.innerText = "Publisher: " + publisher;
    yearField.innerText = "Year: " + year;
    formatField.innerText = "Format: " + format;
    if (dimensions) {
        dimensionsField.innerText = "Dimensions: " + dimensions.width + "x" + dimensions.height + " " + dimensions.unit;
    } else {
        dimensionsField.innerText = "Dimensions: " + null
    }
    pagesField.innerText = "Pages: " + pages;
    subjectsField.innerText = "Subjects: " + subjects;
    locationField.innerText = "Location: " + location;
    priceField.innerText = "Price: " + price.currency + " " + price.amount;
    
    saveButton.addEventListener("click", saveBook(bookData))
}

function searchBook() {
    const inputBook = document.getElementById("input-book");
    const isbn = inputBook.value;

    fetch("https://brasilapi.com.br/api/isbn/v1/" + isbn)
        .then((response) => response.json())
        .then((bookData) => showBook(bookData))
    
}

function main() {
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", searchBook);
    const coverField = document.getElementById("cover")
    coverField.src = "./imgs/NotBookCover.png";
}

window.addEventListener("load", main);
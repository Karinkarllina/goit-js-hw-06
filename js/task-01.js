const categoriesEl = document.querySelectorAll(".item")

const categoriesLengthEl = categoriesEl.length;
console.log(`Number of categories: ${categoriesLengthEl}`);

const categoryEl = categoriesEl.forEach(element => {

    const categoryTitleEl = element.firstElementChild.textContent;
    console.log(`Category: ${categoryTitleEl}`);
    const categoryAmountEl = element.querySelectorAll("li").length; 
    console.log(`Elements: ${categoryAmountEl}`);
});














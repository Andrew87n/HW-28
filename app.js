

const inputRef = document.querySelector("#bookmarkInput");
const btnRef = document.querySelector("#addBookmarkBtn");
const listRef = document.querySelector("#bookmarkList");
const savedBookmarks = localStorage.getItem("bookmarks");
const bookArray = savedBookmarks ? JSON.parse(savedBookmarks) : [];

btnRef.addEventListener("click", () => {
    const urlValue = inputRef.value.trim();

    if (urlValue) {
        bookArray.push(urlValue);

        // Збереження
        localStorage.setItem("bookmarks", JSON.stringify(bookArray));

        inputRef.value = "";
        renderArray();
    }
});

function renderArray() {
    const item = bookArray.map((url, index) => {
        return `<li>
            <a href="${url}" target="_blank">${url}</a>
            <button type="button" data-action="${index}">x</button>
        </li>`;
    }).join("");

    listRef.innerHTML = item;
}

listRef.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") return;

    const index = event.target.dataset.action;

    bookArray.splice(index, 1);

    localStorage.setItem("bookmarks", JSON.stringify(bookArray));

    renderArray();
});

renderArray();



const nameRef = document.querySelector("#username");
const passwordRef = document.querySelector("#password");
const saveRef = document.querySelector("#saveBtn");

nameRef.addEventListener("input", (event) => {
    const value = event.target.value.trim();
    localStorage.setItem("name", value);
});

passwordRef.addEventListener("input", (event) => {
    const value = event.target.value.trim();
    localStorage.setItem("password", value);
});

saveRef.addEventListener("click", (event) => {
    event.preventDefault();

    localStorage.removeItem("name");
    localStorage.removeItem("password");

    nameRef.value = "";
    passwordRef.value = "";
});

function checkStorage() {
    const savedName = localStorage.getItem("name");
    const savedPassword = localStorage.getItem("password");

    if (savedName) nameRef.value = savedName;
    if (savedPassword) passwordRef.value = savedPassword;
}

checkStorage();
const inputRef = document.querySelector("#bookmarkInput");
const btnRef = document.querySelector("#addBookmarkBtn");
const listRef = document.querySelector("#bookmarkList");

const bookArray = [];

btnRef.addEventListener("click", () => {
    const urlValue = inputRef.value.trim();
    if(urlValue){
        bookArray.push(urlValue);
        inputRef.value = "";
        renderArray();
    }
})

function renderArray () {
    const item = bookArray.map((url, index) => {
        return `<li>
    <a href="${url}">${url}</a>
    <button type="button" data-action="${index}">x</button>
</li>`
    }).join("")
    listRef.innerHTML = item;
}

listRef.addEventListener("click", (event) => {
    const target = event.target.nodeName
    const index = event.target.dataset.action
    if(target !== "BUTTON") {
        return
    }
    bookArray.splice(index, 1)
    renderArray()
})














const nameRef = document.querySelector("#username");
const passwordRef = document.querySelector("#password");
const saveRef = document.querySelector("#saveBtn");

saveRef.addEventListener("click", (event) => {
    localStorage.clear() 
    event.preventDefault
    nameRef.value = ""
    passwordRef.value = ""
})

nameRef.addEventListener("input", (event) => {
    const inputName = event.target.value.trim()
    localStorage.setItem("name", inputName)
})

passwordRef.addEventListener("input", (event) => {
    const inputPassword = event.target.value.trim()
    localStorage.setItem("password", inputPassword)
})

function checkStorage (){
    const getName = localStorage.getItem("name");
    const getPassword = localStorage.getItem("password");
    nameRef.value = getName
    passwordRef.value = getPassword
}

checkStorage()

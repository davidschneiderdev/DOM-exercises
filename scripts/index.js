

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];

const linkContainer = document.querySelector(".js-link-container");

function createAnchorElement(addressPath) {
    let a = document.createElement("a");
    a.href = addressPath;
    a.textContent = addressPath;
    return a;
}

function appendAnchorToContainer(a) {
    linkContainer.appendChild(a);
}

function appendAddressArray(item) {
    let addressHandle = createAnchorElement(item);
    appendAnchorToContainer(addressHandle);
}

addresses.map(appendAddressArray);

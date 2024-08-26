function App(reactElement){

}

function renderReact(reactElement, target){
    let element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        element.setAttribute(prop, reactElement.props[prop]);
    }
    target.appendChild(element);
}

let reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_test"
    },
    children : "click here to go to google"

}

let root = document.getElementById("root");
renderReact(reactElement, root)
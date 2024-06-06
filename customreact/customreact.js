customRender = (reactelement, maincontainer) => {       // Will render the contents of this file on browser
    /*
    const DOMele = document.createElement(reactelement.type)            // Creating a DOM element
    DOMele.innerHTML = reactelement.children                            // Adding the contents to DOM element
    DOMele.setAttribute('href', reactelement.props.href)                // Setting up attributes for DOM elements
    DOMele.setAttribute('target', reactelement.props.target)

    maincontainer.appendChild(DOMele)                                   // Appending the DOM element to main document container
    */

    // The above code is not efficient because we are setting up the attributes 1 by 1 so, we'll use code below
    const DOMele = document.createElement(reactelement.type);
    DOMele.innerHTML = reactelement.children

    for(const key in reactelement.props) {
        if(key === 'children') continue;
        DOMele.setAttribute(key, reactelement.props.key)
    }
    maincontainer.appendChild(DOMele)
}

const reactelement =  {
    type : 'a',
    props : {        
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const maincontainer = document.querySelector('#root')

customRender(reactelement, maincontainer)


// This happens inside function files of react
 
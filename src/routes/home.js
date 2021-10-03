import React from "react";

const Home = prop => {
    let type;
    function newWindow(type) {
        let name = `New ${type}`;
        const window = document.createElement("div");
        window.id = "newScreen"
        const windowType = document.createElement("p");
        windowType.innerText = `${type}`
        window.append(windowType);
        const windowTitle = document.createElement("h1");
        windowTitle.innerText = `${name}`;
        const windowForm = document.createElement("form");
        window.append(windowTitle);
        const windowInput = document.createElement("input");
        windowInput.type = "text";
        windowInput.value = `${name}`;
        windowForm.append(windowInput);
        windowTitle.addEventListener("click", () => windowTitle.replaceWith(windowForm));
        if (document.hasFocus() === false) {
            windowInput.replaceWith(windowTitle);
        }
        windowInput.addEventListener("change", (event) => {
            const {target: {value}} = event;
            name = value;
        });
        const windowOpenBtn = document.createElement("button");
        windowOpenBtn.innerText = "Open";
        windowOpenBtn.id = "window_open";
        window.append(windowOpenBtn);
        const btnDiv = document.createElement("div");
        window.append(btnDiv);
        btnDiv.id = "window_btns";
        const dupeBtn = document.createElement("button");
        dupeBtn.innerText = "Duplicate";
        btnDiv.append(dupeBtn);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        btnDiv.append(deleteBtn);
        return window;
    }
    function onNewClick(event) {
        const {
            target: {name}
        } = event;
        const screensDiv = document.getElementById("screens");
        if(name === "screen") {
            type = "Screen";
        } else if (name === "poll") {
            type = "Poll";
        } else if (name === "group") {
            type = "Group Maker";
        }
        const window = newWindow(type);
        screensDiv.append(window);
    }
    return (
        <div id="center">
            <div id="screensB">
                <header>
                    <h1>My Screens</h1>
                </header>
                <div id="screens"></div>
                <div id="addBtns">
                    <button onClick={onNewClick} name="screen">Add Screen</button>
                    <button onClick={onNewClick} name="poll">Add Poll</button>
                    <button onClick={onNewClick} name="group">Add Group Maker</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
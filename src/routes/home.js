import React, { useState } from "react";
import { dbService } from "../fb";

const Home = prop => {
    let type;
    const [isOpen, setIsOpen] = useState(false);
    function newWindow(type) {
        let name = `New ${type}`;
        const window = document.createElement("div");
        window.id = "newScreen"
        const windowType = document.createElement("p");
        windowType.innerText = `${type}`
        window.append(windowType);
        const windowTitle = document.createElement("h1");
        windowTitle.innerText = `${name}`;
        windowTitle.id = "newScreen_title"
        const windowForm = document.createElement("form");
        windowForm.id = "newScreen_form";
        window.append(windowTitle);
        window.append(windowForm);
        windowForm.hidden = true;
        const windowInput = document.createElement("input");
        windowInput.type = "text";
        windowInput.id = "newScreen_input"
        windowInput.value = `${name}`;
        windowForm.append(windowInput);
        const windowSubmit = document.createElement("button");
        windowSubmit.innerText = "Change";
        windowForm.append(windowSubmit);
        windowTitle.addEventListener("click", () => {
            const form = document.getElementById("newScreen_form");
            windowTitle.hidden = true;
            form.hidden = false;
        });
        windowSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            const title = document.getElementById("newScreen_title");
            windowForm.hidden = true;
            title.hidden = false;
        })
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
        if (prop.userObj !== null) {
            dbService.collection(`${prop.userObj.uid}`).doc("window").add({
                type: {type}
            })
        };
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
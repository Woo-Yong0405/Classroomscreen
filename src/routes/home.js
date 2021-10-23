import React, { useState } from "react";
import { dbService } from "../fb";

const Home = prop => {
    let type;
    const [isOpen, setIsOpen] = useState(false);
    function newWindow(type) {
        let name = `New ${type}`;
        const window = document.createElement("div");
        window.classList.add("newScreen")
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
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.id = "deleteBtn";
        btnDiv.append(deleteBtn);
        return window;
    }
    function onNewClick(event) {
        if (prop.userObj === null) {
            alert("Please sign up or log in.");
        } else {
            if (isOpen === false) {
                const {
                    target: {name}
                } = event;
                const screensDiv = document.getElementById("screens");
                type = name;
                const window = newWindow(type);
                screensDiv.append(window);
                setIsOpen(true);
                dbService.collection(`${prop.userObj.uid}`).doc("windowopen").set({
                    type: {type},
                });
                const deleteBtn = document.getElementById("deleteBtn");
                deleteBtn.addEventListener("click", () => {
                    const window = document.getElementsByClassName("newScreen");
                    window.remove();
                    setIsOpen(false);
                    dbService.doc(`${prop.userObj.uid}/windowopen`).delete();
                });
            } else {
                alert("You can only have 1 window created at a time.")
            }
        }
    }
    if (prop.isLoggedIn === true) {
        if (dbService.doc(`${prop.userObj.uid}/windowopen`) !== null) {
            type = dbService.doc(`${prop.userObj.uid}/windowopen`).type;
            const screensDiv = document.getElementById("screens");
            const window = newWindow(type);
            screensDiv.append(window);
            setIsOpen(true);
        }
    }
    return (
        <div id="center">
            <div id="screensB">
                <header>
                    <h1>My Screens</h1>
                </header>
                <div id="screens"></div>
                <div id="addBtns">
                    <button onClick={onNewClick} name="Screen">Add Screen</button>
                    <button onClick={onNewClick} name="Poll">Add Poll</button>
                    <button onClick={onNewClick} name="Group Maker">Add Group Maker</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
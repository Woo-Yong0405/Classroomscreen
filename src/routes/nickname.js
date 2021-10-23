import React from "react";
import { authService, dbService } from "../fb";

const Nickname = prop => {
    function onChange(event) {
        const {target: {value}} = event;
        const user = authService.currentUser;
        dbService.doc(`${user.uid}/userinfo`).update({
            nickname: value,
        });
        dbService.doc(`${user.uid}/userinfo`).get().then((doc) => {
            prop.setNickname(doc.data().nickname)
        })
    }
    return (
        <div id="center">
            <header>
                <h1>Change Nickname</h1>
            </header>
            <div id="nickdiv">
                <form>
                    <input type="text" placeholder="New Nickname" value={prop.nickname} required onChange={onChange} />
                </form>
            </div>
        </div>
    )
}

export default Nickname;
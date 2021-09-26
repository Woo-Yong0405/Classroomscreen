import React from "react";

const Nickname = prop => {
    function onChange(event) {
        const {target: {value}} = event;
        prop.setNickname(value);
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
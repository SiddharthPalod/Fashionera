import {proxy} from "valtio"

const state = proxy({
    intro: false,
    event: false,
    about: false,
    login: false,
});

export default state;
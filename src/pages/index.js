import {proxy} from "valtio"

const state = proxy({
    home: false,
    intro: false,
    event: false,
    about: false,
    login: false,
    merch: false,
    nav: false,
    news: false,
});

export default state;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAs4WSvyBoODJIi2VgBwZDZTwhRiBm3-e4",
    authDomain: "webradio-3904f.firebaseapp.com",
    databaseURL: "https://webradio-3904f.firebaseio.com",
    projectId: "webradio-3904f",
    storageBucket: "webradio-3904f.appspot.com",
    messagingSenderId: "96382163337",
    appId: "1:96382163337:web:15c8acd210a462da4b6958",
    measurementId: "G-6B26PSM2BT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
analytics = firebase.analytics()

const searcher = document.querySelector('.searchInput')
const searchSubmit = document.querySelector('.searchSubmit')

const content = document.querySelector('main.content')
const description = document.querySelector('.pageDescription')
const settings = document.querySelector('.pageSettings')

const card = document.querySelector('.mdc-card')

const settingsButton = document.querySelector('.settings-button')
const darkModeSwitcher = document.querySelector('#dark-mode-switch')
const switchTop = document.querySelector('.switch-top')
const closeButton = document.querySelector('.close-button')

searchSubmit.addEventListener('click', () => {
    analytics.logEvent('search_radios')
    let searchQuery = searcher.value
    content.innerHTML = ""

    if(searchQuery === "" || searchQuery === "radio") {
        content.innerHTML = '<h1>Ta fraza wyszukiwania spowoduje, że twój komputer się zatnie. Nie rób tak więcej, proszę.</h1>'
    } else {
        if(searchQuery === "/benchmark") searchQuery = ""
        fetch(`https://de1.api.radio-browser.info/json/stations/byname/${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                data.forEach((elem) => {
                    const stationUUID = elem.stationuuid
                    const stationName = elem.name
                    const stationCodec = elem.codec
                    window.stationURL = elem.url_resolved
                    const stationFavicon = elem.favicon
                    const testAudioStream = new Audio(stationURL)

                    const cardTemplate = document.createElement('div')
                    cardTemplate.classList = 'mdc-card mdc-card-outlined'
                    cardTemplate.innerHTML = `<div class="my-card__media mdc-card__media mdc-card__media--16-9"><img src="${stationFavicon}" class="mdc-card__media-content" alt="Station Favicon" width="64" height="64"></div><span class="stationName">${stationName}</span><button data-playing="false" class="controls-play" role="switch" aria-checked="false"><span class="mdi mdi-play play"></span><audio src="${stationURL}"></audio></button>`

                    content.append(cardTemplate)
                })

                const playButton = document.querySelectorAll('.controls-play');
                const icon = document.querySelectorAll('.play')
                const audio = document.querySelectorAll('audio')

                playButton.forEach((button, i) => {
                    analytics.logEvent('play_radio')
                    button.addEventListener('click', () => {
                        if (button.dataset.playing === 'false') {
                            audio[i].play();
                            button.dataset.playing = 'true'
                            icon[i].classList = 'mdi mdi-pause pause'
                            // if track is playing pause it
                        } else if (button.dataset.playing === 'true') {
                            audio[i].pause();
                            button.dataset.playing = 'false'
                            icon[i].classList = 'mdi mdi-play play'
                        }

                        let state = button.getAttribute('aria-checked') === "true" ? true : false
                        button.setAttribute( 'aria-checked', state ? "false" : "true" );
                    })
                })

            })
        }
    })

settingsButton.addEventListener('click', () => {
    if(settingsButton.dataset.checked === 'false'){
        description.style.display = 'none'
        settings.style.display = 'block'
        settingsButton.dataset.checked = 'true'
    } else if(settingsButton.dataset.checked === 'true') {
        description.style.display = 'block'
        settings.style.display = 'none'
        settingsButton.dataset.checked = 'false'
    }
})

darkModeSwitcher.addEventListener('click', () => {
    if(darkModeSwitcher.dataset.checked === 'false'){
        darkModeSwitcher.checked = true
        switchTop.classList = 'mdc-switch mdc-switch--checked switch-top'
        darkModeSwitcher.dataset.checked = 'true'
        document.body.style.background = '#121212'
        document.body.style.color = '#fff'
        card.style.background = '#121212'

        localStorage.setItem('background', '#121212')
        localStorage.setItem('color', '#fff')
    } else if(darkModeSwitcher.dataset.checked === 'true') {
        darkModeSwitcher.checked = true
        switchTop.classList = 'mdc-switch switch-top'
        darkModeSwitcher.dataset.checked = 'false'
        document.body.style.background = '#fff'
        document.body.style.color = '#121212'

        localStorage.setItem('background', '#fff')
        localStorage.setItem('color', '#121212')
    }
})

closeButton.addEventListener('click', () => {
    description.style.display = 'block'
    settings.style.display = 'none'
})
/*
let lang
const searchButton = document.getElementById("searchbutton");
const content = document.querySelector('#content');
const note = document.getElementById("note")
const searcher = document.getElementById("search");
const settingsIcon = document.getElementsByClassName('settingsIcon')

const langCheckbox = document.querySelector("#langCheckbox")

const subheader = document.querySelector("#subheader")
const searchLabel = document.querySelector("#searchLabel")
const langLabel = document.querySelector("#langLabel")
const legacyInfo = document.querySelector("#legacyInfo")

langCheckbox.addEventListener("click", () => {
    if (langCheckbox.checked) {
        fetch("https://raw.githubusercontent.com/web-radio/webradio/master/languages/polish.json")
            .then(response => response.json())
            .then(data => {
                lang = data
                subheader.textContent = data.header
                searchLabel.textContent = data.searchText
                langLabel.textContent = data.langInfo
                legacyInfo.textContent = data.legacyInfo
            })
    } else {
        fetch("https://raw.githubusercontent.com/web-radio/webradio/master/languages/english.json")
            .then(response => response.json())
            .then(data => {
                lang = data
                subheader.textContent = data.header
                searchLabel.textContent = data.searchText
                langLabel.textContent = data.langInfo
                legacyInfo.textContent = data.legacyInfo
            })
    }
})

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://raw.githubusercontent.com/web-radio/webradio/master/languages/polish.json")
        .then(response => response.json())
        .then(data => {
            lang = data
            subheader.textContent = data.header
            searchLabel.textContent = data.searchText
            langLabel.textContent = data.langInfo
            legacyInfo.textContent = data.legacyInfo
        })
})
*/

import { Router } from "./router.js";

const router = new Router

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/404", "/pages/404.html")
router.add("/informations", "/pages/informations.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()



let universe = document.querySelector(".universeButton")
let universeBg = document.querySelector(".page2")
let exploration = document.querySelector(".explorationButton")
let explorationBg = document.querySelector(".page3")
let home = document.querySelector(".homeButton")
let homeBg = document.querySelector(".page1")

let homeSVG = document.querySelector(".homeSVG")
let explorationSVG = document.querySelector(".explorationSVG")
let universeSVG = document.querySelector(".universeSVG")

const buttonHome = document.getElementById("#home")

import { Events } from "./events.js";

const events = new Events

events.changeBg(universe, universeBg, explorationBg, homeBg)
events.changeBg(exploration, explorationBg, universeBg, homeBg)
events.changeBg(home, homeBg, explorationBg, universeBg)

events.navSelected(universe, universeSVG, explorationSVG, homeSVG)
events.navSelected(exploration, explorationSVG, universeSVG, homeSVG)
events.navSelected(home, homeSVG, explorationSVG, universeSVG)
events.navSelected(buttonHome, universeSVG, explorationSVG, homeSVG)
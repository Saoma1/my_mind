import "index.css"
import * as Turbo from "@hotwired/turbo"
import { Application } from "@hotwired/stimulus"

// Uncomment the line below to add transition animations when Turbo navigates.
// We recommend adding <meta name="turbo-cache-control" content="no-preview" />
// to your HTML head if you turn on transitions. Use data-turbo-transition="false"
// on your <main> element for pages where you don't want any transition animation.
//
// import "./turbo_transitions.js"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

application = Application.start()

// external
import Reveal from 'stimulus-reveal-controller'
application.register('reveal', Reveal)

// internal
import controllers from "./controllers/**/*.{js,js.rb}"
Object.entries(controllers).forEach(([filename, controller]) => {
    if (filename.includes("_controller.") || filename.includes("-controller.")) {
        const identifier = filename.replace("./controllers/", "")
        .replace(/[_-]controller\..*$/, "")
        .replace("_", "-")
        .replace("/", "--")
        
        application.register(identifier, controller.default)
    }
})

// debugging
console.info("Bridgetown is loaded!")
export class Router {
    rota = {}

    add(href, link) {
        this.rota[href] = link
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const {pathname} = window.location
        
        const way = this.rota[pathname] || this.rota["/404"]
        console.log(way)
        
        fetch(way).then(data => data.text()).then((html) => {document.querySelector("#app").innerHTML =html})
    }
    
}
const actions = {
    "google": "https://www.google.com/",
    "bing": "https://www.bing.com/",
    "duckduckgo": "https://duckduckgo.com/",
    "ask": "https://www.ask.com/"
}
    
window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function() {
        console.log("Test message");
        let selectedEngine=document.querySelector("input[name=engine]:checked")
        engineValue= selectedEngine.value;
        form.setAttribute("action", actions[engineValue]);
    })
})

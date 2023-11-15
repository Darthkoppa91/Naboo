console.log("hello world");


function navigatorDetails() {
    console.log("Platform=>", navigator.platform);
    console.log("Platform=>", navigator.appVersion);
    console.log("App name =>",navigator.appName)

}
// navigatorDetails();


function isOnline () {
    // if(window.navigator.isOnline) {
    //     console.log("Is online")
    // }
    // else {
    //     console.log("Is offline")

        console.log(window.navigator.isOnline ? console.log("onliIne"): console.log("offline"))
    }
    //  isOnline();

     function infoPrint () {
        console.log("Browser width =>", window.screen.availHeight)
        console.log("Browser width ", window.screen.availWidth)
        console.log("Location =>", window.location.href) 
        console.log("Location domain=>", window.location.hostname) 
        console.log("Location protocol =>", window.location.protocol); 
        console.log("Location parametters =>", window.location.search )
     }
    //  infoPrint();

     function reloading () {
        console.log("reloading=>", window.location.reload)

     }
    //  reloading(reload());

    localStorage.setItem("message","hello");
    localStorage.setItem("item1",1);
    localStorage.setItem("basket","basket!");

    console.log(localStorage.getItem("message"));
    


    
    setTimeout(() => {localStorage.clear();
     sessionStorage.clear()
    }, 5000) 

    
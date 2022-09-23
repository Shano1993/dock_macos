let navbar = document.querySelector("#navbar");

function addLink(link, img) {
    const newLink = document.createElement("a");
    newLink.href = link;
    newLink.className = "link";
    newLink.style.backgroundImage = img;
    newLink.addEventListener("mouseenter", function () {
        newLink.style.transform = "scale(1.5)";
    });
    newLink.addEventListener("mouseout", function () {
        newLink.style.transform = "scale(1)";
    });
    navbar.appendChild(newLink);
}

addLink("https://www.facebook.com", "url('/assets/img/facebook.png')");
addLink("https://www.messenger.com", "url('/assets/img/messenger.png')");
addLink("https://www.youtube.com", "url('/assets/img/youtube.png')")
addLink("https://www.instagram.com", "url('/assets/img/instagram.png')");
addLink("https://www.twitter.com", "url('/assets/img/twitter.jpg')")
addLink("https://www.whatsapp.com", "url('/assets/img/whatsapp.png')");
addLink("https://www.amazon.com", "url('/assets/img/amazon.png')")
addLink("https://www.snapchat.com", "url('/assets/img/snapchat.png')");
addLink("https://www.tiktok.com", "url('/assets/img/tiktok.png')");
addLink("https://www.netflix.com", "url('/assets/img/netflix.jpg')");
addLink("https://www.google.com", "url('/assets/img/chrome.jpg')");
addLink("https://www.twitch.com", "url('/assets/img/twitch.png')");
addLink("https://www.discord.com", "url('/assets/img/discord.png')");
addLink("https://www.shazam.com", "url('/assets/img/shazam.png')");
addLink("https://www.outlook.com", "url('/assets/img/outlook.png')");

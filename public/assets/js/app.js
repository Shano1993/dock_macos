let navbar = document.querySelector("#navbar");
let backGround = document.querySelector("#background");
let high = document.querySelector("#high");
let down = document.querySelector("#down");

const arrayImage = [
    "url('/assets/img/facebook.png')",
    "url('/assets/img/messenger.png')",
    "url('/assets/img/youtube.png')",
    "url('/assets/img/instagram.png')",
    "url('/assets/img/twitter.jpg')",
    "url('/assets/img/whatsapp.png')",
    "url('/assets/img/amazon.png')",
    "url('/assets/img/snapchat.png')",
    "url('/assets/img/tiktok.png')",
    "url('/assets/img/netflix.jpg')",
    "url('/assets/img/chrome.jpg')",
    "url('/assets/img/twitch.png')",
    "url('/assets/img/discord.png')",
    "url('/assets/img/shazam.png')",
    "url('/assets/img/outlook.png')"
]

const arrayLink = [
    "https://www.facebook.com",
    "https://www.messenger.com",
    "https://www.youtube.com",
    "https://www.instagram.com",
    "https://www.twitter.com",
    "https://www.whatsapp.com",
    "https://www.amazon.com",
    "https://www.snapchat.com",
    "https://www.tiktok.com",
    "https://www.netflix.com",
    "https://www.google.com",
    "https://www.twitch.com",
    "https://www.discord.com",
    "https://www.shazam.com",
    "https://www.outlook.com"
]

const arrayInfo = [
    "Facebook",
    "Messenger",
    "Youtube",
    "Instagram",
    "Twitter",
    "Whatsapp",
    "Amazon",
    "Snapchat",
    "Tiktok",
    "Netflix",
    "Chrome",
    "Twitch",
    "Discord",
    "Shazam",
    "Outlook"
]

let icon = function (logo, link, info) {
    this.logo = logo;
    this.link = link;
    this.info = info;

    this.addLogo = function () {
        for (let i = 0; i < arrayImage.length; i++) {
            const newLink = document.createElement("a");
            newLink.className = "link";
            newLink.style.backgroundImage = this.logo[i];
            newLink.href = this.link[i];
            newLink.title = this.info[i];
            navbar.prepend(newLink);
            newLink.addEventListener("mouseenter", function () {
                setTimeout(() => {
                    newLink.style.transform = "scale(1.1)";
                    newLink.style.translate = "0 -20px"
                }, 100)
            });
            newLink.addEventListener("mouseout", function () {
                setTimeout(() => {
                    newLink.style.transform = "scale(1)";
                    newLink.style.margin = "0";
                    newLink.style.translate = "0 0"
                }, 250)
            });
        }
    }
}

let icons = new icon(arrayImage, arrayLink, arrayInfo);
icons.addLogo();

high.addEventListener("click", function () {
    backGround.style.justifyContent = "flex-start";
})

down.addEventListener("click", function () {
    backGround.style.justifyContent = "flex-end";
})

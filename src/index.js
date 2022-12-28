async function changeImage() {
    catFrame = document.getElementById("catFrame");
    const address  = await fetch("https://api.thecatapi.com/v1/images/search");
    var data = await address.json()
    catFrame.data = data[0]["url"];
    console.log(data[0]["url"])
}

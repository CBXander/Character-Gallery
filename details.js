const params = new URLSearchParams(window.location.search);
const character = params.get("character");
const data = {
    viego: {
        name: "Viego, The Ruined King",
        image: "images/viego.jpg",
        description: "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving specter tortured by an obsessive longing for his centuries-dead queen, Viego now stands as the Ruined King, controlling the deadly Harrowings as he scours Runeterra for anything that might one day restore her, and destroying all in his path as the Black Mist pours endlessly from his cruel, broken heart."
    },

    kindred: {
        name: "Kindred, The Eternal Hunters",
        image: "images/kindred.png",
        description: "Separate, but never parted, Kindred represents the twin essences of death. Lamb's bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his crushing jaws. Though interpretations of Kindred's nature vary across Runeterra, every mortal must choose the true face of their death."        
    },


    diana: {
        name: "Diana, Scorn of the Moon",
        image: "images/diana.png",
        description: "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon’s power. Imbued with the essence of an Aspect from beyond Targon’s towering summit, Diana is no longer wholly human, and struggles to understand her power and purpose in this world."
    },




    morgana: {
        name: "Morgana, The Fallen",
        image: "images/morgana.jpg",
        description: "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire. More than anything else, Morgana truly believes that even the banished and outcast may one day rise again."
    },

    jhin: {
        name: "Jhin, The Virtuoso",
        image: "images/jhin.jpg",
        description: "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror."
    },


}

if (data[character]){
    document.getElementById("name").textContent = data[character].name;
    document.getElementById("image").src = data[character].image;
    document.getElementById("description").textContent = data[character].description;
}
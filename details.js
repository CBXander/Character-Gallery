// Read character from URL
const params = new URLSearchParams(window.location.search);
const character = params.get("character");

// Character Data
const data = {
    viego: {
        name: "Viego, The Ruined King",
        image: "images/viego.jpg",
        description: "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving specter tortured by an obsessive longing for his centuries-dead queen, Viego now stands as the Ruined King, controlling the deadly Harrowings as he scours Runeterra for anything that might one day restore her, and destroying all in his path as the Black Mist pours endlessly from his cruel, broken heart.",
        region: "Shadow Isles",
        role: "Fighter / Assassin",
        abilities: [
            { name: "Passive - Sovereign’s Domination", description:"Viego can temporarily possess enemy champions he helps kill, healing for a portion of their max health. During possession, Viego's items, attacks, and non-ultimate abilities become those of his slain enemy's, and he gains a free cast of his own ultimate, Heartbreaker. While possessing an enemy, Viego also gets bonus movement speed when moving toward enemy champions."},
            { name: "Q - Blade of the Ruined King", description:"Passive: Viego’s attacks deal a percent of the target's current health as bonus damage on-hit. When Viego attacks an enemy he recently hit with an ability, the attack strikes twice. The second strike siphons health from the target instead of dealing regular damage, but still applies on-hit effects and can critically strike. This passive is maintained during possession. \nActive: Viego stabs forward with his blade, damaging all enemies hit."},
            { name: "W - Spectral Maw", description:"Viego charges up and then dashes forward, hurling a blast of mist that stuns and damages the first enemy hit. Stun duration and mist range increase with charge time, damage and dash range don't."},
            { name: "E - Harrowed Path", description:"Viego spreads a wave of Black Mist around a nearby wall. While in the mist, Viego becomes Camouflaged and gains Attack Speed and Movement Speed."},
            { name: "R - Heartbreaker", description:"Viego discards any bodies he is currently possessing and teleports forward, attacking the enemy champion in range with the lowest percent health and dealing bonus damage based on their missing health. Other enemies in range are knocked away."},
        ]
    },

    kindred: {
        name: "Kindred, The Eternal Hunters",
        image: "images/kindred.png",
        description: "Separate, but never parted, Kindred represents the twin essences of death. Lamb's bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his crushing jaws. Though interpretations of Kindred's nature vary across Runeterra, every mortal must choose the true face of their death.",
        region: "Runeterra",
        role: "Marksman",
        abilities: [
            { name: "Passive - Mark of the Kindred", description:"Kindred can mark targets to Hunt. Successfully completing a Hunt permanently empowers Kindred's basic abilities. Every 4 hunts completed also increases Kindred's basic attack range."},
            { name: "Q - Dance of Arrows", description:"Kindred tumbles and shoots up to three arrows at nearby targets."},
            { name: "W - Wolf's Frenzy", description:"Wolf enrages and attacks enemies around him. Lamb passively gains stacks by moving and attacking. When fully charged, Lamb's next attack restores health."},
            { name: "E - Mounting Dread", description:"Lamb fires a carefully placed shot, slowing the target. If Lamb attacks the target two more times, her third attack instead directs Wolf to pounce on the enemy, savaging them for massive damage."},
            { name: "R - Lamb's Respite", description:"Lamb grants all living things inside a zone a respite from death. Until the effect ends, nothing can die. At the end, units are healed."},
        ]
    },


    diana: {
        name: "Diana, Scorn of the Moon",
        image: "images/diana.png",
        description: "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon’s power. Imbued with the essence of an Aspect from beyond Targon’s towering summit, Diana is no longer wholly human, and struggles to understand her power and purpose in this world.",
        region: "Mount Targon",
        role: "Fighter / Assassin",
        abilities: [
            { name: "Passive - Moonsilver Blade", description:"Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for 5 seconds."},
            { name: "Q - Crescent Strike", description:"Unleashes a bolt of lunar energy in an arc dealing magic damage. Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds."},
            { name: "W - Pale Cascade", description:"Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength."},
            { name: "E - Lunar Rush", description:"Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage. Lunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush."},
            { name: "R - Moonfall", description:"Diana reveals and draws in all nearby enemies and slows them. If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled."},
        ]
    },




    morgana: {
        name: "Morgana, The Fallen",
        image: "images/morgana.jpg",
        description: "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire. More than anything else, Morgana truly believes that even the banished and outcast may one day rise again.",
        region: "Demacia",
        role: "Support / Mage",
        abilities: [
            { name: "Passive - Soul Siphon", description:"Morgana drains spirit from her enemies, healing as she deals damage to champions, large minions, and medium and larger jungler monsters."},
            { name: "Q - Dark Binding", description:"Morgana binds an enemy in place with dark magic, forcing them to feel the pain they've caused and dealing magic damage."},
            { name: "W - Tormented Shadow", description:"Morgana casts a cursed shadow on an area, damaging enemies who dare stand in her dark circle. They receive magic damage over time, which increases the lower health they are."},
            { name: "E - Black Shield", description:"Morgana anoints an ally with a protective barrier of starfire, which absorbs magical damage and disabling effects until it is broken."},
            { name: "R - Soul Shackles", description:"Morgana unleashes the full force of her Celestial power as she unbinds her wings and hovers above the ground. She lashes chains of dark pain onto nearby enemy champions, gaining Move Speed. The chains slow and deal initial damage and, after a delay, stun those who are unable to break them."},
        ]
    },

    jhin: {
        name: "Jhin, The Virtuoso",
        image: "images/jhin.jpg",
        description: "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror.",
        role: "Marksman",
        abilities: [
            { name: "Passive - Whisper", description:"Jhin's hand cannon, Whisper, is a precise instrument designed to deal superior damage. It fires at a fixed rate and carries only four shots. Jhin imbues the final bullet with dark magics to critically strike and deal bonus execute damage. Whenever Whisper crits, it inspires Jhin with a burst of Move Speed."},
            { name: "Q - Dancing Grenade", description:"Jhin launches a magical cartridge at an enemy. It can hit up to four targets and gains damage each time it kills."},
            { name: "W - Deadly Flourish", description:"Jhin brandishes his cane, firing a single shot with incredible range. It pierces through minions and monsters, but stops on the first champion hit. If the target was recently struck by Jhin's allies, lotus traps, or damaged by Jhin, they are rooted."},
            { name: "E - Captive Audience", description:"Jhin places an invisible lotus trap that blooms when walked over. It slows nearby enemies before dealing damage with an explosion of serrated petals. \nBeauty in Death - When Jhin kills an enemy champion, a lotus trap will bloom near their corpse."},
            { name: "R - Curtain Call", description:"Jhin channels, transforming Whisper into a shoulder-mounted mega-cannon. It is able to fire 4 super shots at extreme range that pierce through minions and monsters, but stop on the first champion impacted. Whisper cripples enemies hit, which slows them and deals execute damage. The 4th shot is perfectly crafted, epically powerful, and guaranteed to critically strike."},
        ]
    }

    

};
// populate character data
const c = data[character];

// SIDEBAR
const sidebarList = document.getElementById("championList");

if (sidebarList) {
    Object.keys(data).forEach(key => {
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.href = `details.html?character=${key}`;
        link.textContent = data[key].name;

        if (key === character) {
            link.classList.add("active");
        }

        li.appendChild(link);
        sidebarList.appendChild(li);
    });
}
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".details-sidebar");

if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");

        toggleBtn.textContent = sidebar.classList.contains("collapsed")
            ? "Champions ▾"
            : "Champions ▴";
    });
}
// Display abilities and descriptions
if (c){

    const image = document.getElementById("image");
    const button = document.getElementById("toggleImage");

    button.addEventListener("click", function () {
        image.classList.toggle("big");

        if (image.classList.contains("big")) {
            button.textContent = "Shrink Image";
        } else {
            button.textContent = "Enlarge Image";
        }
    });

    document.getElementById("name").textContent = c.name;
    document.getElementById("image").src = c.image;
    document.getElementById("description").textContent = c.description;
    document.getElementById("region").textContent = c.region;
    document.getElementById("role").textContent = c.role;

    const abilityList = document.getElementById("abilities");
    abilityList.innerHTML = "";

    c.abilities.forEach(function(ability) {
        const li = document.createElement("li");
        const title = document.createElement("strong");
        
        title.textContent = ability.name;
        title.textContent = ability.name;        
        li.appendChild(title);
        
        // Formats description if ability has \n
        if (ability.description.includes("\n")){
            const parts = ability.description.split("\n");

            parts.forEach(function(part){
                const p = document.createElement("p");
                p.textContent = part;
                li.appendChild(p); 
        });
    } else {
        const p = document.createElement("p");
        p.textContent = ability.description;
        li.appendChild(p);
    }

        
        abilityList.appendChild(li);
});


} else {
    document.querySelector(".details").innerHTML = "<p>Character not found.</p>";
}
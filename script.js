let timerStarted = false;
        let caughtCount = 0;
        let pokemonURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

        const pokemon = [
            { index: 1, name: "Bulbasaur" },
            { index: 2, name: "Ivysaur" },
            { index: 3, name: "Venusaur" },
            { index: 4, name: "Charmander" },
            { index: 5, name: "Charmeleon" },
            { index: 6, name: "Charizard" },
            { index: 7, name: "Squirtle" },
            { index: 8, name: "Wartortle" },
            { index: 9, name: "Blastoise" },
            { index: 10, name: "Caterpie" },
            { index: 11, name: "Metapod" },
            { index: 12, name: "Butterfree" },
            { index: 13, name: "Weedle" },
            { index: 14, name: "Kakuna" },
            { index: 15, name: "Beedrill" },
            { index: 16, name: "Pidgey" },
            { index: 17, name: "Pidgeotto" },
            { index: 18, name: "Pidgeot" },
            { index: 19, name: "Rattata" },
            { index: 20, name: "Raticate" },
            { index: 21, name: "Spearow" },
            { index: 22, name: "Fearow" },
            { index: 23, name: "Ekans" },
            { index: 24, name: "Arbok" },
            { index: 25, name: "Pikachu" },
            { index: 26, name: "Raichu" },
            { index: 27, name: "Sandshrew" },
            { index: 28, name: "Sandslash" },
            { index: 29, name: "NidoranF" },
            { index: 30, name: "Nidorina" },
            { index: 31, name: "Nidoqueen" },
            { index: 32, name: "NidoranM" },
            { index: 33, name: "Nidorino" },
            { index: 34, name: "Nidoking" },
            { index: 35, name: "Clefairy" },
            { index: 36, name: "Clefable" },
            { index: 37, name: "Vulpix" },
            { index: 38, name: "Ninetales" },
            { index: 39, name: "Jigglypuff" },
            { index: 40, name: "Wigglytuff" },
            { index: 41, name: "Zubat" },
            { index: 42, name: "Golbat" },
            { index: 43, name: "Oddish" },
            { index: 44, name: "Gloom" },
            { index: 45, name: "Vileplume" },
            { index: 46, name: "Paras" },
            { index: 47, name: "Parasect" },
            { index: 48, name: "Venonat" },
            { index: 49, name: "Venomoth" },
            { index: 50, name: "Diglett" },
            { index: 51, name: "Dugtrio" },
            { index: 52, name: "Meowth" },
            { index: 53, name: "Persian" },
            { index: 54, name: "Psyduck" },
            { index: 55, name: "Golduck" },
            { index: 56, name: "Mankey" },
            { index: 57, name: "Primeape" },
            { index: 58, name: "Growlithe" },
            { index: 59, name: "Arcanine" },
            { index: 60, name: "Poliwag" },
            { index: 61, name: "Poliwhirl" },
            { index: 62, name: "Poliwrath" },
            { index: 63, name: "Abra" },
            { index: 64, name: "Kadabra" },
            { index: 65, name: "Alakazam" },
            { index: 66, name: "Machop" },
            { index: 67, name: "Machoke" },
            { index: 68, name: "Machamp" },
            { index: 69, name: "Bellsprout" },
            { index: 70, name: "Weepinbell" },
            { index: 71, name: "Victreebel" },
            { index: 72, name: "Tentacool" },
            { index: 73, name: "Tentacruel" },
            { index: 74, name: "Geodude" },
            { index: 75, name: "Graveler" },
            { index: 76, name: "Golem" },
            { index: 77, name: "Ponyta" },
            { index: 78, name: "Rapidash" },
            { index: 79, name: "Slowpoke" },
            { index: 80, name: "Slowbro" },
            { index: 81, name: "Magnemite" },
            { index: 82, name: "Magneton" },
            { index: 83, name: "Farfetch'd" },
            { index: 84, name: "Doduo" },
            { index: 85, name: "Dodrio" },
            { index: 86, name: "Seel" },
            { index: 87, name: "Dewgong" },
            { index: 88, name: "Grimer" },
            { index: 89, name: "Muk" },
            { index: 90, name: "Shellder" },
            { index: 91, name: "Cloyster" },
            { index: 92, name: "Gastly" },
            { index: 93, name: "Haunter" },
            { index: 94, name: "Gengar" },
            { index: 95, name: "Onix" },
            { index: 96, name: "Drowzee" },
            { index: 97, name: "Hypno" },
            { index: 98, name: "Krabby" },
            { index: 99, name: "Kingler" },
            { index: 100, name: "Voltorb" },
            { index: 101, name: "Electrode" },
            { index: 102, name: "Exeggcute" },
            { index: 103, name: "Exeggutor" },
            { index: 104, name: "Cubone" },
            { index: 105, name: "Marowak" },
            { index: 106, name: "Hitmonlee" },
            { index: 107, name: "Hitmonchan" },
            { index: 108, name: "Lickitung" },
            { index: 109, name: "Koffing" },
            { index: 110, name: "Weezing" },
            { index: 111, name: "Rhyhorn" },
            { index: 112, name: "Rhydon" },
            { index: 113, name: "Chansey" },
            { index: 114, name: "Tangela" },
            { index: 115, name: "Kangaskhan" },
            { index: 116, name: "Horsea" },
            { index: 117, name: "Seadra" },
            { index: 118, name: "Goldeen" },
            { index: 119, name: "Seaking" },
            { index: 120, name: "Staryu" },
            { index: 121, name: "Starmie" },
            { index: 122, name: "Mr. Mime" },
            { index: 123, name: "Scyther" },
            { index: 124, name: "Jynx" },
            { index: 125, name: "Electabuzz" },
            { index: 126, name: "Magmar" },
            { index: 127, name: "Pinsir" },
            { index: 128, name: "Tauros" },
            { index: 129, name: "Magikarp" },
            { index: 130, name: "Gyarados" },
            { index: 131, name: "Lapras" },
            { index: 132, name: "Ditto" },
            { index: 133, name: "Eevee" },
            { index: 134, name: "Vaporeon" },
            { index: 135, name: "Jolteon" },
            { index: 136, name: "Flareon" },
            { index: 137, name: "Porygon" },
            { index: 138, name: "Omanyte" },
            { index: 139, name: "Omastar" },
            { index: 140, name: "Kabuto" },
            { index: 141, name: "Kabutops" },
            { index: 142, name: "Aerodactyl" },
            { index: 143, name: "Snorlax" },
            { index: 144, name: "Articuno" },
            { index: 145, name: "Zapdos" },
            { index: 146, name: "Moltres" },
            { index: 147, name: "Dratini" },
            { index: 148, name: "Dragonair" },
            { index: 149, name: "Dragonite" },
            { index: 150, name: "Mewtwo" },
            { index: 151, name: "Mew" }
        ];

        const baseURL = "https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-180x180.png";

        // Generating images for all Pokémon
        pokemon.forEach(poke => {
            const img = document.createElement('img');
            img.src = baseURL;
            img.alt = poke.name;
            img.dataset.index = poke.index;
            document.querySelector('#pokemon-container').appendChild(img);
        });

        function checkPokemonName(input) {
            const pokemonName = input.trim().toLowerCase();
            const matchedPokemon = pokemon.find(p => p.name.toLowerCase() === pokemonName);

            if (matchedPokemon) {
                const imgElements = document.querySelectorAll('#pokemon-container img');
                imgElements.forEach(img => {
                    if (parseInt(img.dataset.index) === matchedPokemon.index) {
                        img.src = `${pokemonURL}${img.dataset.index}.png`;
                        caughtCount++;
                        document.getElementById('caught-count').textContent = caughtCount;
                        img.removeAttribute('data-index');
                        document.querySelector('input').value = ''    
                    }
                });


                if (caughtCount === 151) {
                    clearInterval(countdown);
                    showModal("You win!");
                }
            }
        }

        let countdown;
        document.querySelector('#pokemon-input').addEventListener('input', function () {
            checkPokemonName(this.value);

            if (!timerStarted) {
                timerStarted = true;
                clearInterval(countdown);
                const display = document.getElementById('timer');
                let time = 300; // 5 minutes in seconds

                countdown = setInterval(() => {
                    const minutes = Math.floor(time / 60);
                    const seconds = time % 60;

                    display.textContent = `${ minutes }:${ seconds < 10 ? '0' : '' }${ seconds }`;

                    if (time <= 0) {
                        clearInterval(countdown);
                        showModal("You lose!");
                        display.textContent = "0:00";
                    } else {
                        time--;
                    }
                }, 1000);
            }
        });

        function showModal(message) {
            const modal = document.getElementById("resultModal");
            const span = document.getElementsByClassName("close")[0];
            document.getElementById("resultMessage").textContent = message;
            modal.style.display = "flex";

            span.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }

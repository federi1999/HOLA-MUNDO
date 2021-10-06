const pokedex = document.getElementById('pokedex');
	const clasi = document.getElementById("clasificacion");
	

	

	

	

	/*
	  const fetchPokemonTipo = (clasi) => {
	    if(clasi === "Todas las clasificaiones"){
	      clasi = ''
	    }
	    const promises = [];
	    for (let i = 1; i <= 850; i++) {
	        const url = `https://pokeapi.co/api/v2/contest-type/${id}`;
	        promises.push(fetch(url).then((res) => res.json()));
	    }
	    
	    Promise.all(promises).then((results) => {
	        const pokemon = results.map((result) => ({
	            name: result.name,
	            image: result.sprites['front_default'],
	            type: result.types.map((type) => type.type.name).join(', '),
	            id: result.id
	        }));
	        displayPokemonTipo(pokemon);
	        
	    });
	};
	
	
	
	
	const displayPokemonTipo = (pokemon) => {
	    console.log(pokemon);
	    const pokemonHTMLString = pokemon
	        .map(
	            (pokeman) => `
	        <li class="card">
	            <img class="card-image" src="${pokeman.image}"/>
	            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
	            <p class="card-subtitle">Type: ${pokeman.type}</p>
	        </li>
	    `
	        )
	        .join('');
	    pokedex.innerHTML = pokemonHTMLString;
	};
	
	fetchPokemonTipo();
	
	*/
	

	

	

	      
	

	const fetchPokemon = (tipo) => {
	 
	    const promises = [];
	    for (let i = 1; i <= 850; i++) {
	        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
	        promises.push(fetch(url).then((res) => res.json()));
	    }
	    Promise.all(promises).then((results) => {
	        const pokemon = results.map((result) => ({
	            name: result.name,
	            image: result.sprites['front_default'],
	            
	            type: result.types.map((type) => type.type.name).join(', '),
	            id: result.id
	        }));
	        displayPokemon(pokemon);
	      
	    });
	};
	

	

	

	

	const displayPokemon = (pokemon) => {
	    console.log(pokemon);
	    const pokemonHTMLString = pokemon
	        .map(
	            (pokeman) => `
	        <li class="card">
	            <img class="card-image" src="${pokeman.image}"/>
	            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
	            <p class="card-subtitle">Type: ${pokeman.type}</p>
	        </li>
	    `
	        )
	        .join('');
	    pokedex.innerHTML = pokemonHTMLString;
	};
	

	fetchPokemon();

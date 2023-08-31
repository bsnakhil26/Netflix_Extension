async function getMatchData() {
    const url = 'https://netflix-data.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0191ed4bd7msh6ed88ed03cfb9a8p1bea05jsnb9737dde34c5',
            'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
        }
    };


    return await fetch(url, options)
    //return await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=eeac71e2')
        .then(data => data.json())
        .then(data => {

            const movieList = data.titles;

            if(!movieList)return [];

            const relevantData = movieList.map(titles => `${titles.jawSummary.title} `); //- ${titles.releaseDate.month} - ${titles.releaseDate.year}, ${titles.titleText.text}`);

            console.log({relevantData});

            document.getElementById("movies").innerHTML = relevantData.map(titles => `<li>${titles} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();

document.getElementById('button-1').addEventListener('click', getData);

// fetch data
async function getData() {
    const response = await fetch("https://www.boredapi.com/api/activity")
    
    .then((response) => {
        // console.log(response.json());
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        const activity = data.activity;
        document.getElementById('result').innerHTML=`<p>${activity}</p>`;
    })
    .catch((error) => {
        console.log(error);
    })
}


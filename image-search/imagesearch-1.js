// Define the API key and URL
// const API_KEY = "01183d714b06b721485dc2434b1ecd17703ea699043f1a03c3de8ac0cb6a67bd";
// const API_URL = 'https://api.pexels.com/v1/search?query=';

// let searchResults = [{"link":"://www.kasandbox.org/programming-images/avatars/spunky-sam.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/spunky-sam-green.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/purple-pi.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/purple-pi-teal.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/purple-pi-pink.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/primosaur-tree.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/primosaur-sapling.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/orange-juice-squid.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/old-spice-man.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/mr-pants.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/mr-pants-purple.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/mr-pants-green.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/marcimus.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/marcimus-red.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/marcimus-purple.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/marcimus-orange.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/duskpin-ultimate.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/duskpin-tree.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/duskpin-seedling.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/duskpin-seed.png"},
// {"link":"//www.kasandbox.org/programming-images/avatars/duskpin-sapling.png"}]
const accessKey="onTtWQh_95dIcPiy22eyO9KtrFA2ftPU-uE3UWuvb1U";
const input = document.getElementById('searchInput');
const results = document.getElementById('results');
const spinner = document.getElementById('spinner');
const searchbtnel = document.getElementById('searchbtn');
const searchResultsEL = document.getElementById("searchResults");


// for (let srclink of searchResults){
//   let resultItemEl = document.createElement("div");
//   resultItemEl.classList.add("result-item");
//   searchResultsEL.appendChild(resultItemEl);
//   // image appending
//   let imageEl = document.createElement("img");
//   imageEl.setAttribute("src",srclink);
  
//   imageEl.setAttribute("alt","No Image");
//   imageEl.setAttribute("height",250);
//   imageEl.setAttribute("widtg",350);
//   // imageEl.classList.add("");

//   resultItemEl.appendChild(imageEl);

// }

function createAndAppendresult(result){

  let {urls} = result; 
    
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEL.appendChild(resultItemEl);
    // image appending
    let imageEl = document.createElement("img");
    imageEl.setAttribute("src",urls.raw);
    
    imageEl.setAttribute("alt","No Image");
    imageEl.setAttribute("height",250);
    imageEl.setAttribute("width",350);
    imageEl.classList.add("img-size");

    resultItemEl.appendChild(imageEl);

}

function displayResults(searchResults){
  for(let srclink of searchResults ){
    createAndAppendresult(srclink);
  }

}

let page=1;
async function searchImage(){
  let search_text = input.value;  
  console.log(search_text);
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${search_text}&client_id=${accessKey}`;
  console.log(url);
  let options = {
    method: "GET"
  };
  

  await fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      let  {results}  = jsonData;
      console.log(results);
      displayResults(results);

    });
  
  }





 

 




const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#ayush');
const searchButton = document.querySelector('#search-btn');



searchInput.addEventListener('input', (e) => {
    const text=e.target.value;
    let content= cp.map((c) => {
        if(c.Topic.toLowerCase().includes(text.toLowerCase()) || c.linkToTopic.toLowerCase().includes(text.toLowerCase()) ){
            return `<div class="card mb-3 ">
            <div class="card-body">
                <a href="${ c.linkToTopic }" class="card-text btn " id="materiallist" style="font-size: 18px;" >${ c.Topic }</a>
            </div>
        </div>`
        }else{
            return '';
        }
    });
    searchResults.innerHTML=content.join('');
});

searchButton.addEventListener('click', (e) => {
    searchInput.value=`Searched For "${searchInput.value}"`;
});
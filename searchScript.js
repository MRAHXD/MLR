
const searchInput = document.getElementById('searchInput');
const container = document.getElementById('objects');
const items = container.getElementsByClassName('box');


searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();

 
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.textContent.toLowerCase();

   
    if (text.includes(searchTerm)) {
      item.style.display = 'block'; 
    } else {
      item.style.display = 'none'; 
    }
  }
});

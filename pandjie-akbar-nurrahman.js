document.getElementById('greetBtn').addEventListener('click', function() {
  const greetText = document.getElementById('greetText');

  
  const text = document.createElement('strong');
  text.textContent = "TERIMA KASIH SUDAH MELIHAT PROFIL SAYA 😎";
  greetText.appendChild(text);


  
  const img = document.createElement('img');
  img.src = 'meme.jpeg';        
  img.alt = 'Khamsamidaa';
  img.width = 200;             

  
  greetText.appendChild(img);
});
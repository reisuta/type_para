"use strict";

{
  function setWords(){
  
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0
    
  };
  
  window.onload = function start(){
    if (isPlaying === true){
      return;
    }
    
    isPlaying = true;
    
    time = Date.now();
    
    setWords();
    
  }  
  
  const words = ["red","blue","green",'white'];
  const target = document.getElementById("target");
  const result = document.getElementById('result');
  
  
  
  let time;
  let isPlaying;
  
  
  let word;
  
  
  
  const gameover = () => {
    
    clearInterval(id);
  };
  
  
  const countup = () => {
    
    let timer = document.getElementById('timer');
    let count = 10;
    
    const id = setInterval(() => {
      if (count <= 0){
        gameover();
        
        result.textContent = 'Time' + 'over';
        target.style.display = 'none';
      }
      timer.textContent = count--}, 1000);
    };
    
    
    let loc = 0;
    
    
    document.addEventListener('keydown', (e) => { 
      target.style.background = 'skyblue';
      
      
      // for(let i = 0; i < words.length; i++)
      if (e.key !== word[loc]){
        target.style.background = 'pink';
        return;
        
        
      }
      
      
      if (e.key === word[loc]){
        
        loc++;
        target.textContent = '-'.repeat(loc) + word.substring(loc);
        
      }
      
      
      // 新しい単語を複製
      if (loc === word.length){
        
        
        if (words.length === 0){
          const elapsedtime = ((Date.now() - time) / 1000).toFixed(2); 
          result.textContent = `finished! ${elapsedtime}秒`;
          
         target.style.display = 'none';
         
         return;
        }

      setWords();



    }







  document.addEventListener('click', (e) => { 
    target.textContent = words[rdn];

});

  });

};






//Removing Elements 
let politicsBtn = document.querySelector('.btn-1'); 
let bizBtn = document.querySelector('.btn-2');
let housePod = document.querySelector('.btn-3');
let lawPod = document.querySelector('.btn-4');


//append Element 
let position = document.querySelector('.hero');

function newCatBtn(politicsBtn, bizBtn, housePod, position,lawPod) {



//Creating the Elements 
let divOne = document.createElement('div');
divOne.classList.add('music-container');


let divTwo = document.createElement('div'); 
divTwo.classList.add('music-info');

let hFour = document.createElement('h4');
//this will be deleted later
// hFour.textContent = 'ukulele';  
hFour.setAttribute('id','title');

let divThree = document.createElement('div');
divThree.classList.add('progress-container');

divFour = document.createElement('div'); 
divFour.classList.add('progress');

let audioOne = document.createElement('audio');
// audioOne.src = '/music/music-player_music_ukulele.mp3';
audioOne.id = 'audio';

let divFive = document.createElement('div'); 
divFive.classList.add('img-container');

let audioImg = document.createElement('img');
// audioImg.src = '/images/ukulele.jpeg';
audioImg.alt = 'music-cover'; 
audioImg.id = 'cover';

let divSix = document.createElement('div'); 
divSix.classList.add('navigation');
//First Button
let musicBtn = document.createElement('button'); 
musicBtn.id = 'prev'; 
musicBtn.classList.add('action-btn');

let fontAwesOne = document.createElement('i'); //prev button icon
fontAwesOne.classList.add('fas');
fontAwesOne.classList.add('fa-backward');

//Second Button
let musicBtnTwo = document.createElement('button'); 
musicBtnTwo.id = 'play'; 
musicBtnTwo.classList.add('action-btn');
musicBtnTwo.classList.add('action-btn-big');

let fontAwesTwo = document.createElement('i'); //play button icon
fontAwesTwo.classList.add('fas');
fontAwesTwo.classList.add('fa-play');

//Third Button
let musicBtnThree = document.createElement('button'); 
musicBtnThree.id = 'next'; 
musicBtnThree.classList.add('action-btn');


let fontAwesThree = document.createElement('i'); //next button icon
fontAwesThree.classList.add('fas');
fontAwesThree.classList.add('fa-forward');


let divArr = [position,divOne,divTwo,hFour]; 
let divArrTwo = [divOne,audioOne];
let divArrThree = [divOne,divFive,audioImg];
let divArrFour = [divOne,divSix];

let divArrFive = [divSix,musicBtn];
let divArrSix = [musicBtn,fontAwesOne];

let divArrSeven = [divSix,musicBtnTwo];
let divArrEight = [musicBtnTwo,fontAwesTwo];

let divArrNine = [divSix,musicBtnThree];
let divArrTen = [musicBtnThree,fontAwesThree];

let divArrElvn = [divTwo,divThree,divFour]

//appending Elements
function addEl(divArr) {
    var nodes = divArr;
    for(var i = 1; i < nodes.length; i++) {
        nodes[i - 1].appendChild(nodes[i]);
    }
}


let divTotalArr = [divArr,divArrTwo,divArrThree,divArrFour,divArrFive,divArrSix,divArrSeven,divArrEight,divArrNine,divArrTen, divArrElvn];


for (let i=0; i<divTotalArr.length; i++){
    addEl(divTotalArr[i]);
}



//Audio Player 

//Song Titles - titles need to match what is in the audio folder

let songs = ['Wrongspeak Episode 15','Wrongspeak Episode 16']; //file names of the mp3



// keep track of songs 

let songIndex = (songs.length - 1); 

//initially load song info DOM 

loadSong(songs[songIndex]);

//update song details 

function loadSong(song) {
    hFour.textContent = `${song}`;
    audioOne.src = `/music/${song}.mp3`;
    audioImg.src = `/images/${song}.jpeg`;

}

function playSong() {
    divOne.classList.add('play');
    fontAwesTwo.classList.remove('fa-play'); 
    fontAwesTwo.classList.add('fa-pause');

    audioOne.play();

}; 

function pauseSong() {
    divOne.classList.remove('play');
    fontAwesTwo.classList.remove('fa-pause');
    fontAwesTwo.classList.add('fa-play'); 
    
    audioOne.pause();

};

function prevSong() {
 songIndex--

 if(songIndex < 0) {
     songIndex = songs.length -1; 
 }

 loadSong(songs[songIndex]);
 playSong();
}

function nextSong() {
    songIndex++

    if(songIndex > songs.length-1) {
        songIndex = 0; 
    }
   
    loadSong(songs[songIndex]);
    playSong();

   }

function updateProgress(e) {
    

    const {duration, currentTime} = e.srcElement;
    const songProgress = (currentTime/duration)*100;
  divFour.style.width = `${songProgress}%`;

}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioOne.duration;

    audioOne.currentTime = (clickX/width) * duration;
} 

// Event Listeners 

musicBtnTwo.addEventListener('click', () =>  { 
    const isPlaying = divOne.classList.contains('play'); //music container

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

//change song
musicBtn.addEventListener('click', prevSong);
musicBtnThree.addEventListener('click', nextSong);
audioOne.addEventListener('timeupdate', updateProgress); 
divThree.addEventListener('click', setProgress);
audioOne.addEventListener('ended', nextSong);

//END OF Music Player Add - Start of Appending/Removing Buttons
   
//Remove Main Menu of Buttons** This is where you add new Category Button
let mainMenuArr = [politicsBtn, bizBtn, housePod,lawPod] 

for (i=0; i<mainMenuArr.length; i++) {
    position.removeChild(mainMenuArr[i]);
}



     // Append Back Home Btn 
     let backHome = document.createElement('button'); 
     backHome.classList.add('btn-home');
     backHome.id = ('all-pods');

     let allPodsSpan = document.createElement('span');
     backHome.appendChild(allPodsSpan);
 
     let homeText = document.createTextNode('All Pods')
     allPodsSpan.appendChild(homeText);
     position.appendChild(backHome);


     backHome.addEventListener('click', (e) => {
         e.preventDefault();

    //remove the backHome Btn
         let removeArr = [backHome]; 

         for (i=0; i<removeArr.length; i++) {
             position.removeChild(removeArr[i])
         }
//Append the Home Buttons **this is where you add new Category Buttons

       let mainBtnArr = [politicsBtn, bizBtn, housePod,lawPod];

       for (i=0; i<mainBtnArr.length; i++) {
           position.appendChild(mainBtnArr[i]);

       }


    //Remove the Music Player 
         function removeEl(divArr) {
            var nodes = divArr;
            for(var i = 1; i < nodes.length; i++) {
                nodes[i - 1].removeChild(nodes[i]);
            }
        }
        
        
        let divTotalArr = [divArr,divArrTwo,divArrThree,divArrFour,divArrFive,divArrSix,divArrSeven,divArrEight,divArrNine,divArrTen, divArrElvn];
        
        
        for (let i=0; i<divTotalArr.length; i++){
            removeEl(divTotalArr[i]);
        }
         

        })
    

}





function newCatBtnTwo(politicsBtn, bizBtn, housePod, position,lawPod) {


    //Creating the Elements 
    let divOne = document.createElement('div');
    divOne.classList.add('music-container');
    
    
    let divTwo = document.createElement('div'); 
    divTwo.classList.add('music-info');
    
    let hFour = document.createElement('h4');
    //this will be deleted later
    // hFour.textContent = 'ukulele';  
    hFour.setAttribute('id','title');
    
    let divThree = document.createElement('div');
    divThree.classList.add('progress-container');
    
    divFour = document.createElement('div'); 
    divFour.classList.add('progress');
    
    let audioOne = document.createElement('audio');
    // audioOne.src = '/music/music-player_music_ukulele.mp3';
    audioOne.id = 'audio';
    
    let divFive = document.createElement('div'); 
    divFive.classList.add('img-container');
    
    let audioImg = document.createElement('img');
    // audioImg.src = '/images/ukulele.jpeg';
    audioImg.alt = 'music-cover'; 
    audioImg.id = 'cover';
    
    let divSix = document.createElement('div'); 
    divSix.classList.add('navigation');
    //First Button
    let musicBtn = document.createElement('button'); 
    musicBtn.id = 'prev'; 
    musicBtn.classList.add('action-btn');
    
    let fontAwesOne = document.createElement('i'); //prev button icon
    fontAwesOne.classList.add('fas');
    fontAwesOne.classList.add('fa-backward');
    
    //Second Button
    let musicBtnTwo = document.createElement('button'); 
    musicBtnTwo.id = 'play'; 
    musicBtnTwo.classList.add('action-btn');
    musicBtnTwo.classList.add('action-btn-big');
    
    let fontAwesTwo = document.createElement('i'); //play button icon
    fontAwesTwo.classList.add('fas');
    fontAwesTwo.classList.add('fa-play');
    
    //Third Button
    let musicBtnThree = document.createElement('button'); 
    musicBtnThree.id = 'next'; 
    musicBtnThree.classList.add('action-btn');
    
    
    let fontAwesThree = document.createElement('i'); //next button icon
    fontAwesThree.classList.add('fas');
    fontAwesThree.classList.add('fa-forward');
    
    
    let divArr = [position,divOne,divTwo,hFour]; 
    let divArrTwo = [divOne,audioOne];
    let divArrThree = [divOne,divFive,audioImg];
    let divArrFour = [divOne,divSix];
    
    let divArrFive = [divSix,musicBtn];
    let divArrSix = [musicBtn,fontAwesOne];
    
    let divArrSeven = [divSix,musicBtnTwo];
    let divArrEight = [musicBtnTwo,fontAwesTwo];
    
    let divArrNine = [divSix,musicBtnThree];
    let divArrTen = [musicBtnThree,fontAwesThree];
    
    let divArrElvn = [divTwo,divThree,divFour]
    
    //appending Elements
    function addEl(divArr) {
        var nodes = divArr;
        for(var i = 1; i < nodes.length; i++) {
            nodes[i - 1].appendChild(nodes[i]);
        }
    }
    
    
    let divTotalArr = [divArr,divArrTwo,divArrThree,divArrFour,divArrFive,divArrSix,divArrSeven,divArrEight,divArrNine,divArrTen, divArrElvn];
    
    
    for (let i=0; i<divTotalArr.length; i++){
        addEl(divTotalArr[i]);
    }
    
    
    
    //Audio Player 
    
    //Song Titles - titles need to match what is in the audio folder
    
    const songs = ['Todays Entrepreneur']; //file names of the mp3
    
    // keep track of songs 
    
    let songIndex = (songs.length - 1); 
    
    //initially load song info DOM 
    
    loadSong(songs[songIndex]);
    
    //update song details 
    
    function loadSong(song) {
        hFour.textContent = `${song}`;
        audioOne.src = `/music/${song}.mp3`;
        audioImg.src = `/images/${song}.jpeg`;
    
    }
    
    function playSong() {
        divOne.classList.add('play');
        fontAwesTwo.classList.remove('fa-play'); 
        fontAwesTwo.classList.add('fa-pause');
    
        audioOne.play();
    
    }; 
    
    function pauseSong() {
        divOne.classList.remove('play');
        fontAwesTwo.classList.remove('fa-pause');
        fontAwesTwo.classList.add('fa-play'); 
        
        audioOne.pause();
    
    };
    
    function prevSong() {
     songIndex--
    
     if(songIndex < 0) {
         songIndex = songs.length -1; 
     }
    
     loadSong(songs[songIndex]);
     playSong();
    }
    
    function nextSong() {
        songIndex++
    
        if(songIndex > songs.length-1) {
            songIndex = 0; 
        }
       
        loadSong(songs[songIndex]);
        playSong();
    
       }
    
    function updateProgress(e) {
        
    
        const {duration, currentTime} = e.srcElement;
        const songProgress = (currentTime/duration)*100;
      divFour.style.width = `${songProgress}%`;
    
    }
    
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioOne.duration;
    
        audioOne.currentTime = (clickX/width) * duration;
    } 
    
    // Event Listeners 
    
    musicBtnTwo.addEventListener('click', () =>  { 
        const isPlaying = divOne.classList.contains('play'); //music container
    
        if(isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    })
    
    //change song
    musicBtn.addEventListener('click', prevSong);
    musicBtnThree.addEventListener('click', nextSong);
    audioOne.addEventListener('timeupdate', updateProgress); 
    divThree.addEventListener('click', setProgress);
    audioOne.addEventListener('ended', nextSong);
    
    //END OF Music Player Add - Start of Appending/Removing Buttons
       
    //Remove Main Menu of Buttons** This is where you add new Category Button
    let mainMenuArr = [politicsBtn, bizBtn,housePod,lawPod] 
    
    for (i=0; i<mainMenuArr.length; i++) {
        position.removeChild(mainMenuArr[i]);
    }
    
    
    
         // Append Back Home Btn 
       let backHome = document.createElement('button'); 
     backHome.classList.add('btn-home');
     backHome.id = ('all-pods');
     
     let allPodsSpan = document.createElement('span');
     backHome.appendChild(allPodsSpan);
 
     let homeText = document.createTextNode('All Pods')
     allPodsSpan.appendChild(homeText);
     position.appendChild(backHome);
    
    
         backHome.addEventListener('click', (e) => {
             e.preventDefault();
    
        //remove the backHome Btn
             let removeArr = [backHome]; 
    
             for (i=0; i<removeArr.length; i++) {
                 position.removeChild(removeArr[i])
             }
    //Append the Home Buttons **this is where you add new Category Buttons
    
           let mainBtnArr = [politicsBtn, bizBtn,housePod,lawPod];
    
           for (i=0; i<mainBtnArr.length; i++) {
               position.appendChild(mainBtnArr[i]);
    
           }
    
    
        //Remove the Music Player 
             function removeEl(divArr) {
                var nodes = divArr;
                for(var i = 1; i < nodes.length; i++) {
                    nodes[i - 1].removeChild(nodes[i]);
                }
            }
            
            
            let divTotalArr = [divArr,divArrTwo,divArrThree,divArrFour,divArrFive,divArrSix,divArrSeven,divArrEight,divArrNine,divArrTen, divArrElvn];
            
            
            for (let i=0; i<divTotalArr.length; i++){
                removeEl(divTotalArr[i]);
            }
             
    
            })
        
    
    }




    function newCatBtnThree(politicsBtn, bizBtn, housePod, position,lawPod) {


        //Creating the Elements 
        let divOne = document.createElement('div');
        divOne.classList.add('music-container');
        
        
        let divTwo = document.createElement('div'); 
        divTwo.classList.add('music-info');
        
        let hFour = document.createElement('h4');
        //this will be deleted later
        // hFour.textContent = 'ukulele';  
        hFour.setAttribute('id','title');
        
        let divThree = document.createElement('div');
        divThree.classList.add('progress-container');
        
        divFour = document.createElement('div'); 
        divFour.classList.add('progress');
        
        let audioOne = document.createElement('audio');
        // audioOne.src = '/music/music-player_music_ukulele.mp3';
        audioOne.id = 'audio';
        
        let divFive = document.createElement('div'); 
        divFive.classList.add('img-container');
        
        let audioImg = document.createElement('img');
        // audioImg.src = '/images/ukulele.jpeg';
        audioImg.alt = 'music-cover'; 
        audioImg.id = 'cover';
        
        let divSix = document.createElement('div'); 
        divSix.classList.add('navigation');
        //First Button
        let musicBtn = document.createElement('button'); 
        musicBtn.id = 'prev'; 
        musicBtn.classList.add('action-btn');
        
        let fontAwesOne = document.createElement('i'); //prev button icon
        fontAwesOne.classList.add('fas');
        fontAwesOne.classList.add('fa-backward');
        
        //Second Button
        let musicBtnTwo = document.createElement('button'); 
        musicBtnTwo.id = 'play'; 
        musicBtnTwo.classList.add('action-btn');
        musicBtnTwo.classList.add('action-btn-big');
        
        let fontAwesTwo = document.createElement('i'); //play button icon
        fontAwesTwo.classList.add('fas');
        fontAwesTwo.classList.add('fa-play');
        
        //Third Button
        let musicBtnThree = document.createElement('button'); 
        musicBtnThree.id = 'next'; 
        musicBtnThree.classList.add('action-btn');
        
        
        let fontAwesThree = document.createElement('i'); //next button icon
        fontAwesThree.classList.add('fas');
        fontAwesThree.classList.add('fa-forward');
        
        
        let divArr = [position,divOne,divTwo,hFour]; 
        let divArrTwo = [divOne,audioOne];
        let divArrThree = [divOne,divFive,audioImg];
        let divArrFour = [divOne,divSix];
        
        let divArrFive = [divSix,musicBtn];
        let divArrSix = [musicBtn,fontAwesOne];
        
        let divArrSeven = [divSix,musicBtnTwo];
        let divArrEight = [musicBtnTwo,fontAwesTwo];
        
        let divArrNine = [divSix,musicBtnThree];
        let divArrTen = [musicBtnThree,fontAwesThree];
        
        let divArrElvn = [divTwo,divThree,divFour]
        
        //appending Elements
        function addEl(divArr) {
            var nodes = divArr;
            for(var i = 1; i < nodes.length; i++) {
                nodes[i - 1].appendChild(nodes[i]);
            }
        }
        
        
        let divTotalArr = [divArr,divArrTwo,divArrThree,divArrFour,divArrFive,divArrSix,divArrSeven,divArrEight,divArrNine,divArrTen, divArrElvn];
        
        
        for (let i=0; i<divTotalArr.length; i++){
            addEl(divTotalArr[i]);
        }
        
        
        
        //Audio Player 
        
        //Song Titles - titles need to match what is in the audio folder
        
        const songs = ['TNKR House Pod Episode 1']; //file names of the mp3
        
        // keep track of songs 
        
        let songIndex = (songs.length - 1); 
        
        //initially load song info DOM 
        
        loadSong(songs[songIndex]);
        
        //update song details 
        
        function loadSong(song) {
            hFour.textContent = `${song}`;
            audioOne.src = `/music/${song}.mp3`;
            audioImg.src = `/images/${song}.jpeg`;
        
        }
        
        function playSong() {
            divOne.classList.add('play');
            fontAwesTwo.classList.remove('fa-play'); 
            fontAwesTwo.classList.add('fa-pause');
        
            audioOne.play();
        
        }; 
        
        function pauseSong() {
            divOne.classList.remove('play');
            fontAwesTwo.classList.remove('fa-pause');
            fontAwesTwo.classList.add('fa-play'); 
            
            audioOne.pause();
        
        };
        
        function prevSong() {
         songIndex--
        
         if(songIndex < 0) {
             songIndex = songs.length -1; 
         }
        
         loadSong(songs[songIndex]);
         playSong();
        }
        
        function nextSong() {
            songIndex++
        
            if(songIndex > songs.length-1) {
                songIndex = 0; 
            }
           
            loadSong(songs[songIndex]);
            playSong();
        
           }
        
        function updateProgress(e) {
            
        
            const {duration, currentTime} = e.srcElement;
            const songProgress = (currentTime/duration)*100;
          divFour.style.width = `${songProgress}%`;
          
        
        }
        
        function setProgress(e) {
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audioOne.duration;
        
            audioOne.currentTime = (clickX/width) * duration;
        } 
        
        // Event Listeners 
        
        musicBtnTwo.addEventListener('click', () =>  { 
            const isPlaying = divOne.classList.contains('play'); //music container
        
            if(isPlaying) {
                pauseSong();
            } else {
                playSong();
            }
        })
        
        //change song
        musicBtn.addEventListener('click', prevSong);
        musicBtnThree.addEventListener('click', nextSong);
        audioOne.addEventListener('timeupdate', updateProgress); 
        divThree.addEventListener('click', setProgress);
        audioOne.addEventListener('ended', nextSong);
        
        //END OF Music Player Add - Start of Appending/Removing Buttons
           
        //Remove Main Menu of Buttons** This is where you add new Category Button
        let mainMenuArr = [politicsBtn, bizBtn,housePod,lawPod] 
        
        for (i=0; i<mainMenuArr.length; i++) {
            position.removeChild(mainMenuArr[i]);
        }
        
        
        
             // Append Back Home Btn 
             let backHome = document.createElement('button'); 
             backHome.classList.add('btn-home');
             backHome.id = ('all-pods');
             
             let allPodsSpan = document.createElement('span');
             backHome.appendChild(allPodsSpan);
         
             let homeText = document.createTextNode('All Pods')
             allPodsSpan.appendChild(homeText);
             position.appendChild(backHome);
        
             backHome.addEventListener('click', (e) => {
                 e.preventDefault();
        
            //remove the backHome Btn
                 let removeArr = [backHome]; 
        
                 for (i=0; i<removeArr.length; i++) {
                     position.removeChild(removeArr[i])
                 }
        //Append the Home Buttons **this is where you add new Category Buttons
        
               let mainBtnArr = [politicsBtn, bizBtn,housePod,lawPod];
        
               for (i=0; i<mainBtnArr.length; i++) {
                   position.appendChild(mainBtnArr[i]);
        
               }
        
        
            //Remove the Music Player 
                 function removeEl(divArr) {
                    var nodes = divArr;
                    for(var i = 1; i < nodes.length; i++) {
                        nodes[i - 1].removeChild(nodes[i]);
                    }
                }
                
                
                let divTotalArr = [divArr,divArrTwo,divArrThree,divArrFour,divArrFive,divArrSix,divArrSeven,divArrEight,divArrNine,divArrTen, divArrElvn];
                
                
                for (let i=0; i<divTotalArr.length; i++){
                    removeEl(divTotalArr[i]);
                }
                 
        
                })
            
        
        }
    


        function newCatBtnFour(politicsBtn, bizBtn, housePod, position,lawPod) {


            //Creating the Elements 
            let divOne = document.createElement('div');
            divOne.classList.add('music-container');
            
            
            let divTwo = document.createElement('div'); 
            divTwo.classList.add('music-info');
            
            let hFour = document.createElement('h4');
            //this will be deleted later
            // hFour.textContent = 'ukulele';  
            hFour.setAttribute('id','title');
            
            let divThree = document.createElement('div');
            divThree.classList.add('progress-container');
            
            divFour = document.createElement('div'); 
            divFour.classList.add('progress');
            
            let audioOne = document.createElement('audio');
            // audioOne.src = '/music/music-player_music_ukulele.mp3';
            audioOne.id = 'audio';
            
            let divFive = document.createElement('div'); 
            divFive.classList.add('img-container');
            
            let audioImg = document.createElement('img');
            // audioImg.src = '/images/ukulele.jpeg';
            audioImg.alt = 'music-cover'; 
            audioImg.id = 'cover';
            
            let divSix = document.createElement('div'); 
            divSix.classList.add('navigation');
            //First Button
            let musicBtn = document.createElement('button'); 
            musicBtn.id = 'prev'; 
            musicBtn.classList.add('action-btn');
            
            let fontAwesOne = document.createElement('i'); //prev button icon
            fontAwesOne.classList.add('fas');
            fontAwesOne.classList.add('fa-backward');
            
            //Second Button
            let musicBtnTwo = document.createElement('button'); 
            musicBtnTwo.id = 'play'; 
            musicBtnTwo.classList.add('action-btn');
            musicBtnTwo.classList.add('action-btn-big');
            
            let fontAwesTwo = document.createElement('i'); //play button icon
            fontAwesTwo.classList.add('fas');
            fontAwesTwo.classList.add('fa-play');
            
            //Third Button
            let musicBtnThree = document.createElement('button'); 
            musicBtnThree.id = 'next'; 
            musicBtnThree.classList.add('action-btn');
            
            
            let fontAwesThree = document.createElement('i'); //next button icon
            fontAwesThree.classList.add('fas');
            fontAwesThree.classList.add('fa-forward');
            
            
            let divArr = [position,divOne,divTwo,hFour]; 
            let divArrTwo = [divOne,audioOne];
            let divArrThree = [divOne,divFive,audioImg];
            let divArrFour = [divOne,divSix];
            
            let divArrFive = [divSix,musicBtn];
            let divArrSix = [musicBtn,fontAwesOne];
            
            let divArrSeven = [divSix,musicBtnTwo];
            let divArrEight = [musicBtnTwo,fontAwesTwo];
            
            let divArrNine = [divSix,musicBtnThree];
            let divArrTen = [musicBtnThree,fontAwesThree];
            
            let divArrElvn = [divTwo,divThree,divFour]
            
            //appending Elements
            function addEl(divArr) {
                var nodes = divArr;
                for(var i = 1; i < nodes.length; i++) {
                    nodes[i - 1].appendChild(nodes[i]);
                }
            }
            
            
            let divTotalArr = [divArr,divArrTwo,divArrThree,divArrFour,divArrFive,divArrSix,divArrSeven,divArrEight,divArrNine,divArrTen, divArrElvn];
            
            
            for (let i=0; i<divTotalArr.length; i++){
                addEl(divTotalArr[i]);
            }
            
            
            
            //Audio Player 
            
            //Song Titles - titles need to match what is in the audio folder
            
            const songs = ['The Goldwaters Episode 36','The Goldwaters Episode 37']; //file names of the mp3
            
            // keep track of songs 
            
            let songIndex = (songs.length - 1); 
            
            //initially load song info DOM 
            
            loadSong(songs[songIndex]);
            
            //update song details 
            
            function loadSong(song) {
                hFour.textContent = `${song}`;
                audioOne.src = `/music/${song}.mp3`;
                audioImg.src = `/images/${song}.jpeg`;
            
            }
            
            function playSong() {
                divOne.classList.add('play');
                fontAwesTwo.classList.remove('fa-play'); 
                fontAwesTwo.classList.add('fa-pause');
            
                audioOne.play();
            
            }; 
            
            function pauseSong() {
                divOne.classList.remove('play');
                fontAwesTwo.classList.remove('fa-pause');
                fontAwesTwo.classList.add('fa-play'); 
                
                audioOne.pause();
            
            };
            
            function prevSong() {
             songIndex--
            
             if(songIndex < 0) {
                 songIndex = songs.length -1; 
             }
            
             loadSong(songs[songIndex]);
             playSong();
            }
            
            function nextSong() {
                songIndex++
            
                if(songIndex > songs.length-1) {
                    songIndex = 0; 
                }
               
                loadSong(songs[songIndex]);
                playSong();
            
               }
            
            function updateProgress(e) {
                
            
                const {duration, currentTime} = e.srcElement;
                const songProgress = (currentTime/duration)*100;
              divFour.style.width = `${songProgress}%`;
              
            
            }
            
            function setProgress(e) {
                const width = this.clientWidth;
                const clickX = e.offsetX;
                const duration = audioOne.duration;
            
                audioOne.currentTime = (clickX/width) * duration;
            } 
            
            // Event Listeners 
            
            musicBtnTwo.addEventListener('click', () =>  { 
                const isPlaying = divOne.classList.contains('play'); //music container
            
                if(isPlaying) {
                    pauseSong();
                } else {
                    playSong();
                }
            })
            
            //change song
            musicBtn.addEventListener('click', prevSong);
            musicBtnThree.addEventListener('click', nextSong);
            audioOne.addEventListener('timeupdate', updateProgress); 
            divThree.addEventListener('click', setProgress);
            audioOne.addEventListener('ended', nextSong);
            
            //END OF Music Player Add - Start of Appending/Removing Buttons
               
            //Remove Main Menu of Buttons** This is where you add new Category Button
            let mainMenuArr = [politicsBtn, bizBtn,housePod,lawPod] 
            
            for (i=0; i<mainMenuArr.length; i++) {
                position.removeChild(mainMenuArr[i]);
            }
            
            
            
                 // Append Back Home Btn 
                 let backHome = document.createElement('button'); 
                 backHome.classList.add('btn-home');
                 backHome.id = ('all-pods');
                 
                 let allPodsSpan = document.createElement('span');
                 backHome.appendChild(allPodsSpan);
             
                 let homeText = document.createTextNode('All Pods')
                 allPodsSpan.appendChild(homeText);
                 position.appendChild(backHome);
            
                 backHome.addEventListener('click', (e) => {
                     e.preventDefault();
            
                //remove the backHome Btn
                     let removeArr = [backHome]; 
            
                     for (i=0; i<removeArr.length; i++) {
                         position.removeChild(removeArr[i])
                     }
            //Append the Home Buttons **this is where you add new Category Buttons
            
                   let mainBtnArr = [politicsBtn, bizBtn,housePod,lawPod];
            
                   for (i=0; i<mainBtnArr.length; i++) {
                       position.appendChild(mainBtnArr[i]);
            
                   }
            
            
                //Remove the Music Player 
                     function removeEl(divArr) {
                        var nodes = divArr;
                        for(var i = 1; i < nodes.length; i++) {
                            nodes[i - 1].removeChild(nodes[i]);
                        }
                    }
                    
                    
                    let divTotalArr = [divArr,divArrTwo,divArrThree,divArrFour,divArrFive,divArrSix,divArrSeven,divArrEight,divArrNine,divArrTen, divArrElvn];
                    
                    
                    for (let i=0; i<divTotalArr.length; i++){
                        removeEl(divTotalArr[i]);
                    }
                     
            
                    })
                
            
            }
        
    


politicsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newCatBtn(politicsBtn,bizBtn,housePod, position,lawPod);
});

bizBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newCatBtnTwo(politicsBtn,bizBtn, housePod, position,lawPod);
});

housePod.addEventListener('click', (e) => {
    e.preventDefault();
    newCatBtnThree(politicsBtn,bizBtn, housePod, position,lawPod);
});

lawPod.addEventListener('click', (e) => {
    e.preventDefault();
    newCatBtnFour(politicsBtn, bizBtn, housePod, position,lawPod);
});


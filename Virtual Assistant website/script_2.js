let btn = document.querySelector("#clickbtn");
let inputbox= document.querySelector("#inputbox");
btn.addEventListener("click" ,()=>{
    let str = inputbox.value;
    takeCommand(str.toLowerCase());
    
});



function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";

    if (message.includes("hello alpha") || message.includes("hey alpha")) {
        speak("Hello sir, what can I help you with?");
    }
    else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Harsh Patle.");
    }
    else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    }
    else if (message.startsWith("play ")) {  
        let song = message.replace("play ", "").trim();
        if (song) {
            speak(`Playing ${song} on YouTube...`);
            const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(song)}`;
            window.open(youtubeSearchURL, "_blank");
        } else {
            speak("Please specify a song name to play.");
        }
    }
   
    else if (message.startsWith("play ")) {  
        let song = message.replace("play ", "").trim();
        if (song) {
            speak(`Playing ${song} on YouTube...`);
            const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(song)}`;
            window.open(youtubeSearchURL, "_blank");
    
            setTimeout(() => {
                const autoPlayScript = `
                    const firstVideo = document.querySelector('#video-title');
                    if (firstVideo) {
                        firstVideo.click();
                    }
                `;
                const newTab = window.open('', '_blank');
                newTab.document.write(`<script>${autoPlayScript}</script>`);
            }, 2000);  
        } else {
            speak("Please specify a song name to play.");
        }
    }
    // ===================================================================================================================================
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by harsh patle")
    }
    
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open youtube")){
           
          const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(songs)}`;
          window.open(youtubeSearchURL, "_blank");
      
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open my portfolio")){
        speak("opening portfolio...")
        window.open("https://harshpatle18.netlify.app/","_blank")
    }
    else if(message.includes("do you know harsh patle")){
        speak("Harsh Patle Pursuing engineering from JNCT College (Bhopal) specialized in Artifical Intelligence & Data Science .he was born in keregaon balaghat , he worked hard in my education & maintained a CGPA of 7.2 . Along with my College Study , he completed C , Java and Full Stack Web Development Courses offline .Now he ready to apply my knowledge into practice.Though he do not have any real life working experience, his Goal is to build a successfull career as a Full Stack Developer and Java backend Programing . Moving forward in my career he hope to expand my experience across different industries.he a good learner and team player That's all about my self.")
       
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("team members name")){
        speak("Harsh patle and trapti bisen and aryan nigam ")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("current time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
   
    // =========================
    
    else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    }
    else {
        speak("This is what I found on the internet regarding " + message);
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
    }
}
// ========================================

let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

let btninput = document.querySelector(".clickbtn");
let inputbox= document.querySelector("#inputbox");
btninput.addEventListener("click" ,()=>{
    let str = inputbox.value;
    takeCommand(str.toLowerCase());
    
});


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})

function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
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
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Team Alpha member")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    
    else if(message.includes("open website")){
        let msg = message.replace("open website", "").trim();

        speak("opening "+msg+"...")
        window.open(`https://${msg}.com/`)
    }

    else if(message.includes("open my portfolio")){
        speak("opening portfolio...")
        window.open("https://harshpatle18.netlify.app/","_blank")
    }
    else if(message.includes("do you know harsh patle")){
        speak("Harsh Patle Pursuing engineering from JNCT College (Bhopal) specialized in Artifical Intelligence & Data Science .he was born in keregaon balaghat , he worked hard in my education & maintained a CGPA of 7.2 . Along with my College Study , he completed C , Java and Full Stack Web Development Courses offline .Now he ready to apply my knowledge into practice.Though he do not have any real life working experience, his Goal is to build a successfull career as a Full Stack Developer and Java backend Programing . Moving forward in my career he hope to expand my experience across different industries.he a good learner and team player That's all about my self.")
       
    }
    else if(message.includes("information about jnct college")){
        speak("Jai Narain College of Technology (JNCT), Bhopal, is considered to be unique in engineering education as it is firmly rooted in local soil and capable of articulating Indian ethos.")
        window.open("https://www.jnctbhopal.ac.in/about-us/","_blank")
    }
    else if(message.includes("tell me about my project ")){
        speak("A virtual assistant is an AI-powered tool that uses voice or text commands to perform tasks, provide information, automate processes, and enhance user convenience.")
        
    }
    else if(message.includes("team members name")){
        speak("Harsh patle and trapti bisen and aryan nigam ")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
   
    else if(message.includes("current time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}
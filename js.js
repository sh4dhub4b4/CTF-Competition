const Basic_challenge1 = document.getElementById("Basic_challenge1");
const Basic_challenge2 = document.getElementById("Basic_challenge2");
const Basic_challenge3 = document.getElementById("Basic_challenge3");
const Basic_challenge4 = document.getElementById("Basic_challenge4");

const Adhoc_challenge1 = document.getElementById("Adhoc_challenge1");
const Adhoc_challenge2 = document.getElementById("Adhoc_challenge2");
const Adhoc_challenge3 = document.getElementById("Adhoc_challenge3");

const Intermediate_challenge1 = document.getElementById("Intermediate_challenge1");
const Intermediate_challenge2 = document.getElementById("Intermediate_challenge2");

const problem = document.getElementById("problem");
const input = document.getElementById("input");
const submit = document.getElementById("submit");



const challenges = document.querySelectorAll('.challenges');

let questionSet = [
    "Cipher text: MX3{U5FEQ1DPSWAOA9} \nFind the flag vigen!!:",
    "Cipher text: Q1RGe0FycmVfZGFkYV92YWxvdG99 \nFind the flag BASE^Masud!!:",
    "Cipher text: 7317e5ef8a0ad8bf3128e8534f1b2c3c11264883 \nFind the flag SHA1d!!:",
    "Cipher text: ++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>---.>----------------.<+++.>+++++++++++++++++++++++++++++++++++++++.<--.+++++++++++++++++.---..<+++..>+++++++++++++.+++.>------------..--.<---.---------.-------.---.-----------.>++++++++++++++++. \nFind the flag N.B MATHA~noshto!!:",
    "I like inspector \nFind the flag !!:",
    "Tomar jono buk-HAHAKAR kore\nFind the flag sir:",
    "Ager moto faka*3 joma deo\n:",
];
let answerSet = [
    "CTF{k1r4m_d3l4m_6005}",
    "CTF{Arre_dada_valoto}",
    "CTF{na_dada_cg_LOW}",
    "CTF{DURR!!_boom_VOLA}",
    "CTF{ekhon_Moja paiso}",
    "CTF{}",
    "   ",
];

challenges.forEach(challenge => {
    challenge.addEventListener('click', event=> {
        document.getElementById('modal').style.display = 'block';
        // console.log(event.target);
        
        if(event.target === Basic_challenge1 ){
            problem.textContent = questionSet[0];
            submit.addEventListener("click",event=>{
                if(input.value == answerSet[0]){
                   console.log("correct");
                   Basic_challenge1.style.backgroundColor="green";
                   Basic_challenge1.textContent = "Done";
                }
            });
        }
        if(event.target === Basic_challenge2 ){
            problem.textContent = questionSet[1];
            submit.addEventListener("click",event=>{
                if(input.value == answerSet[1]){
                   console.log("correct");
                   Basic_challenge2.style.backgroundColor="green";
                   Basic_challenge2.textContent = "Done";
                }
            });
        }
        if(event.target === Basic_challenge3 ){
            problem.textContent = questionSet[2];
            submit.addEventListener("click",event=>{
                if(input.value == answerSet[2]){
                   console.log("correct");
                   Basic_challenge3.style.backgroundColor="green";
                   Basic_challenge3.textContent = "Done";
                }
            });
        }
        if(event.target === Basic_challenge4 ){
            problem.textContent = questionSet[3];
            submit.addEventListener("click",event=>{
                if(input.value == answerSet[3]){
                   console.log("correct");
                   Basic_challenge4.style.backgroundColor="green";
                   Basic_challenge4.textContent = "Done";
                }
            });
        }
        
        

        if(event.target === Adhoc_challenge1 ){
            problem.textContent = questionSet[4];
            submit.addEventListener("click",event=>{
                if(input.value == answerSet[4]){
                   console.log("correct");
                   Adhoc_challenge1.style.backgroundColor="green";
                   Adhoc_challenge1.textContent = "Done";
                }
            });
        }
        if(event.target === Adhoc_challenge2 ){
            problem.textContent = questionSet[5];
            submit.addEventListener("click",event=>{
                if(input.value == answerSet[5]){
                   console.log("correct");
                   Adhoc_challenge2.style.backgroundColor="green";
                   Adhoc_challenge2.textContent = "Done";
                }
            });
        }
        if(event.target === Adhoc_challenge3 ){
            problem.textContent = questionSet[6];
            submit.addEventListener("click",event=>{
                if(input.value == answerSet[6]){
                   console.log("correct");
                   Adhoc_challenge3.style.backgroundColor="green";
                   Adhoc_challenge3.textContent = "Done";
                }
            });
        }
        if(event.target === Intermediate_challenge1 ){
            problem.textContent="Where is this place: \n link: https://shorturl.at/Gf7nw ";
            submit.addEventListener("click",event=>{
                if(input.value == "kukrimukri"){
                   console.log("correct");
                   Intermediate_challenge1.style.backgroundColor="green";
                   Intermediate_challenge1.textContent = "Done";
                }
            });
        }
        if(event.target === Intermediate_challenge2 ){
            problem.textContent="Magic time;";

            const now = new Date();let hours = now.getHours();let minutes = now.getMinutes();
            let str = hours.toString()+minutes.toString();
            // console.log(str);

            submit.addEventListener("click",event=>{
                if(input.value == str){
                   console.log("correct");
                   Intermediate_challenge2.style.backgroundColor="green";
                   Intermediate_challenge2.textContent = "Done";
                }
            });
        }
        



    });
});

// The following code is already correct and should remain as is
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', event=> {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
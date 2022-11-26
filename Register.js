const PlayersData=[];
var score=0;
var scoreCheck=0;
var correctAnswer=0;
var incorrectAnswer=0;


function ageCalculator() {    
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
       
    if(userinput==null || userinput==''){
        alert("**Choose a date please!");   
        return false;   
    }   
        
    else {   
    var mdate = userinput.toString();  
    var dobYear = parseInt(mdate.substring(0,4), 10);  
    var dobMonth = parseInt(mdate.substring(5,7), 10);  
    var dobDate = parseInt(mdate.substring(8,10), 10);  
       
    var today = new Date();   
    var birthday = new Date(dobYear, dobMonth-1, dobDate);  
      
    var diffInMillisecond = today.valueOf() - birthday.valueOf();        
    var year_age = Math.floor(diffInMillisecond / 31536000000);  
    var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
       
    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {  
            alert("Happy Birthday!");  
        }  
          
     var month_age = Math.floor(day_age/30);          
     day_ageday_age = day_age % 30;  
          
     var tMnt= (month_age + (year_age*12));  
     var tDays =(tMnt*30) + day_age;  
     if (dob>today) {  
        document.getElementById("result").innerHTML = ("Invalid date input - Please try again!");  
      }  
      else {  
        document.getElementById("result").innerHTML = year_age + " years " + month_age + " months "; 
      }  
   }  
} 
const form = document.getElementById('form');
const userfname = document.getElementById('userfname');
const userlname = document.getElementById('userlname');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const street = document.getElementById('street');
const city = document.getElementById('city');
const town = document.getElementById('town');
const country = document.getElementById('country');
const educationallevel = document.getElementById('educationallevel');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const userfnameValue = userfname.value.trim();
    const userlnameValue = userlname.value.trim();
    const emailValue = email.value.trim();
    const genderValue = gender.value.trim();
    const streetValue = street.value.trim();
    const cityValue = city.value.trim();
    const townValue = town.value.trim();
    const countryValue = country.value.trim();
    const educationallevelValue = educationallevel.value.trim();

    var test=0;
    if(userfnameValue === '') {
        alert('User first name is required');
    } else if (userfnameValue.length < 3 ) {
        setError(userfname, 'User first name must be longer than 3 character')
    }else {
        setSuccess(userfname);
       PlayersData[0]=userfnameValue;
       
    }
    
     if(userlnameValue === '') {
        setError(userlname, 'User last name is required');
    } else if (userlnameValue.length < 3 ) {
        setError(userlname, 'User last name must be longer than 3 character')
    }else {
        setSuccess(userlname);
       PlayersData[1]=userlnameValue;
       
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        enable();
    } else {
        setSuccess(email);
        PlayersData[2]=emailValue;
        
    }

    if(genderValue === '') {
        setError(gender, 'Gender must be Male or Female');
    } else {
        setSuccess(gender);
       PlayersData[3]=genderValue;
       
    }

    if(streetValue === '') {
        setError(street, 'Street is required');
  
    } else {
        setSuccess(street);
        PlayersData[4]=streetValue;
        
    }
    
     if(cityValue === '') {
        setError(city, 'City is required');
  
    } else {
        setSuccess(city);
       PlayersData[5]=cityValue;
       
    }
    
    if(townValue === '') {
        setError(town, 'Town is required');
  
    } else {
        setSuccess(town);
       PlayersData[6]=townValue;
       
    }
    
    if(countryValue === '') {
        setError(country, 'Country is required');
  
    } else {
        setSuccess(country);
        PlayersData[7]=countryValue;
        
    }
    
    if(educationallevelValue === '') {
        setError(educationallevel, 'Educational Level is required');
  
    } else {
        setSuccess(educationallevel);
        PlayersData[8]=educationallevelValue;
        
    }
    var play=document.getElementById("play");
    var end=document.getElementById("end");
    if (userfnameValue !='' && userfnameValue.length > 3 && userlnameValue != ''
        && userlnameValue.length > 3 && emailValue != '' && genderValue!='' && 
        streetValue!='' && cityValue!='' && townValue!='' && countryValue!='' && educationallevelValue!='' )
    {
        disable();
        play.disabled=false;
        end.disabled=false;
    }

}


function disable() 

    {
        document.getElementById("userfname").disabled = true;
        document.getElementById("userlname").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("gender").disabled = true;
        document.getElementById("street").disabled = true;
        document.getElementById("city").disabled = true;
        document.getElementById("town").disabled = true;
        document.getElementById("country").disabled = true;
        document.getElementById("educationallevel").disabled = true;
        document.getElementById("play").enabled = true;
        document.getElementById("end").enabled = true;
}



function enable() 
 {
    document.getElementById("email").enabled= true;
 }
 function openGame()
 {
    window.open("GameBoard.html");
 }
//game board js

//script for board

    var displayScore=document.getElementById('Score');

    //Question 1
    function question1(){
    var ques1=document.getElementById("inp_c1_1").value;
    if (ques1==1 || ques1==3)
    {
        
        scoreCheck=(scoreCheck + 100);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
        correctAnswer=(correctAnswer + 1);
    }
    else
    {
        scoreCheck=(scoreCheck - 100);
        alert("Answer is incorrect");
        incorrectAnswer=(incorrectAnswer + 1);
        displayScore.innerHTML= scoreCheck;
    }

    
    }
    
    function enableQues1()
    {
        document.getElementById("div_c1_1").hidden = false;
        Timer("div_c1_1");

    }
    function hideScore()
    {
        document.getElementById("c1_1").hidden = true;
        document.getElementById("div_c1_1").hidden = true;
    }

    //Question 2
    function question2(){
    var ques1=document.getElementById("inp_c1_2").value;
    if (ques1==2 || ques1==4)
    {
        
        scoreCheck=(scoreCheck + 200);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        correctAnswer=(correctAnswer + 1);
        displayScore.innerHTML= scoreCheck;
    }
    else
    {

        alert("Answer is incorrect");
        incorrectAnswer=(incorrectAnswer + 1);
        scoreCheck=(scoreCheck - 200);
        displayScore.innerHTML= scoreCheck;  
    }

    }
     
        function enableQues2()
    {
        document.getElementById("div_c1_2").hidden = false;
        Timer("div_c1_2");

    }
    function hideScore2()
    {
        document.getElementById("c1_2").hidden = true;
        document.getElementById("div_c1_2").hidden = true;
    }

    //Question 3
    function question3(){
    var ques1=document.getElementById("inp_c1_3").value;
    if (ques1==666)
    {
        
        scoreCheck=(scoreCheck + 300);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
    }
    else
    {
        incorrectAnswer=(incorrectAnswer + 1);
        scoreCheck=(scoreCheck - 300);
        alert("Answer is incorrect");
        displayScore.innerHTML= scoreCheck;
    }
    
    }
     
        function enableQues3()
    {
        Timer("div_c1_3");
        document.getElementById("div_c1_3").hidden = false;

    }
    function hideScore3()
    {
        document.getElementById("c1_3").hidden = true;
        document.getElementById("div_c1_3").hidden = true;
    }

    //Question 4
    function question4(){
    var ques1=document.getElementById("inp_c1_4").value;
    if (ques1==10)
    {
        
        scoreCheck=(scoreCheck + 400);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       
       correctAnswer=(correctAnswer + 1);
    }
    else
    {
        incorrectAnswer=(incorrectAnswer + 1);
        scoreCheck=(scoreCheck - 400);
        alert("Answer is incorrect");
        displayScore.innerHTML= scoreCheck;
    }
    
    }
     
        function enableQues4()
    {
        document.getElementById("div_c1_4").hidden = false;
        Timer("div_c1_4");

    }
    function hideScore4()
    {
        document.getElementById("c1_4").hidden = true;
        document.getElementById("div_c1_4").hidden = true;
    }

        //Question 5
    function question5(){
    var ques1=document.getElementById("inp_c1_5").value;
    if (ques1==1000)
    {
        
        scoreCheck=(scoreCheck + 500);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
    }
    else
    {
        incorrectAnswer=(incorrectAnswer + 1);
        scoreCheck=(scoreCheck - 500);
        alert("Answer is incorrect");
        displayScore.innerHTML= scoreCheck;
    }
    
    }
     
        function enableQues5()
    {
        document.getElementById("div_c1_5").hidden = false;
        Timer("div_c1_5");

    }
    function hideScore5()
    {
        document.getElementById("c1_5").hidden = true;
        document.getElementById("div_c1_5").hidden = true;
    }

    //Animals Category
    //Question 1
     function animalsQ1(){
        var ans=document.getElementById("inp_c2_1").value;
        if (ans == "Dog" || ans == "dog")
        {
            
        scoreCheck=(scoreCheck + 100);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
        correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            incorrectAnswer=(incorrectAnswer + 1);
            scoreCheck=(scoreCheck - 100);
            alert("Answer is incorrect");
            displayScore.innerHTML= scoreCheck;
        }
    
        }
    
        function enableA_Q1()
        {
            document.getElementById("div_c2_1").hidden = false;
            Timer("div_c2_1");
    
        }
        function hideScore_a1()
        {
            document.getElementById("c2_1").hidden = true;
            document.getElementById("div_c2_1").hidden = true;
        }

    //Question 2
     function animalsQ2(){
        var ans=document.getElementById("inp_c2_2").value;
        if (ans == "Clownfish" || ans == "clownfish")
        {
            
        scoreCheck=(scoreCheck + 200);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
        correctAnswer=(correctAnswer + 1);

        }
        else
        {
            incorrectAnswer=(incorrectAnswer + 1);
            scoreCheck=(scoreCheck - 200);
            alert("Answer is incorrect");
            displayScore.innerHTML= scoreCheck;
        }
    
        }
    
        function enableA_Q2()
        {
            document.getElementById("div_c2_2").hidden = false;
            Timer("div_c2_2");
    
        }
        function hideScore_a2()
        {
            document.getElementById("c2_2").hidden = true;
            document.getElementById("div_c2_2").hidden = true;
        }

    //Question 3
     function animalsQ3(){
        var ans=document.getElementById("inp_c2_3").value;
        if (ans == "Elephant" || ans == "elephant")
        {
            
        scoreCheck=(scoreCheck + 300);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=(scoreCheck - 300);
            alert("Answer is incorrect");
            incorrectAnswer=(incorrectAnswer + 1);
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableA_Q3()
        {
            document.getElementById("div_c2_3").hidden = false;
            Timer("div_c2_3");
    
        }
        function hideScore_a3()
        {
            document.getElementById("c2_3").hidden = true;
            document.getElementById("div_c2_3").hidden = true;
        }

    //Question 4
     function animalsQ4(){
        var ans=document.getElementById("inp_c2_4").value;
        if (ans == "Dove" || ans == "dove")
        {
            
        scoreCheck=(scoreCheck + 400);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=(scoreCheck - 400);
            alert("Answer is incorrect");
            incorrectAnswer=(incorrectAnswer + 1);
        }
    
        
        }
    
        function enableA_Q4()
        {
            document.getElementById("div_c2_4").hidden = false;
            Timer("div_c2_4");
    
        }
        function hideScore_a4()
        {
            document.getElementById("c2_4").hidden = true;
            document.getElementById("div_c2_4").hidden = true;
        }

    //Question 5
     function animalsQ5(){
        var ans=document.getElementById("inp_c2_5").value;
        if (ans == "Whale Shark" || ans == "whale shark")
        {
            
        scoreCheck=(scoreCheck + 500);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
        correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
            incorrectAnswer=(incorrectAnswer + 1);
        }
    
        
        }
    
        function enableA_Q5()
        {
            document.getElementById("div_c2_5").hidden = false;
            Timer("div_c2_5");
    
        }
        function hideScore_a5()
        {
            document.getElementById("c2_5").hidden = true;
            document.getElementById("div_c2_5").hidden = true;
        }


    //Sports Category
    //Question 1
        function sportsQ1(){
        var ans=document.getElementById("inp_c3_1").value;
        if (ans == 4) 
        {
            
        scoreCheck=(scoreCheck + 100);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=(scoreCheck - 100);
            alert("Answer is incorrect");
            incorrectAnswer=(incorrectAnswer + 1);
        }
    }
    
        function enableS_Q1()
        {
            document.getElementById("div_c3_1").hidden = false;
            Timer("div_c3_1");
    
        }

        function hideScore_s1()
        {
            document.getElementById("c3_1").hidden = true;
            document.getElementById("div_c3_1").hidden = true;
        }

    //Question 2
     function sportsQ2(){
        var ans=document.getElementById("inp_c3_2").value;
        if (ans == "Baseball" || ans == "baseball")
        {
            
        scoreCheck=(scoreCheck + 200);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
        correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=(scoreCheck - 100);
            alert("Answer is incorrect");
            incorrectAnswer=(incorrectAnswer + 1);
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableS_Q2()
        {
            document.getElementById("div_c3_2").hidden = false;
            Timer("div_c3_2");
    
        }
        function hideScore_s2()
        {
            document.getElementById("c3_2").hidden = true;
            document.getElementById("div_c3_2").hidden = true;
        }

    //Question 3
     function sportsQ3(){
        var ans=document.getElementById("inp_c3_3").value;
        if (ans == 7 || ans == "seven" || ans == "Seven")
        {
            
        scoreCheck=(scoreCheck + 300);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableS_Q3()
        {
            document.getElementById("div_c3_3").hidden = false;
            Timer("div_c3_3");
    
        }
        function hideScore_s3()
        {
            document.getElementById("c3_3").hidden = true;
            document.getElementById("div_c3_3").hidden = true;
        }

    //Question 4
     function sportsQ4(){
        var ans=document.getElementById("inp_c3_4").value;
        if (ans == "Lacrosse" || ans == "lacrosse")
        {
            
        scoreCheck=(scoreCheck + 400);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
        correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableS_Q4()
        {
            document.getElementById("div_c3_4").hidden = false;
            Timer("div_c3_4");
    
        }
        function hideScore_s4()
        {
            document.getElementById("c3_4").hidden = true;
            document.getElementById("div_c3_4").hidden = true;
        }

    //Question 5
     function sportsQ5(){
        var ans=document.getElementById("inp_c3_5").value;
        if (ans == 2.6)
        {
            
        scoreCheck=(scoreCheck + 500);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableS_Q5()
        {
            document.getElementById("div_c3_5").hidden = false;
            Timer("div_c3_4");
    
        }
        function hideScore_s5()
        {
            document.getElementById("c3_5").hidden = true;
            document.getElementById("div_c3_5").hidden = true;
        }

    //Jamaican Culture Category
    //Question 1
     function JamQ1(){
        var ans=document.getElementById("inp_c4_1").value;
        if (ans == 3 || ans == "three" || ans == "Three") 
        {
            
        scoreCheck=(scoreCheck + 100);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableJ_Q1()
        {
            document.getElementById("div_c4_1").hidden = false;
            Timer("div_c4_1");
    
        }
        function hideScore_j1()
        {
            document.getElementById("c4_1").hidden = true;
            document.getElementById("div_c4_1").hidden = true;
        }

    //Question 2
     function JamQ2(){
        var ans=document.getElementById("inp_c4_2").value;
        if (ans == "Andrew Holness" || ans == "andrew holness" ) 
        {
            
        scoreCheck=(scoreCheck + 200);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableJ_Q2()
        {
            document.getElementById("div_c4_2").hidden = false;
            Timer("div_c4_2");
    
        }
        function hideScore_j2()
        {
            document.getElementById("c4_2").hidden = true;
            document.getElementById("div_c4_2").hidden = true;
        }
        
    //Question 3
     function JamQ3(){
        var ans=document.getElementById("inp_c4_3").value;
        if (ans == 1962) 
        {
            
        scoreCheck=(scoreCheck + 300);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableJ_Q3()
        {
            document.getElementById("div_c4_3").hidden = false;
            Timer("div_c4_3");
    
        }
        function hideScore_j3()
        {
            document.getElementById("c4_3").hidden = true;
            document.getElementById("div_c4_3").hidden = true;
        }

    //Question 4
     function JamQ4(){
        var ans=document.getElementById("inp_c4_4").value;
        if (ans == "Trelawny" || ans == "trelawny") 
        {
            
        scoreCheck=(scoreCheck + 400);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableJ_Q4()
        {
            document.getElementById("div_c4_3").hidden = false;
            Timer("div_c4_4");
        }
        function hideScore_j4()
        {
            document.getElementById("c4_4").hidden = true;
            document.getElementById("div_c4_4").hidden = true;
        }

    //Question 5
     function JamQ5(){
        var ans=document.getElementById("inp_c4_5").value;
        if (ans == "Spanish Town" || ans == "spanish town") 
        {
            
        scoreCheck=(scoreCheck + 500);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableJ_Q5()
        {
            document.getElementById("div_c4_5").hidden = false;
            Timer("div_c4_5");
    
        }
        function hideScore_j5()
        {
            document.getElementById("c4_5").hidden = true;
            document.getElementById("div_c4_5").hidden = true;
        }

    //Food Category
    //Question 1
     function FoodQ1(){
        var ans=document.getElementById("inp_c5_1").value;
        if (ans == "Strawberry" || ans == "strawberry" || ans == "Strawberries"  || ans == "strawberries") 
        {
            
           scoreCheck=(scoreCheck + 100);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableF_Q1()
        {
            document.getElementById("div_c5_1").hidden = false;
            Timer("div_c5_1");
        }
        function hideScore_f1()
        {
            document.getElementById("c5_1").hidden = true;
            document.getElementById("div_c5_1").hidden = true;
        }

    //Question 2
     function FoodQ2(){
        var ans=document.getElementById("inp_c5_2").value;
        if (ans == "Honey" || ans == "honey") 
        {
            
        scoreCheck=(scoreCheck + 200);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableF_Q2()
        {
            document.getElementById("div_c5_2").hidden = false;
            Timer("div_c5_2");
    
        }
        function hideScore_f2()
        {
            document.getElementById("c5_2").hidden = true;
            document.getElementById("div_c5_2").hidden = true;
        }

    //Question 3
     function FoodQ3(){
        var ans=document.getElementById("inp_c5_3").value;
        if (ans == "Ghost Pepper" || ans == "ghost pepper") 
        {
            
        scoreCheck=(scoreCheck + 300);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableF_Q3()
        {
            document.getElementById("div_c5_3").hidden = false;
            Timer("div_c5_3");
    
        }
        function hideScore_f3()
        {
            document.getElementById("c5_3").hidden = true;
            document.getElementById("div_c5_3").hidden = true;
        }

    //Question 4
     function FoodQ4(){
        var ans=document.getElementById("inp_c5_4").value;
        if (ans == 1930) 
        {
            
            scoreCheck=(scoreCheck + 400);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableF_Q4()
        {
            document.getElementById("div_c5_4").hidden = false;
            Timer("div_c5_4");
    
        }
        function hideScore_f4()
        {
            document.getElementById("c5_4").hidden = true;
            document.getElementById("div_c5_4").hidden = true;
        }

    //Question 5
     function FoodQ5(){
        var ans=document.getElementById("inp_c5_5").value;
        if (ans == "Belgium" || ans == "belgium") 
        {
            
        scoreCheck=(scoreCheck + 500);
        alert("Answer is correct");
        var displayScore=document.getElementById('Score');
        displayScore.innerHTML= scoreCheck;
       correctAnswer=(correctAnswer + 1);
           
        }
        else
        {
            scoreCheck=score+=0;
            alert("Answer is incorrect");
        }
    
        displayScore.innerHTML=scoreCheck;
        }
    
        function enableF_Q5()
        {
            document.getElementById("div_c5_5").hidden = false;
            Timer("div_c5_5");
    
        }
        function hideScore_f5()
        {
            document.getElementById("c5_5").hidden = true;
            document.getElementById("div_c5_5").hidden = true;
        }


        var displaypercentage=document.getElementById('showPercentage');
        function findPercentageScore()
        {

            var percentage=scoreCheck/7500*100;
            displaypercentage.innerHTML= PlayersData[0] + "," + PlayersData[1] + "," + PlayersData[2] + "," + PlayersData[8];
        }



        function Timer(id){
            var counter = 60
            var countdown = setInterval(function(){
                console.log(counter);
                document.querySelector('#timer').innerHTML=counter;
                counter --
                if (counter == -2){
                    alert("TIME IS UP");
                    clearInterval(countdown)
                    document.getElementById(id).hidden=true;
                }
            },1000);
        }










       
      
       



    



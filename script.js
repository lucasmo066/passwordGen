
   var generateBtn = document.querySelector("#generate");

//Checks user input, validates for password criteria, and shuffles characters
function generatePassword(){
    console.log("Clicked button to generate password.");
    
    var chars = '';
    var numbers = "0123456789";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var sign = "!#$%&'()*+,-.\/:;<=>?@[^_`]{|}~";
    var password = '';
    
    var passwordLength = parseInt(prompt("How many characters should your password have? \nPlease choose a number between 8 and 128!"));
    console.log("length chosen was " + passwordLength);
    
    // Checking to see if answer is within the criteria.
    if (passwordLength === null){}
    
    else if (isNaN(parseInt(passwordLength)) || isNaN(passwordLength) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128){
      alert("Follow password length criteria");
    }
    

    else{
    
      var lowerCase = confirm("Do you want lowercase characters in your password?");
      if (lowerCase){
        chars = chars + lower;
        console.log("Chose to include lower case");
      }
      
      var upperCase =  confirm("Do you want uppercase characters in your password?");
      if (upperCase){
        chars = chars + upper;
        console.log("Chose to include upper case");
      }
     
      var number =  confirm("Do you want numbers in your password?");
      if (number){
        chars = chars + numbers;
        console.log("Chose to include numbers");
      }
    
      var signs = confirm("Do you want special characters in your password?");
      if (signs){
        chars = chars + sign;
        console.log("Chose to include special characters");
      }
    
      if (chars != ''){
    
    // shuffles all of the characters, 
      function shuffle(Char_shuffle){
      
      Char_shuffle = Char_shuffle.split('');
      var z = Char_shuffle.length;
      for (var i = z-1; i>0; i--)
      {
      var j = Math.floor(Math.random() * (i+1));
      var tmp = Char_shuffle[i];
      Char_shuffle[i] = Char_shuffle[j];
      Char_shuffle[j] = tmp;
      }
    
    // join method allows the concantination of all elements of an array and returns a new string   
      return Char_shuffle.join("");
          
      }
       
      chars = shuffle(chars);
     
    
      for (var i=0; i<passwordLength; i++){
        var randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum,randomNum+1);
      }
      }
      
    // If no variable is chosen from all prompts
      else{
        alert("Must make a selection!");
      }
    
      }
    
    // Last step is to generate the password created.
      return password;
      }
    
    // Writes the password value onto box on browser.
    generateBtn.addEventListener("click", writePassword);
    
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
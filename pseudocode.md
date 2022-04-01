<!-- 
0) set up repo and commit starter code
prompt for password length 
Generate pw all “a’s” for the desired length
Display all random lowercase letters for the desired length
Display all random uppercase/lowercase letters
Let user choose to include uppercase and/or lowercase
6) Let user choose upper, lower, and/or numbers
7)Let user choose upper, lower, numbers, and/or specials
8) prevent user from too short 
9) prevent user from too short or too long
10) prevent user from choosing no character types  -->

<!-- 
GENERATE PASSWORD
function returns a password string consisting of various characters based on user prompts

create some variables
let password = ""
let lowercase = abcdefghijklmnopqrstuvwxyz
let uppercase = ABCDEFGHIJKLMNOPQRSTUVWXYZ
let numbers = a string containing all digits "0123456789"
let special characters = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "
let candidates = ""
let length = 0
let includeLower = false
let includeUpper = false 
let includeSpecial = false
let includeNumber = false
let letter = "m"

length = prompt "Enter desired password length:"
IF length < 8 OR length > 128
    alert "Password should be from 8 to 128 characters long."
    RETURN ""
END IF

includeLower = prompt "Use lowercase letters?"
IF includeLower = true
    add lowercase to candidates
    letter = random char from lowercase
    password = password + letter
END IF

includeUpper = prompt "Use uppercase letters?
IF includeUpper = true
    add uppercase to candidates
    letter = random char from uppercase
    password = password + letter
END IF

includeSpecial = prompt "Use special characters?
IF includeSpecial = true
    add special to candidates
    letter = random char from special 
    password = password + letter
END IF

includeNumbers = prompt "Use numbers?
IF includeNumbers = true
    add numbers to candidates
    letter = random char from numbers
    password = password + letter
END IF

check if at least one type was chosen
IF candidates.length === 0
    alert "You must choose at least one character tyoe."
    RETURN ""
END IF

WHILE password.length < length
    letter = random char from candidates
    add letter to password
END WHILE

RETURN password
 -->
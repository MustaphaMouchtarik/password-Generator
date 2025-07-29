Uppers=['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z'];
lowers=['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];
numbers=['0','1','2','3','4','5','6','7','8','9'];
symbols=["!","@","#","$","%","(",")","?","^"];
function randomize(arr){
    let index=Math.floor(Math.random()* arr.length);
    return arr[index];
}
function generatePassword() {
    const passlenght= document.getElementById("length").value;
    const includeUpper = document.getElementById("UpperCase").checked;
    const includeLower = document.getElementById("LowerCase").checked;
    const includeNumbers = document.getElementById("Numbers").checked;
    const includeSymbole = document.getElementById("Symbol").checked;
    let result = []
    if (!includeLower && !includeNumbers && !includeSymbole && !includeUpper){
        window.alert("include a character please")
    }
    for (i = 0 ; i<passlenght ; i++){
        let chosen=[];
        if (includeUpper){
            chosen.push(randomize(Uppers));
        }
        if (includeLower){
            chosen.push(randomize(lowers));
        }
        if (includeNumbers){
            chosen.push(randomize(numbers));
        }
        if (includeSymbole){
            chosen.push(randomize(symbols));
        }
        result.push(randomize(chosen))
    }
    document.getElementById("area").value=result.join("")
}


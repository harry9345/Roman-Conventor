function convertToRoman(num){
    var decValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    var romanized=[];
    for (var i = 0;i<decValue.length; i++){
      while (decValue[i] <= num){
          romanized += romanNum[i];
          num -= decValue[i];
      }
    }
return romanized
}
convertToRoman(48)

function ConvertirFrase(frase, cantDesplazamiento){
 let f = "";
 const min = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 const mayus= ["A", "B", "C", "D", "E", "F", "G", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 for(let i = 0;i<=frase.length;i++){
     if(min.indexOf(frase.charAt(i)) != -1){
         let papu = min.indexOf(frase.charAt(i)) + cantDesplazamiento;
         if(papu >= 26){
             papu = cantDesplazamiento - (26 - min.indexOf(frase.charAt(i)));
         }
        f += min[papu];
     }
     if(mayus.indexOf(frase.charAt(i)) != -1){
         let papu = mayus.indexOf(frase.charAt(i)) + cantDesplazamiento;
         if(papu >= 26){
            papu = cantDesplazamiento - (26 - mayus.indexOf(frase.charAt(i)));
        }
        f += mayus[papu];
    }
 }
 return f;

}
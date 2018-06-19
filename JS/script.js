
function fromSysToSys(){
            
            const alph = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", 
                          "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                          "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var input = document.getElementById('key').value;
            var r1 = +document.getElementById('sys1').value;
            var r2 = +document.getElementById('sys2').value;
            var str = 0;
            var ans = "";
            document.getElementById('ans').innerHTML = "";
            
            if (r1 != 10){
                        n = input.split("").reverse();
                        for (var i = 0; i < n.length; i++){
                                    for (var j = 0; j < alph.length; j++){
                                                if (n[i] == alph[j]){
                                                            n[i] = j;
                                                            j = alph.length;
                                                }
                                    }
                        } 
                        
                        for (var i = 0; i < n.length; i++){
                                    n[i] = parseInt(n[i], 10);
                                    str += n[i] * Math.pow(r1, i);
                        }  
            }
            
            while (str > 0) {
                ans += alph[str % r2];
                str = str / r2;
                if (str < Math.round(str)) {
                    str = Math.round(str);
                    str--;
                }
                else
                    str = Math.round(str);
            }
            
            document.getElementById('ans').innerHTML += ans.split("").reverse().join("");
}

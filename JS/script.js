
function fromSysToSys () {
            
            const alph = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", 
                          "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                          "S", "T", "U", "V", "W", "X", "Y", "Z"];
            
            const r1 = +document.getElementById('sys1').value;
            const r2 = +document.getElementById('sys2').value;
            let input = document.getElementById('key').value;
            let str = 0;
            let ans = "";
            document.getElementById('ans').innerHTML = '';
            
            n = input.split('').reverse();
            
            for (let i = 0; i < n.length; i++){
                        for (let j = 0; j < alph.length; j++){
                                    if (n[i] == alph[j]){
                                                n[i] = j;
                                                j = alph.length;
                                    }
                                   
                        }
            } 
            
            for(let i = 0; i < n.length; i++){
                        n[i] = parseInt(n[i], 10);
                        if(n[i] >= r1 || isNaN(n[i]) || isNaN(r1) || isNaN(r2)){
                                   str = -1;
                           }
            }
            
            if(str != -1){
                        
                        for (let i = 0; i < n.length; i++){
                                    str += n[i] * Math.pow(r1, i);
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
                        if(input != 0 || r1 != 0 || r2 != 0){
                            document.getElementById('ans').innerHTML += `${input}<sub>${String(r1)}</sub> = ${ans.split('').reverse().join('')}<sub>${String(r2)}</sub>`;
                        }
            }
            else {
                    document.getElementById('ans').innerHTML += 'Указанное число содержит недопустимые для исходной системы счисления символы. Например, для двоичной системы счисления допустимыми символами являются числа только от 0 до 1, а для шестнадцатеричной 0—9 и A—F.';
            }
            
            
}

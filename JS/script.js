function cleanUp () {
            
            document.getElementById('sys1').value = '';    
            document.getElementById('sys2').value = '';    
            document.getElementById('key').value = '';   
            document.getElementById('ans').innerHTML = ''; 
}


function fromSysToSys () {
            
            const alph = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", 
                          "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                          "S", "T", "U", "V", "W", "X", "Y", "Z"];
            
            const r1 = +document.getElementById('sys1').value;    //исходной система счисления
            const r2 = +document.getElementById('sys2').value;    //система счисления, в которую надо перевести число
            let input = document.getElementById('key').value;    //исходное число
            let str = 0;    //вспомогательная переменная
            let ans = "";    //переменная, в которую будет записан ответ
            let x;
            document.getElementById('ans').innerHTML = '';    //чистим строку с ответом
            
            n = input.split('').reverse();    //обЪявляем переменную, в которую записывается массив из цифр исходного числа и переворачивается
            
            for (let i = 0; i < n.length; i++){    //прогоняем массив через два цикла, чтобы заменить буквы на цифры
                        for (let j = 0; j < alph.length; j++){
                                    if (n[i] == '.'){
                                                x = i * -1;
                                                n.splice(i, 1);
                                    }
                                    if (n[i] == alph[j]){    //запускается проверка, в которой в исходном числе строки меняются на числа
                                                n[i] = j;    //меняем 
                                                n[i] = parseInt(n[i], 10);
                                                j = alph.length + 1;
                                    }
                        }
            }
            
            
            
            for(let i = 0; i < n.length; i++){    //прогоняем результат через цикл, чтобы проверить правильность ввода
                        if(n[i] >= r1 || isNaN(r1) || isNaN(r2) || r1 < 2 || r1 > 36 || r2 < 2 || r2 > 36 || n.length > 25){    //проверяем правильность ввода данных
                                   str = -1;    //если что-то введено неправильно, то вспомогательная переменная меняется на -1, пропускается выполнения перевода 
                           }
            }
            
            if(str != -1){    //если ошибок нет
                        
                        //Перевод в десятичную систему счисления
                        
                        for (let i = 0; i < n.length; i++){    //прогоняем массив через цикл, чтобы получить перевод исходного числа в десятичную систему счисления
                                    str += n[i] * Math.pow(r1, x);    //перевод исходного числа в десятичную систему счисления
                                    x++;
                        }  
                        
                        //Перевод из десятичной системы счисления в нужную
                        
                        while (str > 0) {    //запускаем цикл перевода
                            ans += alph[str % r2];    //остаток от деления записываем в ответ
                            str = Math.floor(str / r2);    //делим число на нужную систему счисления   
                        }
                        
                        //вывод ответа в виде ИСХОДНОЕ ЧИСЛО исходная с.с. = РЕЗУЛЬТАТ нужная с.с.
                        if (r1 != 0 && r2 != 0 && parseInt(input, 10) != 0){
                                    document.getElementById('ans').innerHTML += `${input}<sub>${String(r1)}</sub> = ${ans.split('').reverse().join('')}<sub>${String(r2)}</sub>`;
                        }
                        else{
                                    document.getElementById('ans').innerHTML += 'Обязательное поле не заполнено!';
                        }
            }
            else {    //если массив не прошёл проверку, выводим сообщение об ошибке
                        document.getElementById('ans').innerHTML += 'Проверьте правильность введённых данных!';
            }    
}

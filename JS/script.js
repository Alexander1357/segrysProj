function cleanUp () {    //очистка полей ввода и вывода ответа
            
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
            let x = 0;    //вспомогательная переменная
            document.getElementById('ans').innerHTML = '';    //чистим строку с ответом
            
            n = input.split('').reverse();    //обЪявляем переменную, в которую записывается массив из цифр исходного числа и переворачивается
            
            for (let i = 0; i < n.length; i++){    //прогоняем массив через два цикла, чтобы заменить буквы на цифры
                        for (let j = 0; j < alph.length; j++){
                                    if (n[i] == '.'){    //если число дробное, то запоминаем позицию точки и убираем
                                                x = -i;
                                                n.splice(i, 1);
                                    }
                                    if (n[i] == alph[j]){    //запускается проверка, в которой в исходном числе строки меняются на числа
                                                n[i] = j;    //меняем 
                                                n[i] = parseInt(n[i], 10);
                                    }
                                    if (n[i] == ' ' || parseInt(n[i]) == 0){
                                                str = -1;
                                    }
                        }
            }
            
            
            
            for(let i = 0; i < n.length; i++){    //прогоняем результат через цикл, чтобы проверить правильность ввода
                        if(n[i] >= r1 || n.length > 25 || isNaN(n[i])){    //проверяем правильность ввода данных
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
                        
                        let h = str;    //запоминаем результат для перевода дробной части  
                        if (h != Math.floor(h)){    //проверка числа на наличие дробной части
                                    let f1 =  h - Math.floor(h);    //берём дробную часть из числа
                                    while (Math.floor(f1) != f1 ){    //запускаем цикл, пока дробная часть не обнулится
                                                f1 *= r2;    //умножаем дробную часть на основание нужной системы счисления
                                                ans += Math.floor(f1);    //записываем в результат целое число
                                                f1 -= Math.floor(f1);    //делаем из числа дробное число с целой частью 0
                                                if (ans.length == 15){    //если длина дроби больше 15, то заканчиваем перевод
                                                            f1 = Math.floor(f1);    //заканчиваем перевод
                                                }
                                    }
                                    n = ans.split('').reverse().join('');    //в свободную переменную записываем результат перевода 
                                    ans = n;    //записываем результат в ответ
                                    ans += '.';    //отделяем точкой
                        } 
                        
                        str = Math.floor(str);    //переводим целую часть
                        
                        while (str > 0) {    //запускаем цикл перевода  
                            ans += alph[str % r2];    //остаток от деления записываем в ответ
                            str = Math.floor(str / r2);    //делим число на нужную систему счисления   
                        }
                        
                        //вывод ответа в виде ИСХОДНОЕ ЧИСЛО исходная с.с. = РЕЗУЛЬТАТ нужная с.с.
                        document.getElementById('ans').innerHTML += `${input}<sub>${String(r1)}</sub> = ${ans.split('').reverse().join('')}<sub>${String(r2)}</sub>`;
            }
            else {    //если массив не прошёл проверку, выводим сообщение об ошибке
                        document.getElementById('ans').innerHTML += 'Проверьте правильность введённых данных!';
            }    
}

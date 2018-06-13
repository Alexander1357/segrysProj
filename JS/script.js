function FromDec() {
            var n = +document.getElementById('key').value;
            var r = +document.getElementById('sys').value;
            const mas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
            var s = "";
            document.getElementById('ans').innerHTML = "";
            while (n > 0) {
                s += mas[n % r];
                n = n / r;
                if (n < Math.round(n)) {
                    n = Math.round(n);
                    n--;
                }
                else
                    n = Math.round(n);
            }
            document.getElementById('ans').innerHTML += s.split("").reverse().join("");
        }

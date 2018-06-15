
const alph = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function fromSysToSyst(string str){
            var n = str.split("");
            var r = +document.getElementById('syst').value;
            for (var i = 0; i < n.length; i++){
                        for (var j = 0; j < alph.length; j++){
                                    if (n[i] == alph[j]){
                                                n[i] = j;
                                                j = alph.length;
                                    }
                        }
            }
            for (var i = 0; i < n.length; i++){
                        str += +n[i] * Math.pow(r, i);
            }
            return str;
}

function fromDecToSys() {
    
            var n = +document.getElementById('key').value;
            var r = +document.getElementById('sys').value;
            var s = "";
            document.getElementById('ans').innerHTML = "";
            while (n > 0) {
                s += alph[n % r];
                n = n / r;
                if (n < Math.round(n)) {
                    n = Math.round(n);
                    n--;
                }
                else
                    n = Math.round(n);
            }
            s = fromSysToSyst(s);
    document.getElementById('ans').innerHTML += s.split("").reverse().join("");
}

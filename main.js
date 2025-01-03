(function Program() {
    "use strict";

    document.querySelector("#program1 form").addEventListener("submit", function (event) {
        event.preventDefault();
        let n = document.querySelector("#program1 input").value.trim();
        let word_map = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
            20: "twenty",
            30: "thirty",
            40: "fourty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
            100: "hundred",
            1000: "thousand",
            10000: "ten thousand",
        };
        function convert(n) {
            if (n in word_map) {
                return word_map[n];
            } else {
                if (n.length === 2) {
                    return word_map[`${n[0]}0`] + " " + word_map[n[1]];
                } else if (n.length === 3) {
                    let output = word_map[n[0]] + " " + word_map["100"];
                    if (parseInt(n.slice(1, 3)) !== 0) {
                        output += " " + convert(parseInt(n.slice(1, 3)).toString());
                    }
                    return output;
                } else if (n.length === 4) {
                    let output = word_map[n[0]] + " " + word_map["1000"];
                    if (parseInt(n.slice(1, 4)) !== 0) {
                        output += " " + convert(parseInt(n.slice(1, 4)).toString());
                    }
                    return output
                }
            }
        }
        document.querySelector("#program1 pre").innerHTML = convert(n).trim().split(/\s+/).map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    });

    document.querySelector("#program2 form").addEventListener("submit", function (event) {
        event.preventDefault();
        let n = parseInt(document.querySelector("#program2 input").value.trim()), output = "";
        while (n !== 0) {
            output += (n % 2).toString();
            n = Math.floor(n / 2);
        }
        document.querySelector("#program2 pre").innerHTML = output.trim().split('').reverse().join('');
    });

    document.querySelector("#program3 form").addEventListener("submit", function (event) {
        event.preventDefault();
        let n = parseInt(document.querySelector("#program3 input").value.trim()), output = "";
        let symbol_map = {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX",
            10: "X",
            20: "XX",
            30: "XXX",
            40: "XL",
            50: "L",
            60: "LX",
            70: "LXX",
            80: "LXXX",
            90: "XC",
            100: "C",
            200: "CC",
            300: "CCC",
            400: "CD",
            500: "D",
            600: "DC",
            700: "DCC",
            800: "DCCC",
            900: "CM",
            1000: "M",
        }

        if (n.toString() in symbol_map) {
            output = symbol_map[n.toString()];
        } else {
            let stack = []
            stack.push(symbol_map[n % 10]);
            if(n>10) {
                stack.push(symbol_map[(n%100) - (n%10)]);
                if(n>100) {
                    stack.push(symbol_map[(n%1000) - (n%100)]);
                    if(n>1000) {
                        stack.push(symbol_map["1000"].repeat(Math.floor(n/1000)));
                    }
                }
            }
            output += stack.reverse().join("")
        }

        document.querySelector("#program3 pre").innerHTML = output;
    });

    document.querySelector("#program4 form").addEventListener("submit", function(event){
        event.preventDefault();
        let n = parseInt(document.querySelector("#program4 input").value.trim()), output = "";
        let x = 1;
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                if(i % 2 !== 0) {
                    output += x.toString() + "\t";
                    x += 1;
                } else {
                    output += ((n*i)-(j-1)).toString() + "\t"
                }
            }
            output += "\n";
            x += i % 2 === 0 ? n : 0;
        }
        document.querySelector("#program4 pre:last-child").innerHTML = output;
    });

    document.querySelector("#program5 form").addEventListener("submit", function(event){
        event.preventDefault();
        let n = parseInt(document.querySelector("#program5 input").value.trim()), output = "";

        function fact(n) {
            if(n === 0)
                return 1;
            let out = 1;
            for(let i=2;i<=n;i++){
                out *= i;
            }
            return out;
        }

        // nCi = n! / (i! * (n-i)!)   – ith element of nth row, here n and i starts with 0

        for(let i = 1; i <= n; i++) { 
            let col = 0;
            for(let j = 1; j <= n; j++) {
                if(j <= n-i) {
                    output += " " + " ";
                } else {
                    output += Math.floor((fact(i-1))/(fact(col) * fact(i-1-col))) + "   ";
                    col++;
                }
            }
            output += "\n";
        }

        document.querySelector("#program5 pre").innerHTML = output;
    });

}());

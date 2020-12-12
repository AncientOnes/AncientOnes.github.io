   var isTrue = false;
        var v1Played = false;
        var vPlayed = false;
        var morse1Played = false;
        var morse2Played = false;
        var rand1 = Math.floor((Math.random() * 150) + 1);
        var rand2 = Math.floor((Math.random() * 150) + 1);
        console.log("Wklv zdv wkh udglr ri d Ghwhfwlyh qdphg Dphold Zdwvrq")
        console.error("FAILED ASSUMPTION: THIS IS     " + rand1.toString())
        console.error("SYNTAX ERROR")
        console.error("SYNTAX ERROR")
        console.log("Vkh xvhg wklv udglr wr ilqg foxhv iurp khu suhylrxv fdvhv")
        console.error("Lw vhhpv wkdw vkh idlohg wklv fdvh    " + rand2.toString())
        console.log("Lw'v xs wr brx wkhq")
        var a = 101.63
        var aa = "Hololive idol 'Pekora' was found near train tracks unconcious until a \n train passed by her, almost hitting her. she said that she wasn't \n aware of what was happening during that night."
        function playAudio() {
            if(rand1 == Math.floor(a)) {
                if(!morse1Played){
                    morse1Played = true;
                    var el = document.getElementById("morse1")
                    el.play()
                }
           }
           if(rand2 == Math.floor(a)) {
            if(!morse2Played){
                    morse2Played = true;
                    var el = document.getElementById("morse2")
                    el.play()
                }
           }

           if(a == 88.31) {
            var el = document.getElementById("v")

           document.getElementById("text2").innerText = aa;
           window.setTimeout(removeText, 13000)
                    el.play()
           }

           if(a == 98.31) {
            var el = document.getElementById("v1")
            document.getElementById("text2").innerText = "Hololive idol 'Subaru' was found dead at a Street nearby The Hololive Headquarters\nHer fingers were also chopped off while the body was being investigated.";
                    el.play()
                    window.setTimeout(removeText, 8000)
           }
        }
        function removeText() {
            document.getElementById("text2").innerText = " ";
        }   
        var lol = document.getElementById("t").addEventListener("wheel", function (event) {
            if (a.toFixed(2) == 90.23) {
                a = 88.31
            document.getElementById("t").textContent = "< " + 88.31 + " >"
           }
           if (a.toFixed(2) == 97.59) {
                a = 98.31
            document.getElementById("t").textContent = "< " + a + " >"
           }
           if (a >= 150.0) {
            isTrue = true;
            document.getElementById("t").textContent = "< ERROR: SHES GONE >"
            location.reload()
           } else {
            if (a <= 0.0) {
            isTrue = true;
            document.getElementById("t").textContent = "< ERROR: SHES ALSO GONE >"
             location.reload()
           }
           if (!isTrue) {

                if (event.deltaY < 0 ){
                a += 1.01
            document.getElementById("t").textContent = "< " + a.toFixed(2) + " >"
            } else if (event.deltaY > 0) {
                a -= 1.01
            document.getElementById("t").textContent = "< " + a.toFixed(2) + " >"
            }
           }
           } 
        });

        

// im sorry.

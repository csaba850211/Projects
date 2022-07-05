

var k3 = Math.round(Math.random() * 3 + 1); /*dobókocka három oldalú */
var k6 = Math.round(Math.random() * 6 + 1); /*dobókocka hat oldalú*/
var k8 = Math.round(Math.random() * 8 + 1); /*dobókocka nyolc oldalú */
var k10 = Math.round(Math.random() * 10 + 1); /*dobókocka tíz oldalú */

function save() { /*ez a mentés script! */
    localStorage.setItem("html", document.body.innerHTML);
    alert("Mentve!");
    
}

function load() { /*ez a betöltés script! */
   let content = localStorage.getItem("html");
   if(content) {
    document.body.innerHTML = content;
   }
   alert("Karakter betöltve!");
}

function torles() {
   localStorage.removeItem("html");
   alert("Karakter adatai törölve!")
}

function ismerteto() {
    alert("Üdvözöllek a M.A.G.U.S. karakterkészítőben. Első lépésként válassz fajt. Második lépésként válassz kasztot. Harmadik lépésként válassz vallást. Fontos: bizonyos kasztoknál kötelező vallást választani! Valamint, némely faj nem tartozhat bármely kasztba! Miután ezekkel megvagy, nyomj az 'értékek kidobása!' gombra. Ezután a 'számolj!' gombra. A fegyveres harcérték számításával tudod a karakter teljes harcértékeit megjeleníteni. Itt a harcértékek nevei mellett a fegyverek saját értékei vannak, míg a rózsaszín rubrikába a teljes kiszámított érték. Ha nem vagy elégedett a kockadobásos tulajdonságok meghatározásával, akkor a '+' és a '-' gombokkal beállíthatod magadnak. Azonban ilyenkor újra a 'számolj'-t kell nyomnod, valamint a harci értéket is újra csinálni.")
}

function szintplus() {

    document.getElementById("szint").innerHTML++;

    if (document.getElementById("kasztselector").value == "harcos") {
        document.getElementById("maxhm").innerHTML = 11;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 4);
    }

    if (document.getElementById("kasztselector").value == "gladiator") {
        document.getElementById("maxhm").innerHTML = 12;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 5);
    }

    if (document.getElementById("kasztselector").value == "fejvadasz") {
        document.getElementById("maxhm").innerHTML = 11;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 5);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 3;
    }

    if (document.getElementById("kasztselector").value == "lovag") {
        document.getElementById("maxhm").innerHTML = 12;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 5);
    }

    if (document.getElementById("kasztselector").value == "tolvaj") {
        document.getElementById("maxhm").innerHTML = 6;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 3);
    }

    if (document.getElementById("kasztselector").value == "bard") {
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 3);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 3;
        document.getElementById("mana").innerHTML = parseFloat(document.getElementById("mana").innerHTML) + (parseFloat(document.getElementById("intelligencia").innerHTML) - 10);

    }

    if (document.getElementById("kasztselector").value == "pap") {
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 2);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 4;
        document.getElementById("mana").innerHTML = parseFloat(document.getElementById("mana").innerHTML) + (k3 + 6);
    }

    if (document.getElementById("kasztselector").value == "paplovag") {
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 5);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 4;
        document.getElementById("mana").innerHTML = parseFloat(document.getElementById("mana").innerHTML) + (k3 + 6);
    }

    if (document.getElementById("kasztselector").value == "harcmuvesz") {
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 5);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 5;
    }

    if (document.getElementById("kasztselector").value == "kardmuvesz") {
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 5);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 5;
    }

    if (document.getElementById("kasztselector").value == "boszorkany") {
        document.getElementById("maxhm").innerHTML = 4;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 4;
        document.getElementById("mana").innerHTML = parseFloat(document.getElementById("mana").innerHTML) + 8;
    }

    if (document.getElementById("kasztselector").value == "boszorkanymester") {
        document.getElementById("maxhm").innerHTML = 7;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 1);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 4;
        document.getElementById("mana").innerHTML = parseFloat(document.getElementById("mana").innerHTML) + 7;
    }

    if (document.getElementById("kasztselector").value == "tuzvarazslo") {
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6 + 1);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 4;
        document.getElementById("mana").innerHTML = parseFloat(document.getElementById("mana").innerHTML) + 5;
    }

    if (document.getElementById("kasztselector").value == "varazslo") {
        document.getElementById("maxhm").innerHTML = 4;
        document.getElementById("fp").innerHTML = parseFloat(document.getElementById("fp").innerHTML) + (k6);
        document.getElementById("pszi").innerHTML = parseFloat(document.getElementById("pszi").innerHTML) + 7;
        document.getElementById("mana").innerHTML = parseFloat(document.getElementById("mana").innerHTML) + 10;
    }

}

function fegyverrel1() {    
    document.getElementById("fullke1").innerHTML = parseFloat(document.getElementById("ke").innerHTML) + parseFloat(document.getElementById("fegyver1ke").innerHTML);
    document.getElementById("fullte1").innerHTML = parseFloat(document.getElementById("te").innerHTML) + parseFloat(document.getElementById("fegyver1te").innerHTML);
    document.getElementById("fullve1").innerHTML = parseFloat(document.getElementById("ve").innerHTML) + parseFloat(document.getElementById("fegyver1ve").innerHTML);
    document.getElementById("fullce1").innerHTML = parseFloat(document.getElementById("ce").innerHTML) + parseFloat(document.getElementById("fegyver1ce").innerHTML);

    document.getElementById("fullke2").innerHTML = parseFloat(document.getElementById("ke").innerHTML) + parseFloat(document.getElementById("fegyver2ke").innerHTML);
    document.getElementById("fullte2").innerHTML = parseFloat(document.getElementById("te").innerHTML) + parseFloat(document.getElementById("fegyver2te").innerHTML);
    document.getElementById("fullve2").innerHTML = parseFloat(document.getElementById("ve").innerHTML) + parseFloat(document.getElementById("fegyver2ve").innerHTML);
    document.getElementById("fullce2").innerHTML = parseFloat(document.getElementById("ce").innerHTML) + parseFloat(document.getElementById("fegyver2ce").innerHTML);

    document.getElementById("fullke3").innerHTML = parseFloat(document.getElementById("ke").innerHTML) + parseFloat(document.getElementById("fegyver3ke").innerHTML);
    document.getElementById("fullte3").innerHTML = parseFloat(document.getElementById("te").innerHTML) + parseFloat(document.getElementById("fegyver3te").innerHTML);
    document.getElementById("fullve3").innerHTML = parseFloat(document.getElementById("ve").innerHTML) + parseFloat(document.getElementById("fegyver3ve").innerHTML);
    document.getElementById("fullce3").innerHTML = parseFloat(document.getElementById("ce").innerHTML) + parseFloat(document.getElementById("fegyver3ce").innerHTML);

    document.getElementById("fullke4").innerHTML = parseFloat(document.getElementById("ke").innerHTML) + parseFloat(document.getElementById("fegyver4ke").innerHTML);
    document.getElementById("fullte4").innerHTML = parseFloat(document.getElementById("te").innerHTML) + parseFloat(document.getElementById("fegyver4te").innerHTML);
    document.getElementById("fullve4").innerHTML = parseFloat(document.getElementById("ve").innerHTML) + parseFloat(document.getElementById("fegyver4ve").innerHTML);
    document.getElementById("fullce4").innerHTML = parseFloat(document.getElementById("ce").innerHTML) + parseFloat(document.getElementById("fegyver4ce").innerHTML);
}


function fegyver() { /*elso fegyversor */

    if (document.getElementById("fegyver1").value == "valassz") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "0";
        document.getElementById("fegyver1tam").innerHTML = "0";

     }

    if (document.getElementById("fegyver1").value == "shadlekibuzogany") {
        document.getElementById("fegyver1ke").innerHTML = 8;
        document.getElementById("fegyver1te").innerHTML = 13;
        document.getElementById("fegyver1ve").innerHTML = 14;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "egykezescsatabard") {
        document.getElementById("fegyver1ke").innerHTML = 5;
        document.getElementById("fegyver1te").innerHTML = 12;
        document.getElementById("fegyver1ve").innerHTML = 11;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "ketkezescsatabard") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 8;
        document.getElementById("fegyver1ve").innerHTML = 6;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "3k6";
        document.getElementById("fegyver1tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver1").value == "csatacsakany") {
        document.getElementById("fegyver1ke").innerHTML = 5;
        document.getElementById("fegyver1te").innerHTML = 11;
        document.getElementById("fegyver1ve").innerHTML = 8;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "hajitobard") {
        document.getElementById("fegyver1ke").innerHTML = 9;
        document.getElementById("fegyver1te").innerHTML = 10;
        document.getElementById("fegyver1ve").innerHTML = 4;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "rovidkard") {
        document.getElementById("fegyver1ke").innerHTML = 9;
        document.getElementById("fegyver1te").innerHTML = 12;
        document.getElementById("fegyver1ve").innerHTML = 14;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "hosszukard") {
        document.getElementById("fegyver1ke").innerHTML = 6;
        document.getElementById("fegyver1te").innerHTML = 14;
        document.getElementById("fegyver1ve").innerHTML = 16;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "masfelkezeskard") {
        document.getElementById("fegyver1ke").innerHTML = 4;
        document.getElementById("fegyver1te").innerHTML = 13;
        document.getElementById("fegyver1ve").innerHTML = 12;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "2k6";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "lovagikard") {
        document.getElementById("fegyver1ke").innerHTML = 2;
        document.getElementById("fegyver1te").innerHTML = 7;
        document.getElementById("fegyver1ve").innerHTML = 10;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "pallos") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 6;
        document.getElementById("fegyver1ve").innerHTML = 2;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "3k6 + 1";
        document.getElementById("fegyver1tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver1").value == "szablya") {
        document.getElementById("fegyver1ke").innerHTML = 7;
        document.getElementById("fegyver1te").innerHTML = 15;
        document.getElementById("fegyver1ve").innerHTML = 17;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "dzsennszablya") {
        document.getElementById("fegyver1ke").innerHTML = 9;
        document.getElementById("fegyver1te").innerHTML = 20;
        document.getElementById("fegyver1ve").innerHTML = 17;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "jatagan") {
        document.getElementById("fegyver1ke").innerHTML = 7;
        document.getElementById("fegyver1te").innerHTML = 14;
        document.getElementById("fegyver1ve").innerHTML = 14;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "handzsar") {
        document.getElementById("fegyver1ke").innerHTML = 6;
        document.getElementById("fegyver1te").innerHTML = 14;
        document.getElementById("fegyver1ve").innerHTML = 15;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "fejvadaszkard") {
        document.getElementById("fegyver1ke").innerHTML = 8;
        document.getElementById("fegyver1te").innerHTML = 16;
        document.getElementById("fegyver1ve").innerHTML = 16;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "slankard") {
        document.getElementById("fegyver1ke").innerHTML = 8;
        document.getElementById("fegyver1te").innerHTML = 20;
        document.getElementById("fegyver1ve").innerHTML = 12;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "kigyokard") {
        document.getElementById("fegyver1ke").innerHTML = 6;
        document.getElementById("fegyver1te").innerHTML = 14;
        document.getElementById("fegyver1ve").innerHTML = 15;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "kes") {
        document.getElementById("fegyver1ke").innerHTML = 10;
        document.getElementById("fegyver1te").innerHTML = 4;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k5";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "marasequor") {
        document.getElementById("fegyver1ke").innerHTML = 7;
        document.getElementById("fegyver1te").innerHTML = 16;
        document.getElementById("fegyver1ve").innerHTML = 14;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "ramiera") {
        document.getElementById("fegyver1ke").innerHTML = 8;
        document.getElementById("fegyver1te").innerHTML = 17;
        document.getElementById("fegyver1ve").innerHTML = 14;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "sequor") {
        document.getElementById("fegyver1ke").innerHTML = 8;
        document.getElementById("fegyver1te").innerHTML = 13;
        document.getElementById("fegyver1ve").innerHTML = 16;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "slancsillag") {
        document.getElementById("fegyver1ke").innerHTML = 10;
        document.getElementById("fegyver1te").innerHTML = 4;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k3";
        document.getElementById("fegyver1tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver1").value == "tor") {
        document.getElementById("fegyver1ke").innerHTML = 10;
        document.getElementById("fegyver1te").innerHTML = 8;
        document.getElementById("fegyver1ve").innerHTML = 2;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "dobotor") {
        document.getElementById("fegyver1ke").innerHTML = 10;
        document.getElementById("fegyver1te").innerHTML = 11;
        document.getElementById("fegyver1ve").innerHTML = 2;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "slantor") {
        document.getElementById("fegyver1ke").innerHTML = 9;
        document.getElementById("fegyver1te").innerHTML = 14;
        document.getElementById("fegyver1ve").innerHTML = 6;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "torkard") {
        document.getElementById("fegyver1ke").innerHTML = 9;
        document.getElementById("fegyver1te").innerHTML = 12;
        document.getElementById("fegyver1ve").innerHTML = 14;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "hosszubot") {
        document.getElementById("fegyver1ke").innerHTML = 4;
        document.getElementById("fegyver1te").innerHTML = 10;
        document.getElementById("fegyver1ve").innerHTML = 16;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k5";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "rovidbot") {
        document.getElementById("fegyver1ke").innerHTML = 9;
        document.getElementById("fegyver1te").innerHTML = 9;
        document.getElementById("fegyver1ve").innerHTML = 17;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k3";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "furkosbot") {
        document.getElementById("fegyver1ke").innerHTML = 2;
        document.getElementById("fegyver1te").innerHTML = 7;
        document.getElementById("fegyver1ve").innerHTML = 14;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "egykezesbuzogany") {
        document.getElementById("fegyver1ke").innerHTML = 7;
        document.getElementById("fegyver1te").innerHTML = 11;
        document.getElementById("fegyver1ve").innerHTML = 12;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "ketkezesbuzogany") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 7;
        document.getElementById("fegyver1ve").innerHTML = 6;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "3k6";
        document.getElementById("fegyver1tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver1").value == "tuskesbuzogany") {
        document.getElementById("fegyver1ke").innerHTML = 7;
        document.getElementById("fegyver1te").innerHTML = 12;
        document.getElementById("fegyver1ve").innerHTML = 13;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "tollasbuzogany") {
        document.getElementById("fegyver1ke").innerHTML = 7;
        document.getElementById("fegyver1te").innerHTML = 12;
        document.getElementById("fegyver1ve").innerHTML = 13;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "lancosbuzogany") {
        document.getElementById("fegyver1ke").innerHTML = 4;
        document.getElementById("fegyver1te").innerHTML = 13;
        document.getElementById("fegyver1ve").innerHTML = 11;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "csephadaro") {
        document.getElementById("fegyver1ke").innerHTML = 1;
        document.getElementById("fegyver1te").innerHTML = 6;
        document.getElementById("fegyver1ve").innerHTML = 5;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "harcikalapacs") {
        document.getElementById("fegyver1ke").innerHTML = 5;
        document.getElementById("fegyver1te").innerHTML = 10;
        document.getElementById("fegyver1ve").innerHTML = 8;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "alabard") {
        document.getElementById("fegyver1ke").innerHTML = 1;
        document.getElementById("fegyver1te").innerHTML = 14;
        document.getElementById("fegyver1ve").innerHTML = 15;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver1").value == "darda") {
        document.getElementById("fegyver1ke").innerHTML = 8;
        document.getElementById("fegyver1te").innerHTML = 13;
        document.getElementById("fegyver1ve").innerHTML = 5;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "konnyukopja") {
        document.getElementById("fegyver1ke").innerHTML = 2;
        document.getElementById("fegyver1te").innerHTML = 11;
        document.getElementById("fegyver1ve").innerHTML = 12;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "lovaskopja") {
        document.getElementById("fegyver1ke").innerHTML = 1;
        document.getElementById("fegyver1te").innerHTML = 15;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver1").value == "nehezlovaskopja") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 16;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "2k10";
        document.getElementById("fegyver1tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver1").value == "landzsa") {
        document.getElementById("fegyver1ke").innerHTML = 4;
        document.getElementById("fegyver1te").innerHTML = 12;
        document.getElementById("fegyver1ve").innerHTML = 12;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "szigony") {
        document.getElementById("fegyver1ke").innerHTML = 4;
        document.getElementById("fegyver1te").innerHTML = 15;
        document.getElementById("fegyver1ve").innerHTML = 10;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10 + 1";
        document.getElementById("fegyve21tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "fuvocso") {
        document.getElementById("fegyver1ke").innerHTML = 8;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 7;
        document.getElementById("fegyver1sebzes").innerHTML= "spec.";
        document.getElementById("fegyver1tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver1").value == "rovidij") {
        document.getElementById("fegyver1ke").innerHTML = 5;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 4;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "hosszuij") {
        document.getElementById("fegyver1ke").innerHTML = 4;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 6;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "visszacsapoij") {
        document.getElementById("fegyver1ke").innerHTML = 3;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 8;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "elfij") {
        document.getElementById("fegyver1ke").innerHTML = 6;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 10;
        document.getElementById("fegyver1sebzes").innerHTML= "2k6";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "aquirnyilpuska") {
        document.getElementById("fegyver1ke").innerHTML = 5;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 18;
        document.getElementById("fegyver1sebzes").innerHTML= "1k5";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "kezinyilpuska") {
        document.getElementById("fegyver1ke").innerHTML = 3;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 14;
        document.getElementById("fegyver1sebzes").innerHTML= "1k3";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "kahreinyilpuska") {
        document.getElementById("fegyver1ke").innerHTML = 9;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 13;
        document.getElementById("fegyver1sebzes").innerHTML= "1k3";
        document.getElementById("fegyver1tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver1").value == "konnyunyilpuska") {
        document.getElementById("fegyver1ke").innerHTML = 2;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 16;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "neheznyilpuska") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 15;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10 + 2";
        document.getElementById("fegyver1tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver1").value == "shadonipanceltoro") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 17;
        document.getElementById("fegyver1sebzes").innerHTML= "2k10";
        document.getElementById("fegyver1tam").innerHTML = "1/5";
    }

    if (document.getElementById("fegyver1").value == "parittya") {
        document.getElementById("fegyver1ke").innerHTML = 2;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 1;
        document.getElementById("fegyver1sebzes").innerHTML= "1k5";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "bola") {
        document.getElementById("fegyver1ke").innerHTML = 2;
        document.getElementById("fegyver1te").innerHTML = 10;
        document.getElementById("fegyver1ve").innerHTML = 2;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k5";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "dobohalo") {
        document.getElementById("fegyver1ke").innerHTML = 1;
        document.getElementById("fegyver1te").innerHTML = 8;
        document.getElementById("fegyver1ve").innerHTML = 4;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "spec.";
        document.getElementById("fegyver1tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver1").value == "garrott") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 5;
        document.getElementById("fegyver1ve").innerHTML = -20;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k10";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "haritotor") {
        document.getElementById("fegyver1ke").innerHTML = 8;
        document.getElementById("fegyver1te").innerHTML = 4;
        document.getElementById("fegyver1ve").innerHTML = 19;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "korbacs") {
        document.getElementById("fegyver1ke").innerHTML = 4;
        document.getElementById("fegyver1te").innerHTML = 6;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k3";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "lasszo") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 1;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "spec.";
        document.getElementById("fegyver1tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver1").value == "ostor") {
        document.getElementById("fegyver1ke").innerHTML = 3;
        document.getElementById("fegyver1te").innerHTML = 6;
        document.getElementById("fegyver1ve").innerHTML = 0;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k2";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "okol") {
        document.getElementById("fegyver1ke").innerHTML = 10;
        document.getElementById("fegyver1te").innerHTML = 4;
        document.getElementById("fegyver1ve").innerHTML = 1;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k2";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "vasokol") {
        document.getElementById("fegyver1ke").innerHTML = 9;
        document.getElementById("fegyver1te").innerHTML = 5;
        document.getElementById("fegyver1ve").innerHTML = 2;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k3";
        document.getElementById("fegyver1tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver1").value == "kispajzs") {
        document.getElementById("fegyver1ke").innerHTML = 1;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 20;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "kozepespajzs") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 35;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver1").value == "nagypajzs") {
        document.getElementById("fegyver1ke").innerHTML = 0;
        document.getElementById("fegyver1te").innerHTML = 0;
        document.getElementById("fegyver1ve").innerHTML = 35;
        document.getElementById("fegyver1ce").innerHTML = 0;
        document.getElementById("fegyver1sebzes").innerHTML= "1k6";
        document.getElementById("fegyver1tam").innerHTML = "1/2";
    }

}

function fegyver2() {  /*második fegyversor */

    if (document.getElementById("fegyver2").value == "valassz") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "0";
        document.getElementById("fegyver2tam").innerHTML = "0";

     }

    if (document.getElementById("fegyver2").value == "shadlekibuzogany") {
        document.getElementById("fegyver2ke").innerHTML = 8;
        document.getElementById("fegyver2te").innerHTML = 13;
        document.getElementById("fegyver2ve").innerHTML = 14;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "egykezescsatabard") {
        document.getElementById("fegyver2ke").innerHTML = 5;
        document.getElementById("fegyver2te").innerHTML = 12;
        document.getElementById("fegyver2ve").innerHTML = 11;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "ketkezescsatabard") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 8;
        document.getElementById("fegyver2ve").innerHTML = 6;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "3k6";
        document.getElementById("fegyver2tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver2").value == "csatacsakany") {
        document.getElementById("fegyver2ke").innerHTML = 5;
        document.getElementById("fegyver2te").innerHTML = 11;
        document.getElementById("fegyver2ve").innerHTML = 8;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "hajitobard") {
        document.getElementById("fegyver2ke").innerHTML = 9;
        document.getElementById("fegyver2te").innerHTML = 10;
        document.getElementById("fegyver2ve").innerHTML = 4;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "rovidkard") {
        document.getElementById("fegyver2ke").innerHTML = 9;
        document.getElementById("fegyver2te").innerHTML = 12;
        document.getElementById("fegyver2ve").innerHTML = 14;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "hosszukard") {
        document.getElementById("fegyver2ke").innerHTML = 6;
        document.getElementById("fegyver2te").innerHTML = 14;
        document.getElementById("fegyver2ve").innerHTML = 16;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "masfelkezeskard") {
        document.getElementById("fegyver2ke").innerHTML = 4;
        document.getElementById("fegyver2te").innerHTML = 13;
        document.getElementById("fegyver2ve").innerHTML = 12;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "2k6";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "lovagikard") {
        document.getElementById("fegyver2ke").innerHTML = 2;
        document.getElementById("fegyver2te").innerHTML = 7;
        document.getElementById("fegyver2ve").innerHTML = 10;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "pallos") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 6;
        document.getElementById("fegyver2ve").innerHTML = 2;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "3k6 + 1";
        document.getElementById("fegyver2tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver2").value == "szablya") {
        document.getElementById("fegyver2ke").innerHTML = 7;
        document.getElementById("fegyver2te").innerHTML = 15;
        document.getElementById("fegyver2ve").innerHTML = 17;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "dzsennszablya") {
        document.getElementById("fegyver2ke").innerHTML = 9;
        document.getElementById("fegyver2te").innerHTML = 20;
        document.getElementById("fegyver2ve").innerHTML = 17;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "jatagan") {
        document.getElementById("fegyver2ke").innerHTML = 7;
        document.getElementById("fegyver2te").innerHTML = 14;
        document.getElementById("fegyver2ve").innerHTML = 14;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "handzsar") {
        document.getElementById("fegyver2ke").innerHTML = 6;
        document.getElementById("fegyver2te").innerHTML = 14;
        document.getElementById("fegyver2ve").innerHTML = 15;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "fejvadaszkard") {
        document.getElementById("fegyver2ke").innerHTML = 8;
        document.getElementById("fegyver2te").innerHTML = 16;
        document.getElementById("fegyver2ve").innerHTML = 16;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "slankard") {
        document.getElementById("fegyver2ke").innerHTML = 8;
        document.getElementById("fegyver2te").innerHTML = 20;
        document.getElementById("fegyver2ve").innerHTML = 12;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "kigyokard") {
        document.getElementById("fegyver2ke").innerHTML = 6;
        document.getElementById("fegyver2te").innerHTML = 14;
        document.getElementById("fegyver2ve").innerHTML = 15;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "kes") {
        document.getElementById("fegyver2ke").innerHTML = 10;
        document.getElementById("fegyver2te").innerHTML = 4;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k5";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "marasequor") {
        document.getElementById("fegyver2ke").innerHTML = 7;
        document.getElementById("fegyver2te").innerHTML = 16;
        document.getElementById("fegyver2ve").innerHTML = 14;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "ramiera") {
        document.getElementById("fegyver2ke").innerHTML = 8;
        document.getElementById("fegyver2te").innerHTML = 17;
        document.getElementById("fegyver2ve").innerHTML = 14;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "sequor") {
        document.getElementById("fegyver2ke").innerHTML = 8;
        document.getElementById("fegyver2te").innerHTML = 13;
        document.getElementById("fegyver2ve").innerHTML = 16;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "slancsillag") {
        document.getElementById("fegyver2ke").innerHTML = 10;
        document.getElementById("fegyver2te").innerHTML = 4;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k3";
        document.getElementById("fegyver2tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver2").value == "tor") {
        document.getElementById("fegyver2ke").innerHTML = 10;
        document.getElementById("fegyver2te").innerHTML = 8;
        document.getElementById("fegyver2ve").innerHTML = 2;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "dobotor") {
        document.getElementById("fegyver2ke").innerHTML = 10;
        document.getElementById("fegyver2te").innerHTML = 11;
        document.getElementById("fegyver2ve").innerHTML = 2;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "slantor") {
        document.getElementById("fegyver2ke").innerHTML = 9;
        document.getElementById("fegyver2te").innerHTML = 14;
        document.getElementById("fegyver2ve").innerHTML = 6;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "torkard") {
        document.getElementById("fegyver2ke").innerHTML = 9;
        document.getElementById("fegyver2te").innerHTML = 12;
        document.getElementById("fegyver2ve").innerHTML = 14;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "hosszubot") {
        document.getElementById("fegyver2ke").innerHTML = 4;
        document.getElementById("fegyver2te").innerHTML = 10;
        document.getElementById("fegyver2ve").innerHTML = 16;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k5";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "rovidbot") {
        document.getElementById("fegyver2ke").innerHTML = 9;
        document.getElementById("fegyver2te").innerHTML = 9;
        document.getElementById("fegyver2ve").innerHTML = 17;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k3";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "furkosbot") {
        document.getElementById("fegyver2ke").innerHTML = 2;
        document.getElementById("fegyver2te").innerHTML = 7;
        document.getElementById("fegyver2ve").innerHTML = 14;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "egykezesbuzogany") {
        document.getElementById("fegyver2ke").innerHTML = 7;
        document.getElementById("fegyver2te").innerHTML = 11;
        document.getElementById("fegyver2ve").innerHTML = 12;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "ketkezesbuzogany") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 7;
        document.getElementById("fegyver2ve").innerHTML = 6;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "3k6";
        document.getElementById("fegyver2tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver2").value == "tuskesbuzogany") {
        document.getElementById("fegyver2ke").innerHTML = 7;
        document.getElementById("fegyver2te").innerHTML = 12;
        document.getElementById("fegyver2ve").innerHTML = 13;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "tollasbuzogany") {
        document.getElementById("fegyver2ke").innerHTML = 7;
        document.getElementById("fegyver2te").innerHTML = 12;
        document.getElementById("fegyver2ve").innerHTML = 13;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "lancosbuzogany") {
        document.getElementById("fegyver2ke").innerHTML = 4;
        document.getElementById("fegyver2te").innerHTML = 13;
        document.getElementById("fegyver2ve").innerHTML = 11;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "csephadaro") {
        document.getElementById("fegyver2ke").innerHTML = 1;
        document.getElementById("fegyver2te").innerHTML = 6;
        document.getElementById("fegyver2ve").innerHTML = 5;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "harcikalapacs") {
        document.getElementById("fegyver2ke").innerHTML = 5;
        document.getElementById("fegyver2te").innerHTML = 10;
        document.getElementById("fegyver2ve").innerHTML = 8;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "alabard") {
        document.getElementById("fegyver2ke").innerHTML = 1;
        document.getElementById("fegyver2te").innerHTML = 14;
        document.getElementById("fegyver2ve").innerHTML = 15;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver2").value == "darda") {
        document.getElementById("fegyver2ke").innerHTML = 8;
        document.getElementById("fegyver2te").innerHTML = 13;
        document.getElementById("fegyver2ve").innerHTML = 5;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "konnyukopja") {
        document.getElementById("fegyver2ke").innerHTML = 2;
        document.getElementById("fegyver2te").innerHTML = 11;
        document.getElementById("fegyver2ve").innerHTML = 12;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "lovaskopja") {
        document.getElementById("fegyver2ke").innerHTML = 1;
        document.getElementById("fegyver2te").innerHTML = 15;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver2").value == "nehezlovaskopja") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 16;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "2k10";
        document.getElementById("fegyver2tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver2").value == "landzsa") {
        document.getElementById("fegyver2ke").innerHTML = 4;
        document.getElementById("fegyver2te").innerHTML = 12;
        document.getElementById("fegyver2ve").innerHTML = 12;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "szigony") {
        document.getElementById("fegyver2ke").innerHTML = 4;
        document.getElementById("fegyver2te").innerHTML = 15;
        document.getElementById("fegyver2ve").innerHTML = 10;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10 + 1";
        document.getElementById("fegyve21tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "fuvocso") {
        document.getElementById("fegyver2ke").innerHTML = 8;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 7;
        document.getElementById("fegyver2sebzes").innerHTML= "spec.";
        document.getElementById("fegyver2tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver2").value == "rovidij") {
        document.getElementById("fegyver2ke").innerHTML = 5;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 4;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "hosszuij") {
        document.getElementById("fegyver2ke").innerHTML = 4;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 6;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "visszacsapoij") {
        document.getElementById("fegyver2ke").innerHTML = 3;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 8;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "elfij") {
        document.getElementById("fegyver2ke").innerHTML = 6;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 10;
        document.getElementById("fegyver2sebzes").innerHTML= "2k6";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "aquirnyilpuska") {
        document.getElementById("fegyver2ke").innerHTML = 5;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 18;
        document.getElementById("fegyver2sebzes").innerHTML= "1k5";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "kezinyilpuska") {
        document.getElementById("fegyver2ke").innerHTML = 3;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 14;
        document.getElementById("fegyver2sebzes").innerHTML= "1k3";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "kahreinyilpuska") {
        document.getElementById("fegyver2ke").innerHTML = 9;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 13;
        document.getElementById("fegyver2sebzes").innerHTML= "1k3";
        document.getElementById("fegyver2tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver2").value == "konnyunyilpuska") {
        document.getElementById("fegyver2ke").innerHTML = 2;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 16;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "neheznyilpuska") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 15;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10 + 2";
        document.getElementById("fegyver2tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver2").value == "shadonipanceltoro") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 17;
        document.getElementById("fegyver2sebzes").innerHTML= "2k10";
        document.getElementById("fegyver2tam").innerHTML = "1/5";
    }

    if (document.getElementById("fegyver2").value == "parittya") {
        document.getElementById("fegyver2ke").innerHTML = 2;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 1;
        document.getElementById("fegyver2sebzes").innerHTML= "1k5";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "bola") {
        document.getElementById("fegyver2ke").innerHTML = 2;
        document.getElementById("fegyver2te").innerHTML = 10;
        document.getElementById("fegyver2ve").innerHTML = 2;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k5";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "dobohalo") {
        document.getElementById("fegyver2ke").innerHTML = 1;
        document.getElementById("fegyver2te").innerHTML = 8;
        document.getElementById("fegyver2ve").innerHTML = 4;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "spec.";
        document.getElementById("fegyver2tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver2").value == "garrott") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 5;
        document.getElementById("fegyver2ve").innerHTML = -20;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k10";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "haritotor") {
        document.getElementById("fegyver2ke").innerHTML = 8;
        document.getElementById("fegyver2te").innerHTML = 4;
        document.getElementById("fegyver2ve").innerHTML = 19;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "korbacs") {
        document.getElementById("fegyver2ke").innerHTML = 4;
        document.getElementById("fegyver2te").innerHTML = 6;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k3";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "lasszo") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 1;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "spec.";
        document.getElementById("fegyver2tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver2").value == "ostor") {
        document.getElementById("fegyver2ke").innerHTML = 3;
        document.getElementById("fegyver2te").innerHTML = 6;
        document.getElementById("fegyver2ve").innerHTML = 0;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k2";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "okol") {
        document.getElementById("fegyver2ke").innerHTML = 10;
        document.getElementById("fegyver2te").innerHTML = 4;
        document.getElementById("fegyver2ve").innerHTML = 1;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k2";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "vasokol") {
        document.getElementById("fegyver2ke").innerHTML = 9;
        document.getElementById("fegyver2te").innerHTML = 5;
        document.getElementById("fegyver2ve").innerHTML = 2;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k3";
        document.getElementById("fegyver2tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver2").value == "kispajzs") {
        document.getElementById("fegyver2ke").innerHTML = 1;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 20;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "kozepespajzs") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 35;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver2").value == "nagypajzs") {
        document.getElementById("fegyver2ke").innerHTML = 0;
        document.getElementById("fegyver2te").innerHTML = 0;
        document.getElementById("fegyver2ve").innerHTML = 35;
        document.getElementById("fegyver2ce").innerHTML = 0;
        document.getElementById("fegyver2sebzes").innerHTML= "1k6";
        document.getElementById("fegyver2tam").innerHTML = "1/2";
    }


}

function fegyver3() {  /*harmadik fegyversor */

    if (document.getElementById("fegyver3").value == "valassz") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "0";
        document.getElementById("fegyver3tam").innerHTML = "0";

     }

    if (document.getElementById("fegyver3").value == "shadlekibuzogany") {
        document.getElementById("fegyver3ke").innerHTML = 8;
        document.getElementById("fegyver3te").innerHTML = 13;
        document.getElementById("fegyver3ve").innerHTML = 14;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "egykezescsatabard") {
        document.getElementById("fegyver3ke").innerHTML = 5;
        document.getElementById("fegyver3te").innerHTML = 12;
        document.getElementById("fegyver3ve").innerHTML = 11;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "ketkezescsatabard") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 8;
        document.getElementById("fegyver3ve").innerHTML = 6;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "3k6";
        document.getElementById("fegyver3tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver3").value == "csatacsakany") {
        document.getElementById("fegyver3ke").innerHTML = 5;
        document.getElementById("fegyver3te").innerHTML = 11;
        document.getElementById("fegyver3ve").innerHTML = 8;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "hajitobard") {
        document.getElementById("fegyver3ke").innerHTML = 9;
        document.getElementById("fegyver3te").innerHTML = 10;
        document.getElementById("fegyver3ve").innerHTML = 4;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "rovidkard") {
        document.getElementById("fegyver3ke").innerHTML = 9;
        document.getElementById("fegyver3te").innerHTML = 12;
        document.getElementById("fegyver3ve").innerHTML = 14;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "hosszukard") {
        document.getElementById("fegyver3ke").innerHTML = 6;
        document.getElementById("fegyver3te").innerHTML = 14;
        document.getElementById("fegyver3ve").innerHTML = 16;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "masfelkezeskard") {
        document.getElementById("fegyver3ke").innerHTML = 4;
        document.getElementById("fegyver3te").innerHTML = 13;
        document.getElementById("fegyver3ve").innerHTML = 12;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "2k6";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "lovagikard") {
        document.getElementById("fegyver3ke").innerHTML = 2;
        document.getElementById("fegyver3te").innerHTML = 7;
        document.getElementById("fegyver3ve").innerHTML = 10;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "pallos") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 6;
        document.getElementById("fegyver3ve").innerHTML = 2;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "3k6 + 1";
        document.getElementById("fegyver3tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver3").value == "szablya") {
        document.getElementById("fegyver3ke").innerHTML = 7;
        document.getElementById("fegyver3te").innerHTML = 15;
        document.getElementById("fegyver3ve").innerHTML = 17;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "dzsennszablya") {
        document.getElementById("fegyver3ke").innerHTML = 9;
        document.getElementById("fegyver3te").innerHTML = 20;
        document.getElementById("fegyver3ve").innerHTML = 17;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "jatagan") {
        document.getElementById("fegyver3ke").innerHTML = 7;
        document.getElementById("fegyver3te").innerHTML = 14;
        document.getElementById("fegyver3ve").innerHTML = 14;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "handzsar") {
        document.getElementById("fegyver3ke").innerHTML = 6;
        document.getElementById("fegyver3te").innerHTML = 14;
        document.getElementById("fegyver3ve").innerHTML = 15;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "fejvadaszkard") {
        document.getElementById("fegyver3ke").innerHTML = 8;
        document.getElementById("fegyver3te").innerHTML = 16;
        document.getElementById("fegyver3ve").innerHTML = 16;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "slankard") {
        document.getElementById("fegyver3ke").innerHTML = 8;
        document.getElementById("fegyver3te").innerHTML = 20;
        document.getElementById("fegyver3ve").innerHTML = 12;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "kigyokard") {
        document.getElementById("fegyver3ke").innerHTML = 6;
        document.getElementById("fegyver3te").innerHTML = 14;
        document.getElementById("fegyver3ve").innerHTML = 15;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "kes") {
        document.getElementById("fegyver3ke").innerHTML = 10;
        document.getElementById("fegyver3te").innerHTML = 4;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k5";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "marasequor") {
        document.getElementById("fegyver3ke").innerHTML = 7;
        document.getElementById("fegyver3te").innerHTML = 16;
        document.getElementById("fegyver3ve").innerHTML = 14;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "ramiera") {
        document.getElementById("fegyver3ke").innerHTML = 8;
        document.getElementById("fegyver3te").innerHTML = 17;
        document.getElementById("fegyver3ve").innerHTML = 14;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "sequor") {
        document.getElementById("fegyver3ke").innerHTML = 8;
        document.getElementById("fegyver3te").innerHTML = 13;
        document.getElementById("fegyver3ve").innerHTML = 16;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "slancsillag") {
        document.getElementById("fegyver3ke").innerHTML = 10;
        document.getElementById("fegyver3te").innerHTML = 4;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k3";
        document.getElementById("fegyver3tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver3").value == "tor") {
        document.getElementById("fegyver3ke").innerHTML = 10;
        document.getElementById("fegyver3te").innerHTML = 8;
        document.getElementById("fegyver3ve").innerHTML = 2;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "dobotor") {
        document.getElementById("fegyver3ke").innerHTML = 10;
        document.getElementById("fegyver3te").innerHTML = 11;
        document.getElementById("fegyver3ve").innerHTML = 2;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "slantor") {
        document.getElementById("fegyver3ke").innerHTML = 9;
        document.getElementById("fegyver3te").innerHTML = 14;
        document.getElementById("fegyver3ve").innerHTML = 6;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "torkard") {
        document.getElementById("fegyver3ke").innerHTML = 9;
        document.getElementById("fegyver3te").innerHTML = 12;
        document.getElementById("fegyver3ve").innerHTML = 14;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "hosszubot") {
        document.getElementById("fegyver3ke").innerHTML = 4;
        document.getElementById("fegyver3te").innerHTML = 10;
        document.getElementById("fegyver3ve").innerHTML = 16;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k5";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "rovidbot") {
        document.getElementById("fegyver3ke").innerHTML = 9;
        document.getElementById("fegyver3te").innerHTML = 9;
        document.getElementById("fegyver3ve").innerHTML = 17;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k3";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "furkosbot") {
        document.getElementById("fegyver3ke").innerHTML = 2;
        document.getElementById("fegyver3te").innerHTML = 7;
        document.getElementById("fegyver3ve").innerHTML = 14;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "egykezesbuzogany") {
        document.getElementById("fegyver3ke").innerHTML = 7;
        document.getElementById("fegyver3te").innerHTML = 11;
        document.getElementById("fegyver3ve").innerHTML = 12;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "ketkezesbuzogany") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 7;
        document.getElementById("fegyver3ve").innerHTML = 6;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "3k6";
        document.getElementById("fegyver3tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver3").value == "tuskesbuzogany") {
        document.getElementById("fegyver3ke").innerHTML = 7;
        document.getElementById("fegyver3te").innerHTML = 12;
        document.getElementById("fegyver3ve").innerHTML = 13;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "tollasbuzogany") {
        document.getElementById("fegyver3ke").innerHTML = 7;
        document.getElementById("fegyver3te").innerHTML = 12;
        document.getElementById("fegyver3ve").innerHTML = 13;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "lancosbuzogany") {
        document.getElementById("fegyver3ke").innerHTML = 4;
        document.getElementById("fegyver3te").innerHTML = 13;
        document.getElementById("fegyver3ve").innerHTML = 11;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "csephadaro") {
        document.getElementById("fegyver3ke").innerHTML = 1;
        document.getElementById("fegyver3te").innerHTML = 6;
        document.getElementById("fegyver3ve").innerHTML = 5;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "harcikalapacs") {
        document.getElementById("fegyver3ke").innerHTML = 5;
        document.getElementById("fegyver3te").innerHTML = 10;
        document.getElementById("fegyver3ve").innerHTML = 8;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "alabard") {
        document.getElementById("fegyver3ke").innerHTML = 1;
        document.getElementById("fegyver3te").innerHTML = 14;
        document.getElementById("fegyver3ve").innerHTML = 15;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver3").value == "darda") {
        document.getElementById("fegyver3ke").innerHTML = 8;
        document.getElementById("fegyver3te").innerHTML = 13;
        document.getElementById("fegyver3ve").innerHTML = 5;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "konnyukopja") {
        document.getElementById("fegyver3ke").innerHTML = 2;
        document.getElementById("fegyver3te").innerHTML = 11;
        document.getElementById("fegyver3ve").innerHTML = 12;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "lovaskopja") {
        document.getElementById("fegyver3ke").innerHTML = 1;
        document.getElementById("fegyver3te").innerHTML = 15;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver3").value == "nehezlovaskopja") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 16;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "2k10";
        document.getElementById("fegyver3tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver3").value == "landzsa") {
        document.getElementById("fegyver3ke").innerHTML = 4;
        document.getElementById("fegyver3te").innerHTML = 12;
        document.getElementById("fegyver3ve").innerHTML = 12;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "szigony") {
        document.getElementById("fegyver3ke").innerHTML = 4;
        document.getElementById("fegyver3te").innerHTML = 15;
        document.getElementById("fegyver3ve").innerHTML = 10;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10 + 1";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "fuvocso") {
        document.getElementById("fegyver3ke").innerHTML = 8;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 7;
        document.getElementById("fegyver3sebzes").innerHTML= "spec.";
        document.getElementById("fegyver3tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver3").value == "rovidij") {
        document.getElementById("fegyver3ke").innerHTML = 5;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 4;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "hosszuij") {
        document.getElementById("fegyver3ke").innerHTML = 4;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 6;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "visszacsapoij") {
        document.getElementById("fegyver3ke").innerHTML = 3;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 8;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "elfij") {
        document.getElementById("fegyver3ke").innerHTML = 6;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 10;
        document.getElementById("fegyver3sebzes").innerHTML= "2k6";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "aquirnyilpuska") {
        document.getElementById("fegyver3ke").innerHTML = 5;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 18;
        document.getElementById("fegyver3sebzes").innerHTML= "1k5";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "kezinyilpuska") {
        document.getElementById("fegyver3ke").innerHTML = 3;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 14;
        document.getElementById("fegyver3sebzes").innerHTML= "1k3";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "kahreinyilpuska") {
        document.getElementById("fegyver3ke").innerHTML = 9;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 13;
        document.getElementById("fegyver3sebzes").innerHTML= "1k3";
        document.getElementById("fegyver3tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver3").value == "konnyunyilpuska") {
        document.getElementById("fegyver3ke").innerHTML = 2;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 16;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "neheznyilpuska") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 15;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10 + 2";
        document.getElementById("fegyver3tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver3").value == "shadonipanceltoro") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 17;
        document.getElementById("fegyver3sebzes").innerHTML= "2k10";
        document.getElementById("fegyver3tam").innerHTML = "1/5";
    }

    if (document.getElementById("fegyver3").value == "parittya") {
        document.getElementById("fegyver3ke").innerHTML = 2;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 1;
        document.getElementById("fegyver3sebzes").innerHTML= "1k5";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "bola") {
        document.getElementById("fegyver3ke").innerHTML = 2;
        document.getElementById("fegyver3te").innerHTML = 10;
        document.getElementById("fegyver3ve").innerHTML = 2;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k5";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "dobohalo") {
        document.getElementById("fegyver3ke").innerHTML = 1;
        document.getElementById("fegyver3te").innerHTML = 8;
        document.getElementById("fegyver3ve").innerHTML = 4;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "spec.";
        document.getElementById("fegyver3tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver3").value == "garrott") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 5;
        document.getElementById("fegyver3ve").innerHTML = -20;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k10";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "haritotor") {
        document.getElementById("fegyver3ke").innerHTML = 8;
        document.getElementById("fegyver3te").innerHTML = 4;
        document.getElementById("fegyver3ve").innerHTML = 19;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "korbacs") {
        document.getElementById("fegyver3ke").innerHTML = 4;
        document.getElementById("fegyver3te").innerHTML = 6;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k3";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "lasszo") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 1;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "spec.";
        document.getElementById("fegyver3tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver3").value == "ostor") {
        document.getElementById("fegyver3ke").innerHTML = 3;
        document.getElementById("fegyver3te").innerHTML = 6;
        document.getElementById("fegyver3ve").innerHTML = 0;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k2";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "okol") {
        document.getElementById("fegyver3ke").innerHTML = 10;
        document.getElementById("fegyver3te").innerHTML = 4;
        document.getElementById("fegyver3ve").innerHTML = 1;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k2";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "vasokol") {
        document.getElementById("fegyver3ke").innerHTML = 9;
        document.getElementById("fegyver3te").innerHTML = 5;
        document.getElementById("fegyver3ve").innerHTML = 2;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k3";
        document.getElementById("fegyver3tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver3").value == "kispajzs") {
        document.getElementById("fegyver3ke").innerHTML = 1;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 20;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "kozepespajzs") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 35;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver3").value == "nagypajzs") {
        document.getElementById("fegyver3ke").innerHTML = 0;
        document.getElementById("fegyver3te").innerHTML = 0;
        document.getElementById("fegyver3ve").innerHTML = 35;
        document.getElementById("fegyver3ce").innerHTML = 0;
        document.getElementById("fegyver3sebzes").innerHTML= "1k6";
        document.getElementById("fegyver3tam").innerHTML = "1/2";
    }


}

function fegyver4() {  /*negyedik fegyversor */

    if (document.getElementById("fegyver4").value == "valassz") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "0";
        document.getElementById("fegyver4tam").innerHTML = "0";

     }

    if (document.getElementById("fegyver4").value == "shadlekibuzogany") {
        document.getElementById("fegyver4ke").innerHTML = 8;
        document.getElementById("fegyver4te").innerHTML = 13;
        document.getElementById("fegyver4ve").innerHTML = 14;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "egykezescsatabard") {
        document.getElementById("fegyver4ke").innerHTML = 5;
        document.getElementById("fegyver4te").innerHTML = 12;
        document.getElementById("fegyver4ve").innerHTML = 11;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "ketkezescsatabard") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 8;
        document.getElementById("fegyver4ve").innerHTML = 6;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "3k6";
        document.getElementById("fegyver4tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver4").value == "csatacsakany") {
        document.getElementById("fegyver4ke").innerHTML = 5;
        document.getElementById("fegyver4te").innerHTML = 11;
        document.getElementById("fegyver4ve").innerHTML = 8;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "hajitobard") {
        document.getElementById("fegyver4ke").innerHTML = 9;
        document.getElementById("fegyver4te").innerHTML = 10;
        document.getElementById("fegyver4ve").innerHTML = 4;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "rovidkard") {
        document.getElementById("fegyver4ke").innerHTML = 9;
        document.getElementById("fegyver4te").innerHTML = 12;
        document.getElementById("fegyver4ve").innerHTML = 14;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "hosszukard") {
        document.getElementById("fegyver4ke").innerHTML = 6;
        document.getElementById("fegyver4te").innerHTML = 14;
        document.getElementById("fegyver4ve").innerHTML = 16;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "masfelkezeskard") {
        document.getElementById("fegyver4ke").innerHTML = 4;
        document.getElementById("fegyver4te").innerHTML = 13;
        document.getElementById("fegyver4ve").innerHTML = 12;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "2k6";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "lovagikard") {
        document.getElementById("fegyver4ke").innerHTML = 2;
        document.getElementById("fegyver4te").innerHTML = 7;
        document.getElementById("fegyver4ve").innerHTML = 10;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "pallos") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 6;
        document.getElementById("fegyver4ve").innerHTML = 2;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "3k6 + 1";
        document.getElementById("fegyver4tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver4").value == "szablya") {
        document.getElementById("fegyver4ke").innerHTML = 7;
        document.getElementById("fegyver4te").innerHTML = 15;
        document.getElementById("fegyver4ve").innerHTML = 17;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "dzsennszablya") {
        document.getElementById("fegyver4ke").innerHTML = 9;
        document.getElementById("fegyver4te").innerHTML = 20;
        document.getElementById("fegyver4ve").innerHTML = 17;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "jatagan") {
        document.getElementById("fegyver4ke").innerHTML = 7;
        document.getElementById("fegyver4te").innerHTML = 14;
        document.getElementById("fegyver4ve").innerHTML = 14;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "handzsar") {
        document.getElementById("fegyver4ke").innerHTML = 6;
        document.getElementById("fegyver4te").innerHTML = 14;
        document.getElementById("fegyver4ve").innerHTML = 15;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "fejvadaszkard") {
        document.getElementById("fegyver4ke").innerHTML = 8;
        document.getElementById("fegyver4te").innerHTML = 16;
        document.getElementById("fegyver4ve").innerHTML = 16;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "slankard") {
        document.getElementById("fegyver4ke").innerHTML = 8;
        document.getElementById("fegyver4te").innerHTML = 20;
        document.getElementById("fegyver4ve").innerHTML = 12;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "kigyokard") {
        document.getElementById("fegyver4ke").innerHTML = 6;
        document.getElementById("fegyver4te").innerHTML = 14;
        document.getElementById("fegyver4ve").innerHTML = 15;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "kes") {
        document.getElementById("fegyver4ke").innerHTML = 10;
        document.getElementById("fegyver4te").innerHTML = 4;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k5";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "marasequor") {
        document.getElementById("fegyver4ke").innerHTML = 7;
        document.getElementById("fegyver4te").innerHTML = 16;
        document.getElementById("fegyver4ve").innerHTML = 14;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "ramiera") {
        document.getElementById("fegyver4ke").innerHTML = 8;
        document.getElementById("fegyver4te").innerHTML = 17;
        document.getElementById("fegyver4ve").innerHTML = 14;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "sequor") {
        document.getElementById("fegyver4ke").innerHTML = 8;
        document.getElementById("fegyver4te").innerHTML = 13;
        document.getElementById("fegyver4ve").innerHTML = 16;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "slancsillag") {
        document.getElementById("fegyver4ke").innerHTML = 10;
        document.getElementById("fegyver4te").innerHTML = 4;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k3";
        document.getElementById("fegyver4tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver4").value == "tor") {
        document.getElementById("fegyver4ke").innerHTML = 10;
        document.getElementById("fegyver4te").innerHTML = 8;
        document.getElementById("fegyver4ve").innerHTML = 2;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "dobotor") {
        document.getElementById("fegyver4ke").innerHTML = 10;
        document.getElementById("fegyver4te").innerHTML = 11;
        document.getElementById("fegyver4ve").innerHTML = 2;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "slantor") {
        document.getElementById("fegyver4ke").innerHTML = 9;
        document.getElementById("fegyver4te").innerHTML = 14;
        document.getElementById("fegyver4ve").innerHTML = 6;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "torkard") {
        document.getElementById("fegyver4ke").innerHTML = 9;
        document.getElementById("fegyver4te").innerHTML = 12;
        document.getElementById("fegyver4ve").innerHTML = 14;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "hosszubot") {
        document.getElementById("fegyver4ke").innerHTML = 4;
        document.getElementById("fegyver4te").innerHTML = 10;
        document.getElementById("fegyver4ve").innerHTML = 16;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k5";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "rovidbot") {
        document.getElementById("fegyver4ke").innerHTML = 9;
        document.getElementById("fegyver4te").innerHTML = 9;
        document.getElementById("fegyver4ve").innerHTML = 17;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k3";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "furkosbot") {
        document.getElementById("fegyver4ke").innerHTML = 2;
        document.getElementById("fegyver4te").innerHTML = 7;
        document.getElementById("fegyver4ve").innerHTML = 14;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "egykezesbuzogany") {
        document.getElementById("fegyver4ke").innerHTML = 7;
        document.getElementById("fegyver4te").innerHTML = 11;
        document.getElementById("fegyver4ve").innerHTML = 12;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "ketkezesbuzogany") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 7;
        document.getElementById("fegyver4ve").innerHTML = 6;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "3k6";
        document.getElementById("fegyver4tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver4").value == "tuskesbuzogany") {
        document.getElementById("fegyver4ke").innerHTML = 7;
        document.getElementById("fegyver4te").innerHTML = 12;
        document.getElementById("fegyver4ve").innerHTML = 13;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "tollasbuzogany") {
        document.getElementById("fegyver4ke").innerHTML = 7;
        document.getElementById("fegyver4te").innerHTML = 12;
        document.getElementById("fegyver4ve").innerHTML = 13;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "lancosbuzogany") {
        document.getElementById("fegyver4ke").innerHTML = 4;
        document.getElementById("fegyver4te").innerHTML = 13;
        document.getElementById("fegyver4ve").innerHTML = 11;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 3";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "csephadaro") {
        document.getElementById("fegyver4ke").innerHTML = 1;
        document.getElementById("fegyver4te").innerHTML = 6;
        document.getElementById("fegyver4ve").innerHTML = 5;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "harcikalapacs") {
        document.getElementById("fegyver4ke").innerHTML = 5;
        document.getElementById("fegyver4te").innerHTML = 10;
        document.getElementById("fegyver4ve").innerHTML = 8;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "alabard") {
        document.getElementById("fegyver4ke").innerHTML = 1;
        document.getElementById("fegyver4te").innerHTML = 14;
        document.getElementById("fegyver4ve").innerHTML = 15;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "2k6 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver4").value == "darda") {
        document.getElementById("fegyver4ke").innerHTML = 8;
        document.getElementById("fegyver4te").innerHTML = 13;
        document.getElementById("fegyver4ve").innerHTML = 5;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "konnyukopja") {
        document.getElementById("fegyver4ke").innerHTML = 2;
        document.getElementById("fegyver4te").innerHTML = 11;
        document.getElementById("fegyver4ve").innerHTML = 12;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "lovaskopja") {
        document.getElementById("fegyver4ke").innerHTML = 1;
        document.getElementById("fegyver4te").innerHTML = 15;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "1/2";
    }

    if (document.getElementById("fegyver4").value == "nehezlovaskopja") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 16;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "2k10";
        document.getElementById("fegyver4tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver4").value == "landzsa") {
        document.getElementById("fegyver4ke").innerHTML = 4;
        document.getElementById("fegyver4te").innerHTML = 12;
        document.getElementById("fegyver4ve").innerHTML = 12;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "szigony") {
        document.getElementById("fegyver4ke").innerHTML = 4;
        document.getElementById("fegyver4te").innerHTML = 15;
        document.getElementById("fegyver4ve").innerHTML = 10;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10 + 1";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "fuvocso") {
        document.getElementById("fegyver4ke").innerHTML = 8;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 7;
        document.getElementById("fegyver4sebzes").innerHTML= "spec.";
        document.getElementById("fegyver4tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver4").value == "rovidij") {
        document.getElementById("fegyver4ke").innerHTML = 5;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 4;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "hosszuij") {
        document.getElementById("fegyver4ke").innerHTML = 4;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 6;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "visszacsapoij") {
        document.getElementById("fegyver4ke").innerHTML = 3;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 8;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "elfij") {
        document.getElementById("fegyver4ke").innerHTML = 6;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 10;
        document.getElementById("fegyver4sebzes").innerHTML= "2k6";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "aquirnyilpuska") {
        document.getElementById("fegyver4ke").innerHTML = 5;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 18;
        document.getElementById("fegyver4sebzes").innerHTML= "1k5";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "kezinyilpuska") {
        document.getElementById("fegyver4ke").innerHTML = 3;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 14;
        document.getElementById("fegyver4sebzes").innerHTML= "1k3";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "kahreinyilpuska") {
        document.getElementById("fegyver4ke").innerHTML = 9;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 13;
        document.getElementById("fegyver4sebzes").innerHTML= "1k3";
        document.getElementById("fegyver4tam").innerHTML = "3";
    }

    if (document.getElementById("fegyver4").value == "konnyunyilpuska") {
        document.getElementById("fegyver4ke").innerHTML = 2;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 16;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6 + 1";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "neheznyilpuska") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 15;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10 + 2";
        document.getElementById("fegyver4tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver4").value == "shadonipanceltoro") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 17;
        document.getElementById("fegyver4sebzes").innerHTML= "2k10";
        document.getElementById("fegyver4tam").innerHTML = "1/5";
    }

    if (document.getElementById("fegyver4").value == "parittya") {
        document.getElementById("fegyver4ke").innerHTML = 2;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 1;
        document.getElementById("fegyver4sebzes").innerHTML= "1k5";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "bola") {
        document.getElementById("fegyver4ke").innerHTML = 2;
        document.getElementById("fegyver4te").innerHTML = 10;
        document.getElementById("fegyver4ve").innerHTML = 2;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k5";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "dobohalo") {
        document.getElementById("fegyver4ke").innerHTML = 1;
        document.getElementById("fegyver4te").innerHTML = 8;
        document.getElementById("fegyver4ve").innerHTML = 4;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "spec.";
        document.getElementById("fegyver4tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver4").value == "garrott") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 5;
        document.getElementById("fegyver4ve").innerHTML = -20;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k10";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "haritotor") {
        document.getElementById("fegyver4ke").innerHTML = 8;
        document.getElementById("fegyver4te").innerHTML = 4;
        document.getElementById("fegyver4ve").innerHTML = 19;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "korbacs") {
        document.getElementById("fegyver4ke").innerHTML = 4;
        document.getElementById("fegyver4te").innerHTML = 6;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k3";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "lasszo") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 1;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "spec.";
        document.getElementById("fegyver4tam").innerHTML = "1/3";
    }

    if (document.getElementById("fegyver4").value == "ostor") {
        document.getElementById("fegyver4ke").innerHTML = 3;
        document.getElementById("fegyver4te").innerHTML = 6;
        document.getElementById("fegyver4ve").innerHTML = 0;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k2";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "okol") {
        document.getElementById("fegyver4ke").innerHTML = 10;
        document.getElementById("fegyver4te").innerHTML = 4;
        document.getElementById("fegyver4ve").innerHTML = 1;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k2";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "vasokol") {
        document.getElementById("fegyver4ke").innerHTML = 9;
        document.getElementById("fegyver4te").innerHTML = 5;
        document.getElementById("fegyver4ve").innerHTML = 2;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k3";
        document.getElementById("fegyver4tam").innerHTML = "2";
    }

    if (document.getElementById("fegyver4").value == "kispajzs") {
        document.getElementById("fegyver4ke").innerHTML = 1;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 20;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "kozepespajzs") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 35;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "1";
    }

    if (document.getElementById("fegyver4").value == "nagypajzs") {
        document.getElementById("fegyver4ke").innerHTML = 0;
        document.getElementById("fegyver4te").innerHTML = 0;
        document.getElementById("fegyver4ve").innerHTML = 35;
        document.getElementById("fegyver4ce").innerHTML = 0;
        document.getElementById("fegyver4sebzes").innerHTML= "1k6";
        document.getElementById("fegyver4tam").innerHTML = "1/2";
    }


}

function keplus() { /*harci érték módosítói!!! */
    document.getElementById("ke").innerHTML++;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("Nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
        document.getElementById("ke").innerHTML--;
    }
}

function keminus() {
    document.getElementById("ke").innerHTML--;
    document.getElementById("maxhm").innerHTML++;
    
    if (parseFloat(document.getElementById("maxhm").innerText) > parseFloat(document.getElementById("hmlimit").innerText)) {
        document.getElementById("maxhm").innerHTML--;
        document.getElementById("ke").innerHTML++;
        alert("Nem vonhatsz le több pontot!")
    }
}

function teplus() { /*harci érték módosítói!!! */
    document.getElementById("te").innerHTML++;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("Nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
        document.getElementById("te").innerHTML--;
    }
}

function teminus() {
    document.getElementById("te").innerHTML--;
    document.getElementById("maxhm").innerHTML++;
    
    if (parseFloat(document.getElementById("maxhm").innerText) > parseFloat(document.getElementById("hmlimit").innerText)) {
        document.getElementById("maxhm").innerHTML--;
        document.getElementById("te").innerHTML++;
        alert("Nem vonhatsz le több pontot!")

    }
}

function veplus() { /*harci érték módosítói!!! */
    document.getElementById("ve").innerHTML++;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("Nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
        document.getElementById("ve").innerHTML--;
    }
}

function veminus() {
    document.getElementById("ve").innerHTML--;
    document.getElementById("maxhm").innerHTML++;
    
    if (parseFloat(document.getElementById("maxhm").innerText) > parseFloat(document.getElementById("hmlimit").innerText)) {
        document.getElementById("maxhm").innerHTML--;
        document.getElementById("ve").innerHTML++;
        alert("Nem vonhatsz le több pontot!")

    }
}

function ceplus() { /*harci érték módosítói!!! */
    document.getElementById("ce").innerHTML++;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("Nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
        document.getElementById("ce").innerHTML--;
    }
}

function ceminus() {
    document.getElementById("ce").innerHTML--;
    document.getElementById("maxhm").innerHTML++;
    
    if (parseFloat(document.getElementById("maxhm").innerText) > parseFloat(document.getElementById("hmlimit").innerText)) {
        document.getElementById("maxhm").innerHTML--;
        document.getElementById("ce").innerHTML++;
        alert("Nem vonhatsz le több pontot!")

    }
}

function eroplus() { /*ezek az eroplus minus ugyessegplus minus stb a tulajdonságok gombjai*/
    document.getElementById("ero").innerHTML++;
    if (document.getElementById("ero").innerHTML >= 18) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("ero").innerHTML--;
    }

    if (document.getElementById("ero").innerHTML == 22) {
        alert("Ez a lehető legmagasabb érték!");
    }
}

function erominus() {
    document.getElementById("ero").innerHTML--;
    if (document.getElementById("ero").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("ero").innerHTML++;
    }
}

function gyorsasagplus() {
    document.getElementById("gyorsasag").innerHTML++;
    if (document.getElementById("gyorsasag").innerHTML >= 18) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("gyorsasag").innerHTML--;
    }

    if (document.getElementById("gyorsasag").innerHTML == 22) {
        alert("Ez a lehető legmagasabb érték!");
    }

}

function gyorsasagminus() {
    document.getElementById("gyorsasag").innerHTML--;
    if (document.getElementById("gyorsasag").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("gyorsasag").innerHTML++;
    }
}

function ugyessegplus() {
    document.getElementById("ugyesseg").innerHTML++;
    if (document.getElementById("ugyesseg").innerHTML >= 18) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("ugyesseg").innerHTML--;
    }

    if (document.getElementById("ugyesseg").innerHTML == 22) {
        alert("Ez a lehető legmagasabb érték!");
    }

}

function ugyessegminus() {
    document.getElementById("ugyesseg").innerHTML--;
    if (document.getElementById("ugyesseg").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("ugyesseg").innerHTML++;
    }

}

function allokepessegplus() {
    document.getElementById("allokepesseg").innerHTML++;
    if (document.getElementById("allokepesseg").innerHTML >= 18) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("allokepesseg").innerHTML--;
    }

    if (document.getElementById("allokepesseg").innerHTML == 22) {
        alert("Ez a lehető legmagasabb érték!");
    }

}

function allokepessegminus() {
    document.getElementById("allokepesseg").innerHTML--;
    if (document.getElementById("allokepesseg").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("allokepesseg").innerHTML++;
    }
}

function egeszsegplus() {
    document.getElementById("egeszseg").innerHTML++;
    if (document.getElementById("egeszseg").innerHTML >= 18) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("egeszseg").innerHTML--;
    }

    if (document.getElementById("egeszseg").innerHTML == 22) {
        alert("Ez a lehető legmagasabb érték!");
    }

}

function egeszsegminus() {
    document.getElementById("egeszseg").innerHTML--;
    if (document.getElementById("egeszseg").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("egeszseg").innerHTML++;
    }
}

function szepsegplus() {
    document.getElementById("szepseg").innerHTML++;
    if (document.getElementById("szepseg").innerHTML >= 18) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("szepseg").innerHTML--;
    }

    if (document.getElementById("szepseg").innerHTML == 22) {
        alert("Ez a lehető legmagasabb érték!");
    }

}

function szepsegminus() {
    document.getElementById("szepseg").innerHTML--;
    if (document.getElementById("szepseg").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("szepseg").innerHTML++;
    }
}

function intelligenciaplus() {
    document.getElementById("intelligencia").innerHTML++;
    if (document.getElementById("intelligencia").innerHTML >= 18) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("intelligencia").innerHTML--;
    }

    if (document.getElementById("intelligencia").innerHTML == 22) {
        alert("Ez a lehető legmagasabb érték!");
    }

}

function intelligenciaminus() {
    document.getElementById("intelligencia").innerHTML--;
    if (document.getElementById("intelligencia").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("intelligencia").innerHTML++;
    }
}

function akarateroplus() {
    document.getElementById("akaratero").innerHTML++;
    if (document.getElementById("akaratero").innerHTML >= 18) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("akaratero").innerHTML--;
    }

    if (document.getElementById("akaratero").innerHTML == 22) {
        alert("Ez a lehető legmagasabb érték!");
    }


}

function akaraterominus() {
    document.getElementById("akaratero").innerHTML--;
    if (document.getElementById("akaratero").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("akaratero").innerHTML++;
    }
}

function asztralplus() {
    document.getElementById("asztral").innerHTML++;
    if (document.getElementById("asztral").innerHTML >= 18) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("asztral").innerHTML--;
    }

    if (document.getElementById("asztral").innerHTML == 22) {
        alert("Ez a lehető legmagasabb érték!");
    }

}

function asztralminus() {
    document.getElementById("asztral").innerHTML--;
    if (document.getElementById("asztral").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("asztral").innerHTML++;
    }

}

function kepzettseg() { /* itt vannak a kasztok harci értékei, és életerő, manapont stb. */

    document.getElementById("outputfaj").innerHTML = document.getElementById("fajselector").value;
    document.getElementById("outputvallas").innerHTML = document.getElementById("vallasselector").value;
    document.getElementById("outputkaszt").innerHTML = document.getElementById("kasztselector").value;

    if (document.getElementById("fajselector").value == "elf") {
        document.getElementById("ero").innerHTML = document.getElementById("ero").innerHTML - 2;
        document.getElementById("ugyesseg").innerHTML = parseFloat(document.getElementById("ugyesseg").innerHTML) + 1;
        document.getElementById("gyorsasag").innerHTML = parseFloat(document.getElementById("gyorsasag").innerHTML) + 1;
        document.getElementById("allokepesseg").innerHTML = document.getElementById("allokepesseg").innerHTML - 1;
        document.getElementById("szepseg").innerHTML = parseFloat(document.getElementById("szepseg").innerHTML) + 1;
    }

    if (document.getElementById("fajselector").value == "felelf") {
        document.getElementById("ero").innerHTML = document.getElementById("ero").innerHTML - 1;
        document.getElementById("gyorsasag").innerHTML = parseFloat(document.getElementById("gyorsasag").innerHTML) + 1;
    }

    if (document.getElementById("fajselector").value == "torpe") {
        document.getElementById("ero").innerHTML = parseFloat(document.getElementById("ero").innerHTML) + 1;
        document.getElementById("egeszseg").innerHTML = parseFloat(document.getElementById("egeszseg").innerHTML) + 1;
        document.getElementById("allokepesseg").innerHTML = parseFloat(document.getElementById("allokepesseg").innerHTML) + 1;
        document.getElementById("intelligencia").innerHTML = parseFloat(document.getElementById("intelligencia").innerHTML) - 1;
        document.getElementById("szepseg").innerHTML = parseFloat(document.getElementById("szepseg").innerHTML) - 2;
        document.getElementById("asztral").innerHTML = parseFloat(document.getElementById("asztral").innerHTML) - 1;
    }

    if (document.getElementById("fajselector").value == "ork") {
        document.getElementById("ero").innerHTML = parseFloat(document.getElementById("ero").innerHTML) + 2;
        document.getElementById("egeszseg").innerHTML = parseFloat(document.getElementById("egeszseg").innerHTML) + 2;
        document.getElementById("allokepesseg").innerHTML = parseFloat(document.getElementById("allokepesseg").innerHTML) + 1;
        document.getElementById("intelligencia").innerHTML = parseFloat(document.getElementById("intelligencia").innerHTML) - 1;
        document.getElementById("szepseg").innerHTML = parseFloat(document.getElementById("szepseg").innerHTML) - 3;
        document.getElementById("asztral").innerHTML = parseFloat(document.getElementById("asztral").innerHTML) - 3;
    }


    if (document.getElementById("vallasselector").value == "valassz") {
        alert("A karaktered hitetlen!");
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "elf") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 20 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "Lovaglás: Mf, Erdőjárás: Mf, Idomítás: Mf, Hőlátás, 2x hallás, 2,5x látás";
        document.getElementById("maxhm").innerHTML = 11;
        document.getElementById("hmlimit").innerHTML = 11;
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "ember") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "";
        document.getElementById("maxhm").innerHTML = 11;
        document.getElementById("hmlimit").innerHTML = 11;
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "felelf") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
        document.getElementById("maxhm").innerHTML = 11;
        document.getElementById("hmlimit").innerHTML = 11;
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "torpe") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "Hőlátás, Csapdakeresés: 35%, Titkosajtó keresés: 30% Földalatti érzék, Építmény korát meg tudják határozni";
        document.getElementById("maxhm").innerHTML = 11;
        document.getElementById("hmlimit").innerHTML = 11;
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "ork") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "Infralátás, Csapdafelfedezés 20%, Titkosajtó keresés 10%, Földalatti érzék, Kiváló szaglás";
        document.getElementById("maxhm").innerHTML = 11;
        document.getElementById("hmlimit").innerHTML = 11;
    }

    if (document.getElementById("kasztselector").value == "gladiator" && document.getElementById("fajselector").value == "elf") { /*gladiátor értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "gladiator" && document.getElementById("fajselector").value == "ember") { /*gladiátor értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("egyeb").innerHTML = "";
        document.getElementById("maxhm").innerHTML = 12;
        document.getElementById("hmlimit").innerHTML = 12;
    }

    if (document.getElementById("kasztselector").value == "gladiator" && document.getElementById("fajselector").value == "felelf") { /*gladiátor értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
        document.getElementById("maxhm").innerHTML = 12;
        document.getElementById("hmlimit").innerHTML = 12;
    }

    if (document.getElementById("kasztselector").value == "gladiator" && document.getElementById("fajselector").value == "torpe") { /*gladiátor értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("egyeb").innerHTML = "Hőlátás, Csapdakeresés: 35%, Titkosajtó keresés: 30% Földalatti érzék, Építmény korát meg tudják határozni";
        document.getElementById("maxhm").innerHTML = 12;
        document.getElementById("hmlimit").innerHTML = 12;
    }

    if (document.getElementById("kasztselector").value == "gladiator" && document.getElementById("fajselector").value == "ork") { /*gladiátor értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("egyeb").innerHTML = "Infralátás, Csapdafelfedezés 20%, Titkosajtó keresés 10%, Földalatti érzék, Kiváló szaglás";
        document.getElementById("maxhm").innerHTML = 12;
        document.getElementById("hmlimit").innerHTML = 12;
    }

    if (document.getElementById("kasztselector").value == "fejvadasz" && document.getElementById("fajselector").value == "elf") { /*fejvadász értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "fejvadasz" && document.getElementById("fajselector").value == "ember") { /*fejvadász értékei!!! */
        document.getElementById("ke").innerHTML = 10 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("pszi").innerHTML = 4 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "";
        document.getElementById("maxhm").innerHTML = 11;
        document.getElementById("hmlimit").innerHTML = 11;

    }

    if (document.getElementById("kasztselector").value == "fejvadasz" && document.getElementById("fajselector").value == "felelf") { /*fejvadász értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "fejvadasz" && document.getElementById("fajselector").value == "torpe") { /*fejvadász értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "fejvadasz" && document.getElementById("fajselector").value == "ork") { /*fejvadász értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "lovag" && document.getElementById("fajselector").value == "elf") { /*lovag értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "lovag" && document.getElementById("fajselector").value == "ember") { /*lovag értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("egyeb").innerHTML = "";
        document.getElementById("maxhm").innerHTML = 12;
        document.getElementById("hmlimit").innerHTML = 12;

    }

    if (document.getElementById("kasztselector").value == "lovag" && document.getElementById("fajselector").value == "felelf") { /*lovag értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "lovag" && document.getElementById("fajselector").value == "torpe") { /*lovag értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "lovag" && document.getElementById("fajselector").value == "ork") { /*lovag értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "tolvaj" && document.getElementById("fajselector").value == "elf") {
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();

    }

    if (document.getElementById("kasztselector").value == "tolvaj" && document.getElementById("fajselector").value == "ember") { /*tolvaj értékei!!! */
        document.getElementById("ke").innerHTML = 8 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 5 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("egyeb").innerHTML = "";
        document.getElementById("maxhm").innerHTML = 6;
        document.getElementById("hmlimit").innerHTML = 6;

    }

    if (document.getElementById("kasztselector").value == "tolvaj" && document.getElementById("fajselector").value == "felelf") { /*tolvaj értékei!!! */
        document.getElementById("ke").innerHTML = 8 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 20 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 5 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
        document.getElementById("maxhm").innerHTML = 6;
        document.getElementById("hmlimit").innerHTML = 6;

    }

    if (document.getElementById("kasztselector").value == "tolvaj" && document.getElementById("fajselector").value == "torpe") { /*tolvaj értékei!!! */
        document.getElementById("ke").innerHTML = 8 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 5 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("egyeb").innerHTML = "Hőlátás, Csapdakeresés: 35%, Titkosajtó keresés: 30% Földalatti érzék, Építmény korát meg tudják határozni";
        document.getElementById("maxhm").innerHTML = 6;
        document.getElementById("hmlimit").innerHTML = 6;

    }

    if (document.getElementById("kasztselector").value == "tolvaj" && document.getElementById("fajselector").value == "ork") { /*tolvaj értékei!!! */
        document.getElementById("ke").innerHTML = 8 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 5 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("egyeb").innerHTML = "Infralátás, Csapdafelfedezés 20%, Titkosajtó keresés 10%, Földalatti érzék, Kiváló szaglás";
        document.getElementById("maxhm").innerHTML = 6;
        document.getElementById("hmlimit").innerHTML = 6;

    }

    if (document.getElementById("kasztselector").value == "bard" && document.getElementById("fajselector").value == "elf") {
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
        /*bárd értékei!!! */
    }

    if (document.getElementById("kasztselector").value == "bard" && document.getElementById("fajselector").value == "ember") { /*bárd értékei!!! */
        document.getElementById("ke").innerHTML = 10 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 5 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("mana").innerHTML = (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 4 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "";
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("hmlimit").innerHTML = 9;

    }

    if (document.getElementById("kasztselector").value == "bard" && document.getElementById("fajselector").value == "felelf") { /*bárd értékei!!! */
        document.getElementById("ke").innerHTML = 10 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 20 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 5 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("mana").innerHTML = (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 4 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("hmlimit").innerHTML = 9;

    }

    if (document.getElementById("kasztselector").value == "bard" && document.getElementById("fajselector").value == "torpe") { /*bárd értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "bard" && document.getElementById("fajselector").value == "ork") { /*bárd értékei!!! */
    alert("A választott faj nem tartozhat a választott Kasztba!");
    window.location.reload();

    }
    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "elf") { /*domvikpap értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "domvik") { /*domvikpap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Ősi nyelv (Lingua Domini): Mf, Méregsemlegesítés: Mf";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "felelf") { /*pap értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "domvik") { /*domvikpap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Ősi nyelv (Lingua Domini): Mf, Méregsemlegesítés: Mf";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ork") { /*pap értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "ranagol") { /*ranagol pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Hátbaszúrás: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "ranagol") { /*ranagol pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Hátbaszúrás: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "tharr") { /*tharr pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "3 Fegyver használata: Af, Fegyverdobás: Af, Ősi nyelv ismerete: Mf, Méregkeverés/semlegesítés: Af, Hátbaszúrás: Af, Alkímia: Af, Demonológia: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "tharr") { /*tharr pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "3 Fegyver használata: Af, Fegyverdobás: Af, Ősi nyelv ismerete: Mf, Méregkeverés/semlegesítés: Af, Hátbaszúrás: Af, Alkímia: Af, Demonológia: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "sogron") { /*sogron pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*Őstüzek Urai Szekta képzettségei!) Írás-olvasás: Mf, Toroni nyelv: Af 3, Ősi nyelv (kyr) ismerete: Af, Heraldika: Af, Etikett: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "sogron") { /*sogron pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*Őstüzek Urai Szekta képzettségei!) Írás-olvasás: Mf, Toroni nyelv: Af 3, Ősi nyelv (kyr) ismerete: Af, Heraldika: Af, Etikett: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "morgana") { /*morgena pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*Angyalok Szekta képzettségei!) 2 Hely ismerete: Af, Szexuális kultúra: Af, Antissjárás: Af, Méregkeverés-semlegesítés: Af, Ének-zene: Af, Álcázás-álruha: Af, Etikett: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "morgana") { /*morgena pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*Angyalok Szekta képzettségei!) 2 Hely ismerete: Af, Szexuális kultúra: Af, Antissjárás: Af, Méregkeverés-semlegesítés: Af, Ének-zene: Af, Álcázás-álruha: Af, Etikett: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "adron") { /*adron pap értékei!!! */
        document.getElementById("ke").innerHTML = 4 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 15 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 70 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Alkímia: Af, Mágiahasználat: Af, Legendaismeret: Mf, Sebgyógyítás: Mf, Ősi nyelv ismerete: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "adron") { /*adron pap értékei!!! */
        document.getElementById("ke").innerHTML = 4 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 15 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 70 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Alkímia: Af, Mágiahasználat: Af, Legendaismeret: Mf, Sebgyógyítás: Mf, Ősi nyelv ismerete: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "alborne") { /*alborne pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Fegyverismeret: Af, Nyelvismeret: Af 3, 2, Történelemismeret: Mf, Legendaismeret: Af, Herbalizmus: Af, Szexuális kultúra: Af, Éneklés-zenélés: Af, Művészettörténet: Mf";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "alborne") { /*alborne pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Fegyverismeret: Af, Nyelvismeret: Af 3, 2, Történelemismeret: Mf, Legendaismeret: Af, Herbalizmus: Af, Szexuális kultúra: Af, Éneklés-zenélés: Af, Művészettörténet: Mf";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "antoh") { /*antoh pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "2 Fegyverhasználat: Af, Időjóslás: Mf, Térképészet: Af, Vadászat-halászat: Af, Úszás: Mf, Hajózás: Mf, Csomózás: Af, Tengerjárás: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "antoh") { /*antoh pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "2 Fegyverhasználat: Af, Időjóslás: Mf, Térképészet: Af, Vadászat-halászat: Af, Úszás: Mf, Hajózás: Mf, Csomózás: Af, Tengerjárás: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "arel") { /*arel pap értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 18 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 73 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = document.getElementById("ugyesseg").innerHTML;
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Fegyverhasználat: Af, Fegyverhasználat(Íj): Mf, Fegyverismeret: Af, Legendaismeret: Af, Sebgyógyítás: Af, Herbalizmus: Af, Időjóslás: Af, Vadászat: Mf, Erdőjárás: Mf, Solymászat: Mf, Lovaglás: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "arel") { /*arel pap értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 18 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 73 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = document.getElementById("ugyesseg").innerHTML;
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Fegyverhasználat: Af, Fegyverhasználat(Íj): Mf, Fegyverismeret: Af, Legendaismeret: Af, Sebgyógyítás: Af, Herbalizmus: Af, Időjóslás: Af, Vadászat: Mf, Erdőjárás: Mf, Solymászat: Mf, Lovaglás: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "darton") { /*darton pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "2 Fegyver használata: Af, Fegyverdobás: Af, Mágiaismeret(Nekromancia): Af, Sebgyógyítás: Af, Élettan: Af, Balzsamozás: Af, Ének-zene: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "darton") { /*darton pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "2 Fegyver használata: Af, Fegyverdobás: Af, Mágiaismeret(Nekromancia): Af, Sebgyógyítás: Af, Élettan: Af, Balzsamozás: Af, Ének-zene: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "della") { /*della pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 15 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 65 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Nyelvismeret: Af 4, Művészet(választott): Mf, Művészet(választott): Af, Legendaismeret: Af, Művészettörténet: Af, Etikett: Af, Értékbecslés: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "della") { /*della pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 15 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 65 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Nyelvismeret: Af 4, Művészet(választott): Mf, Művészet(választott): Af, Legendaismeret: Af, Művészettörténet: Af, Etikett: Af, Értékbecslés: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "dreina") { /*dreina pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Nyelvtudás: Af 4, Legendaismeret: Af, Etikett: Af, Tánc: Af, Értékbecslés: Af, Ének-zene: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "dreina") { /*dreina pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Nyelvtudás: Af 4, Legendaismeret: Af, Etikett: Af, Tánc: Af, Értékbecslés: Af, Ének-zene: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "ellana") { /*ellana pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "2 Fegyverhasználat(Tőrkard, tőr): Mf, Írás-olvasás: Mf, Kultúra: Af, Helyismeret: 30%, 4 Nyelv ismerete: Af 5, 5, 4, 3, Heraldika: Af, Legendaismeret: Af, Vallásismeret(Pyarroni): Mf, Méregkeverés-semlegesítés: Af, Etikett: Af, Szexuális kultúra: Mf, Ének-zene: Af, Tánc(udvari): Mf, Herbalizmus: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "ellana") { /*ellana pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "2 Fegyverhasználat(Tőrkard, tőr): Mf, Írás-olvasás: Mf, Kultúra: Af, Helyismeret: 30%, 4 Nyelv ismerete: Af 5, 5, 4, 3, Heraldika: Af, Legendaismeret: Af, Vallásismeret(Pyarroni): Mf, Méregkeverés-semlegesítés: Af, Etikett: Af, Szexuális kultúra: Mf, Ének-zene: Af, Tánc(udvari): Mf, Herbalizmus: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "gilron") { /*gilron pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*A segédek képzettségei!) Fegyverismeret: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "gilron") { /*gilron pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*A segédek képzettségei!) Fegyverismeret: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "krad") { /*krad pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*A kutatók képzettségei!) 2 Nyelv ismerete: Af 2, 3, Ősi nyelv ismerete: Af, Heraldika: Af, Legendaismeret: Af, Építészet: Af, Etikett: Af, Lovaglás: Af, Csapdafelfedezés: 10%, Titkosajtó keresés: 10%";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "krad") { /*krad pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*A kutatók képzettségei!) 2 Nyelv ismerete: Af 2, 3, Ősi nyelv ismerete: Af, Heraldika: Af, Legendaismeret: Af, Építészet: Af, Etikett: Af, Lovaglás: Af, Csapdafelfedezés: 10%, Titkosajtó keresés: 10%";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "kyel") { /*kyel pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0;
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Fegyverhasználat(csak buzogány-féle): Af, Pajzshasználat: Af, Lefegyverzés: Af, Nehézvért viselet: Af, Hadvezetés: Af, Nyelvtudás: Af 3, Térképészet: Af, Sebgyógyítás: Af, Pszi: Af, Etikett: Af, Esés: 15%";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "kyel") { /*kyel pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0;
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Fegyverhasználat(csak buzogány-féle): Af, Pajzshasználat: Af, Lefegyverzés: Af, Nehézvért viselet: Af, Hadvezetés: Af, Nyelvtudás: Af 3, Térképészet: Af, Sebgyógyítás: Af, Pszi: Af, Etikett: Af, Esés: 15%";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "noir") { /*noir pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 16 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 5 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 5 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*Befogadott képzettségei!) Antissjárás: Af, Herbalizmus: Af, Legendaismeret: Af, Kultúra: Af, Helyismeret: 35%";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "noir") { /*noir pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 16 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 5 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 5 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*Befogadott képzettségei!) Antissjárás: Af, Herbalizmus: Af, Legendaismeret: Af, Kultúra: Af, Helyismeret: 35%";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "orwella") { /*orwella pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*A Pusztító Erő Útjának képzettségei!) Nyelv ismeret: Af 4, Történelemismeret: Mf, 2 Fegyver használata: Af, Fegyverdobás: Af, Méregkeverés: Af, Lefegyverzés: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "orwella") { /*orwella pap értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 6 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 2);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*A Pusztító Erő Útjának képzettségei!) Nyelv ismeret: Af 4, Történelemismeret: Mf, 2 Fegyver használata: Af, Fegyverdobás: Af, Méregkeverés: Af, Lefegyverzés: Af";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "domvik") { /* domvik paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 8 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 18 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 73 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 5 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 5 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*A boszorkányvadász képzettségei!) 2 Fegyver használata (Mendra, Kínzókés) Af, Fegyverhasználat: Af, Kultúra (Shadoni): Mf, Helyismeret (saját): 60%, Erkölcs: Mf, Pszi: Mf, 3 Nyelv ismerete (Shadoni, Gorviki, Nomád): Af 5, 3, 3, Írás-olvasás: Af, Vallásismeret (Domvik): Af, Történelemismeret: Af, Heraldika: Af, Lovaglás: Af, Ősi nyelv ismerete (Lingua Domini): Af, Mágiaismerret (Boszorkány): Af, Álcázás-álruha: Af";
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("hmlimit").innerHTML = 9;

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "ranagol") { /* ranagol paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*A boszorkányvadász képzettségei!) 2 Fegyver használata (Mendra, Kínzókés) Af, Fegyverhasználat: Af, Kultúra (Shadoni): Mf, Helyismeret (saját): 60%, Erkölcs: Mf, Pszi: Mf, 3 Nyelv ismerete (Shadoni, Gorviki, Nomád): Af 5, 3, 3, Írás-olvasás: Af, Vallásismeret (Domvik): Af, Történelemismeret: Af, Heraldika: Af, Lovaglás: Af, Ősi nyelv ismerete (Lingua Domini): Af, Mágiaismerret (Boszorkány): Af, Álcázás-álruha: Af";
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("hmlimit").innerHTML = 9;

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "tharr") { /* ranagol paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "sogron") { /* sogron paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 6 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*Főnix Lovagok képzettségei!) 3 Fegyver használata: Af, Hadrend: Af, Pszi: Mf, Írás-olvasás: Af, Sebgyógyítás: Af, Vallásismeret (Sogron): Af, Emberrismeret: Af, Hajózás: Af, Úszás: Af, Futás: Af";
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("hmlimit").innerHTML = 9;

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "morgana") { /* morgena paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "adron") { /* adron paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "alborne") { /* alborne paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "antoh") { /* antoh paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "arel") { /* arel paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "darton") { /* darton paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Birkózás: Af, Fegyvertörés: Af, Méregkeverés-semlegesítés: Af, Csapdaállítás: Af, Kocsmai verekedés: Af, Hamiskártya: Af";
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("hmlimit").innerHTML = 9;

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "della") { /* della paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "dreina") { /* dreina paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "(*Az Oroszlánszív Lovagrend képzettségei!) Hadvezetés: Mf, Fegyvferismeret: Af, Fegyvertörés: Af, Térképészet: Af";
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("hmlimit").innerHTML = 9;

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "ellana") { /* ellana paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "gilron") { /* gilron paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "krad") { /* krad paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Kultúra: Af, Helyismeret: 30%, 2 Nyelv ismerete: Af 2, 3, Legendaismeret: Af, Sebgyógyítás: Af, Nyomolvasás-eltüntetés: Af, Úszás: Af";
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("hmlimit").innerHTML = 9;

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "kyel") { /* kyel paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "noir") { /* noir paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "orwella") { /* orwella paplovag értékei!!! */
        alert("A választott kaszton belül csak papok tevékenykednek, lovagrendje nincsen!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "uwel") { /* uwel paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 5 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 9 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Ökölharc: Af, Időjóslás: Af, Sebgyógyítás: Af, Nyomolvasás-eltüntetés: Af, Csomózás: Af, Esés: 20%";
        document.getElementById("maxhm").innerHTML = 9;
        document.getElementById("hmlimit").innerHTML = 9;

    }

    if (document.getElementById("kasztselector").value == "harcmuvesz" && document.getElementById("fajselector").value == "ember") { /* harcművész paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 10 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 8 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 0;
        document.getElementById("pszi").innerHTML = 6 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Túlütésnél a puszta kezével is tud Ép-re sebezni";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "harcmuvesz" && document.getElementById("fajselector").value == "felelf") { /* harcművész paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 10 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 8 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 0;
        document.getElementById("pszi").innerHTML = 6 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Túlütésnél a puszta kezével is tud Ép-re sebezni, 1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "harcmuvesz" && document.getElementById("fajselector").value == "elf") { /* harcművész kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "harcmuvesz" && document.getElementById("fajselector").value == "torpe") { /* harcművész kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "harcmuvesz" && document.getElementById("fajselector").value == "ork") { /* harcművész kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "kardmuvesz" && document.getElementById("fajselector").value == "ember") { /* kardművész paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 10 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 8 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 0;
        document.getElementById("pszi").innerHTML = 6 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "kardmuvesz" && document.getElementById("fajselector").value == "felelf") { /* kardművész paplovag értékei!!! */
        document.getElementById("ke").innerHTML = 10 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 8 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("mana").innerHTML = 0;
        document.getElementById("pszi").innerHTML = 6 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "kardmuvesz" && document.getElementById("fajselector").value == "elf") { /* kardművész kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "kardmuvesz" && document.getElementById("fajselector").value == "torpe") { /* kardművész kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "kardmuvesz" && document.getElementById("fajselector").value == "ork") { /* kardművész kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "boszorkany" && document.getElementById("fajselector").value == "ember") { /* boszorkány  értékei!!! */
        document.getElementById("ke").innerHTML = 6 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 14 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 69 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 3 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 1 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + k6;
        document.getElementById("mana").innerHTML = 8 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Manapontjait a Hatalom italával nyeri, -3 egészségért, amit ki kell pihennie!";
        document.getElementById("maxhm").innerHTML = 4;
        document.getElementById("hmlimit").innerHTML = 4;

    }

    if (document.getElementById("kasztselector").value == "boszorkany" && document.getElementById("fajselector").value == "felelf") { /* boszorkány  értékei!!! */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "boszorkany" && document.getElementById("fajselector").value == "elf") { /* boszorkány kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "boszorkany" && document.getElementById("fajselector").value == "torpe") { /* boszorkány kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "boszorkany" && document.getElementById("fajselector").value == "ork") { /* boszorkány kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "boszorkanymester" && document.getElementById("fajselector").value == "ember") { /* boszorkánymester értékei!!! */
        document.getElementById("ke").innerHTML = 7 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 5 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 3 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 4 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 1);
        document.getElementById("mana").innerHTML = 7 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Manapontjait a Hatalom italával nyeri, -3 egészségért, amit ki kell pihennie!";
        document.getElementById("maxhm").innerHTML = 7;
        document.getElementById("hmlimit").innerHTML = 7;

    }

    if (document.getElementById("kasztselector").value == "boszorkanymester" && document.getElementById("fajselector").value == "felelf") { /* boszorkánymeste értékei!!! */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "boszorkanymester" && document.getElementById("fajselector").value == "elf") { /* boszorkánymester kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "boszorkanymester" && document.getElementById("fajselector").value == "torpe") { /* boszorkánymester kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "boszorkanymester" && document.getElementById("fajselector").value == "ork") { /* boszorkánymester kivételek */
        document.getElementById("ke").innerHTML = 7 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 5 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 3 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 4 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 1);
        document.getElementById("mana").innerHTML = 7 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Manapontjait a Hatalom italával nyeri, -3 egészségért, amit ki kell pihennie! Infralátás, Csapdafelfedezés 20%, Titkosajtó keresés 10%, Földalatti érzék, Kiváló szaglás";
        document.getElementById("maxhm").innerHTML = 7;
        document.getElementById("hmlimit").innerHTML = 7;

    }

    if (document.getElementById("kasztselector").value == "tuzvarazslo" && document.getElementById("fajselector").value == "ember") { /* tűzvarázsló  értékei!!! */
        document.getElementById("ke").innerHTML = 6 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 5 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 4 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 1);
        document.getElementById("mana").innerHTML = 6 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 5 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Kyr-metódussal, tűzből nyeri a manáját!";
        document.getElementById("maxhm").innerHTML = 8;
        document.getElementById("hmlimit").innerHTML = 8;

    }

    if (document.getElementById("kasztselector").value == "tuzvarazslo" && document.getElementById("fajselector").value == "felelf") { /* tűzvarázsló értékei!!! */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "tuzvarazslo" && document.getElementById("fajselector").value == "elf") { /* tűzvarázsló kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "tuzvarazslo" && document.getElementById("fajselector").value == "torpe") { /* tűzvarázsló kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "tuzvarazslo" && document.getElementById("fajselector").value == "ork") { /* tűzvarázsló kivételek */
        alert("A választott kaszt nem lehet az adott faj!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "varazslo" && document.getElementById("fajselector").value == "ember") { /* varázsló  értékei!!! */
        document.getElementById("ke").innerHTML = 2 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 15 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 70 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 3 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 2 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + k6;
        document.getElementById("mana").innerHTML = 10 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 7 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "";
        document.getElementById("maxhm").innerHTML = 4;
        document.getElementById("hmlimit").innerHTML = 4;

    }

    if (document.getElementById("kasztselector").value == "varazslo" && document.getElementById("fajselector").value == "felelf") { /* varázsló !!! */
        document.getElementById("ke").innerHTML = 2 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 15 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 70 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 3 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 2 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + k6;
        document.getElementById("mana").innerHTML = 10 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 7 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
        document.getElementById("maxhm").innerHTML = 4;
        document.getElementById("hmlimit").innerHTML = 4;

    }

    if (document.getElementById("kasztselector").value == "varazslo" && document.getElementById("fajselector").value == "elf") { /* varázsló  */
        document.getElementById("ke").innerHTML = 2 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 15 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 70 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 20 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 3 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 2 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + k6;
        document.getElementById("mana").innerHTML = 10 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 7 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Lovaglás: Mf, Erdőjárás: Mf, Idomítás: Mf, Hőlátás, 2x hallás, 2,5x látás";
        document.getElementById("maxhm").innerHTML = 4;
        document.getElementById("hmlimit").innerHTML = 4;

    }

    if (document.getElementById("kasztselector").value == "varazslo" && document.getElementById("fajselector").value == "torpe") { /* varázsló */
        document.getElementById("ke").innerHTML = 2 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 15 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 70 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 3 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 2 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + k6;
        document.getElementById("mana").innerHTML = 10 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("pszi").innerHTML = 7 + (document.getElementById("intelligencia").innerHTML - 10);
        document.getElementById("egyeb").innerHTML = "Hőlátás, Csapdakeresés: 35%, Titkosajtó keresés: 30% Földalatti érzék, Építmény korát meg tudják határozni";
        document.getElementById("maxhm").innerHTML = 4;
        document.getElementById("hmlimit").innerHTML = 4;

    }

    if (document.getElementById("kasztselector").value == "varazslo" && document.getElementById("fajselector").value == "ork") { /* varázsló kivétel!! */
        alert("A választott kaszt a fajon belül nem lehetséges!");
        window.location.reload();

    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "elf") { /* paplovag kivételek */
        alert("A választott kaszton belül csak ember faj lehetséges!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "felelf") { /* paplovag kivételek */
        alert("A választott kaszton belül csak ember faj lehetséges!");
        window.location.reload();
    }


    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "torpe") { /* paplovag kivételek */
        alert("A választott kaszton belül csak ember faj lehetséges!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "paplovag" && document.getElementById("fajselector").value == "ork") { /* paplovag kivételek */
        alert("A választott kaszton belül csak ember faj lehetséges!");
        window.location.reload();
    }



    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "ember" && document.getElementById("vallasselector").value == "uwel") {
        alert("A választott valláson belül csak paplovagok szolgálnak, papok nem!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "pap" && document.getElementById("fajselector").value == "torpe" && document.getElementById("vallasselector").value == "uwel") {
        alert("A választott valláson belül csak paplovagok szolgálnak, papok nem!");
        window.location.reload();
    }


    if (document.getElementById("kasztselector").value == "harcos") { /*harcos képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "3 Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Úszás"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Futás"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Mászás"
        document.getElementById("kepzettseg5fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
        document.getElementById("kepzettseg5").innerHTML = "Esés"
        document.getElementById("kepzettseg6fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg6").innerHTML = "Ugrás"
        document.getElementById("kepzettseg5fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
    }

    if (document.getElementById("kasztselector").value == "gladiator") { /*gladiátor képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Birkózás"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Ökölharc"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Kétkezes harc"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Nehézvért viselet"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Pajzshasználat"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "4 Fegyverhasználat"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Fegyvertörés"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Esés"
        document.getElementById("kepzettseg8fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 30 + "%";
        document.getElementById("kepzettseg9").innerHTML = "Ugrás"
        document.getElementById("kepzettseg9fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
    }
    if (document.getElementById("kasztselector").value == "fejvadasz") { /*fejvadász képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Ökölharc"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "9 Fegyver használat"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "3 Fegyver dobás"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Pszi"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Úszás"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "4 Csapdaállítás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Futás"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Álcázás/álruha"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Hátbaszúrás"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Mászás"
        document.getElementById("kepzettseg10fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 30 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Esés"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
        document.getElementById("kepzettseg12").innerHTML = "Ugrás"
        document.getElementById("kepzettseg12fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Lopózás"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Rejtőzés"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 25 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Csapdafelfedezés"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";

    }

    if (document.getElementById("kasztselector").value == "lovag") { /*lovag képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Nehézvértviselet"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pajzshasználat"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "5 Fegyver használat"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Fegyverismeret"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Hadvezetés"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Etikett"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg7fok").innerHTML = "Mf"
        document.getElementById("kepzettseg8").innerHTML = "4 Nyelv ismerete"
        document.getElementById("kepzettseg8fok").innerHTML = "Af 4, 2, 2, 2"
        document.getElementById("kepzettseg9").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Heraldika"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
    }

    if (document.getElementById("kasztselector").value == "tolvaj") { /*tolvaj képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "2 Fegyver használata"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Fegyverdobás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "3 Nyelv ismerete"
        document.getElementById("kepzettseg3fok").innerHTML = "Af 3, 2, 2"
        document.getElementById("kepzettseg4").innerHTML = "Kocsmai verekedés"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Értékbecslés"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Mászás"
        document.getElementById("kepzettseg6fok").innerHTML = "45%"
        document.getElementById("kepzettseg7").innerHTML = "Esés"
        document.getElementById("kepzettseg7fok").innerHTML = "15%"
        document.getElementById("kepzettseg8").innerHTML = "Zárnyitás"
        document.getElementById("kepzettseg8fok").innerHTML = "25%"
        document.getElementById("kepzettseg9").innerHTML = "Ugrás"
        document.getElementById("kepzettseg9fok").innerHTML = "10%"
        document.getElementById("kepzettseg10").innerHTML = "Lopózás"
        document.getElementById("kepzettseg10fok").innerHTML = "30%"
        document.getElementById("kepzettseg11").innerHTML = "Rejtőzködés"
        document.getElementById("kepzettseg11fok").innerHTML = "15%"
        document.getElementById("kepzettseg12").innerHTML = "Kötéltánc"
        document.getElementById("kepzettseg12fok").innerHTML = "25%"
        document.getElementById("kepzettseg13").innerHTML = "Zsebmetszés"
        document.getElementById("kepzettseg13fok").innerHTML = "35%"
        document.getElementById("kepzettseg14").innerHTML = "Csapdafelfedezés"
        document.getElementById("kepzettseg14fok").innerHTML = "25%"
        document.getElementById("kepzettseg15").innerHTML = "Titkosajtó keresés"
        document.getElementById("kepzettseg15fok").innerHTML = "15%"

    }


    if (document.getElementById("kasztselector").value == "bard") { /*bárd képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "4 Fegyver használat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Fegyverdobás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Pszi"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "5 Nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af 5, 4, 3, 2, 2"
        document.getElementById("kepzettseg5").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Legendaismeret"
        document.getElementById("kepzettseg6fok").innerHTML = "Mf"
        document.getElementById("kepzettseg7").innerHTML = "Etikett"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Szexuális kultúra"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Éneklés-zenélés"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
        document.getElementById("kepzettseg11").innerHTML = "Hangutánzás"
        document.getElementById("kepzettseg11fok").innerHTML = "Af"
        document.getElementById("kepzettseg12").innerHTML = "Hamiskártya"
        document.getElementById("kepzettseg12fok").innerHTML = "Af"
        document.getElementById("kepzettseg13").innerHTML = "Mászás"
        document.getElementById("kepzettseg13fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 25 + "%";
        document.getElementById("kepzettseg14").innerHTML = "Esés"
        document.getElementById("kepzettseg14fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 5 + "%";
        document.getElementById("kepzettseg15").innerHTML = "Ugrás"
        document.getElementById("kepzettseg15fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
        document.getElementById("kepzettseg16").innerHTML = "Lopózás"
        document.getElementById("kepzettseg16fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg17").innerHTML = "Rejtőzés"
        document.getElementById("kepzettseg17fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
        document.getElementById("kepzettseg18").innerHTML = "Kötéltánc"
        document.getElementById("kepzettseg18fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 5 + "%";
        document.getElementById("kepzettseg19").innerHTML = "Zsebmetszés"
        document.getElementById("kepzettseg19fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 5 + "%";
        document.getElementById("kepzettseg20").innerHTML = "Csapdafelfedezés"
        document.getElementById("kepzettseg20fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
        document.getElementById("kepzettseg21").innerHTML = "Titkosajtó keresés"
        document.getElementById("kepzettseg21fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 5 + "%";
    }

    if (document.getElementById("kasztselector").value == "pap") { /*az alap pap képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pszi"
        document.getElementById("kepzettseg2fok").innerHTML = "Mf"
        document.getElementById("kepzettseg3").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg3fok").innerHTML = "Af 5, 5"
        document.getElementById("kepzettseg4").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Vallásismeret"
        document.getElementById("kepzettseg5fok").innerHTML = "Mf"
        document.getElementById("kepzettseg6").innerHTML = "Történelemismeret"
        document.getElementById("kepzettseg6fok").innerHTML = "Mf"
        document.getElementById("kepzettseg7").innerHTML = "Éneklés-zenélés"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
    }

    if (document.getElementById("kasztselector").value == "paplovag") { /*az alap paplovag képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Nehézvértviselet"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pajzshasználat"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "4 Fegyverhasználat"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Hadvezetés"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Pszi"
        document.getElementById("kepzettseg5fok").innerHTML = "Mf"
        document.getElementById("kepzettseg6").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg6fok").innerHTML = "Af 5, 4"
        document.getElementById("kepzettseg7").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Vallásismeret"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Történelemismeret"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Heraldika"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
        document.getElementById("kepzettseg11").innerHTML = "Etikett"
        document.getElementById("kepzettseg11fok").innerHTML = "Af"
        document.getElementById("kepzettseg12").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg12fok").innerHTML = "Mf"
        document.getElementById("kepzettseg13").innerHTML = "Éneklés-zenélés"
        document.getElementById("kepzettseg13fok").innerHTML = "Af"

    }

    if (document.getElementById("kasztselector").value == "harcmuvesz") { /*a harcművész képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Vakharc"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "10 Fegyverhasználat"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "4 Fegyverdobás"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Fegyvertörés (kézzel)"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Pszi"
        document.getElementById("kepzettseg5fok").innerHTML = "Slan"
        document.getElementById("kepzettseg6").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Úszás"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Futás"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Mászás"
        document.getElementById("kepzettseg9fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg10").innerHTML = "Esés"
        document.getElementById("kepzettseg10fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 35 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Ugrás"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 30 + "%";
    }

    if (document.getElementById("kasztselector").value == "kardmuvesz") { /*a kardművész képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Ökölharc"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Birkózás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Vakharc"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "3 Fegyverhasználat"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Fegyvertörés (Slan-karddal)"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Hadvezetés"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Pszi"
        document.getElementById("kepzettseg7fok").innerHTML = "Slan"
        document.getElementById("kepzettseg8").innerHTML = "Etikett"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Úszás"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
        document.getElementById("kepzettseg11").innerHTML = "Futás"
        document.getElementById("kepzettseg11fok").innerHTML = "Af"
        document.getElementById("kepzettseg12").innerHTML = "Mászás"
        document.getElementById("kepzettseg12fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
        document.getElementById("kepzettseg13").innerHTML = "Esés"
        document.getElementById("kepzettseg13fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg14").innerHTML = "Ugrás"
        document.getElementById("kepzettseg14fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
    }

    if (document.getElementById("kasztselector").value == "boszorkany") { /*a boszorkány képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Fegyverdobás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Pszi"
        document.getElementById("kepzettseg3fok").innerHTML = "Mf"
        document.getElementById("kepzettseg4").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af 3, 3"
        document.getElementById("kepzettseg5").innerHTML = "Herbalizmus"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Méregkeverés-semlegesítés"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Sebgyógyítás"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Szexuális kultúra"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
    }

    if (document.getElementById("kasztselector").value == "boszorkanymester") { /*a boszorkánymester képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "3 Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Fegyverdobás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Pszi"
        document.getElementById("kepzettseg3fok").innerHTML = "Mf"
        document.getElementById("kepzettseg4").innerHTML = "3 Nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af 3, 3, 2"
        document.getElementById("kepzettseg5").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Méregkeverés-semlegesítés"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Álcázás-álruha"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Lopózás"
        document.getElementById("kepzettseg8fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
        document.getElementById("kepzettseg9").innerHTML = "Rejtőzés"
        document.getElementById("kepzettseg9fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
    }

    if (document.getElementById("kasztselector").value == "tuzvarazslo") { /*a boszorkánymester képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "2 Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pszi"
        document.getElementById("kepzettseg2fok").innerHTML = "Mf"
        document.getElementById("kepzettseg3").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af 4, 3"
        document.getElementById("kepzettseg5").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Hajózás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
    }

    if (document.getElementById("kasztselector").value == "varazslo") { /*a kardművész képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pszi"
        document.getElementById("kepzettseg2fok").innerHTML = "Kyr-metódus"
        document.getElementById("kepzettseg3").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg3fok").innerHTML = "Af 5, 4"
        document.getElementById("kepzettseg4").innerHTML = "Ősi nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Alkímia"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Sebgyógyítás"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Élettan"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Legendaismeret"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Történelemismeret"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
        document.getElementById("kepzettseg11").innerHTML = "Rúnamágia"
        document.getElementById("kepzettseg11fok").innerHTML = "Af"
    }

}

function dice() {

    var d6 = Math.round(Math.random() * 6 + 1); /*dobókocka hat oldalú*/
    var d8 = Math.round(Math.random() * 8 + 1);
    var d10 = Math.round(Math.random() * 10 + 1);

    if (document.getElementById("kasztselector").value == "harcos") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 10;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
    }

    if (document.getElementById("kasztselector").value == "gladiator") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
    }

    if (document.getElementById("kasztselector").value == "fejvadasz") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 10;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
    }

    if (document.getElementById("kasztselector").value == "lovag") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 10;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
    }

    if (document.getElementById("kasztselector").value == "tolvaj") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
    }

    if (document.getElementById("kasztselector").value == "bard") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
    }

    if (document.getElementById("kasztselector").value == "pap") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 9;
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
    }

    if (document.getElementById("kasztselector").value == "paplovag") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 10;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
    }

    if (document.getElementById("kasztselector").value == "harcmuvesz") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + 13;
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 10;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
    }

    if (document.getElementById("kasztselector").value == "kardmuvesz") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 13;
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
    }

    if (document.getElementById("kasztselector").value == "boszorkany") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 13;
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
    }

    if (document.getElementById("kasztselector").value == "boszorkanymester") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 10 + 1)) + 8;
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
    }

    if (document.getElementById("kasztselector").value == "tuzvarazslo") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + 6;
    }

    if (document.getElementById("kasztselector").value == "varazslo") {
        document.getElementById("ero").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("gyorsasag").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("ugyesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("allokepesseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("egeszseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("szepseg").innerHTML = (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1)) + (Math.round(Math.random() * 6 + 1));
        document.getElementById("intelligencia").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("akaratero").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
        document.getElementById("asztral").innerHTML = (Math.round(Math.random() * 6 + 1)) + 12;
    }


}

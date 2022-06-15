var k6 = Math.round(Math.random() * 6 + 1); /*dobókocka hat oldalú*/
var k8 = Math.round(Math.random() * 8 + 1);
var k10 = Math.round(Math.random() * 10 + 1);

function keplus() { /*harci érték módosítói!!! */




    document.getElementById("ke").innerHTML++;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
    }
}

function keminus() {
    document.getElementById("ke").innerHTML--;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
    }

}

function teplus() {
    document.getElementById("te").innerHTML++;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
    }

}

function teminus() {
    document.getElementById("te").innerHTML--;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
    }
}

function veplus() {
    document.getElementById("ve").innerHTML++;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
    }

}

function veminus() {
    document.getElementById("ve").innerHTML--;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
    }
}
hm--;
function ceplus() {
    document.getElementById("ce").innerHTML++;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
    }

}

function ceminus() {
    document.getElementById("ce").innerHTML--;
    document.getElementById("maxhm").innerHTML--;

    if (document.getElementById("maxhm").innerHTML == -1) {
        alert("nincs már több pontod!!");
        document.getElementById("maxhm").innerHTML++;
    }

}







function eroplus() { /*ezek az eroplus minus ugyessegplus minus stb a tulajdonságok gombjai*/
    document.getElementById("ero").innerHTML++;
    if (document.getElementById("ero").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("ero").innerHTML--;
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
    if (document.getElementById("gyorsasag").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("gyorsasag").innerHTML--;
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
    if (document.getElementById("ugyesseg").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("ugyesseg").innerHTML--;
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
    if (document.getElementById("allokepesseg").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("allokepesseg").innerHTML--;
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
    if (document.getElementById("egeszseg").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("egeszseg").innerHTML--;
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
    if (document.getElementById("szepseg").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("szepseg").innerHTML--;
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
    if (document.getElementById("intelligencia").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("intelligencia").innerHTML--;
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
    if (document.getElementById("akaratero").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("akaratero").innerHTML--;
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
    if (document.getElementById("asztral").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("asztral").innerHTML--;
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



    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "ember") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "";

    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "felelf") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "torpe") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "Hőlátás, Csapdakeresés: 35%, Titkosajtó keresés: 30% Földalatti érzék, Építmény korát meg tudják határozni";
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "ork") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "Infralátás, Csapdafelfedezés 20%, Titkosajtó keresés 10%, Földalatti érzék, Kiváló szaglás";
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

    }

    if (document.getElementById("kasztselector").value == "gladiator" && document.getElementById("fajselector").value == "felelf") { /*gladiátor értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
    }

    if (document.getElementById("kasztselector").value == "gladiator" && document.getElementById("fajselector").value == "torpe") { /*gladiátor értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("egyeb").innerHTML = "Hőlátás, Csapdakeresés: 35%, Titkosajtó keresés: 30% Földalatti érzék, Építmény korát meg tudják határozni";
    }

    if (document.getElementById("kasztselector").value == "gladiator" && document.getElementById("fajselector").value == "ork") { /*gladiátor értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 8 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 7 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 5);
        document.getElementById("egyeb").innerHTML = "Infralátás, Csapdafelfedezés 20%, Titkosajtó keresés 10%, Földalatti érzék, Kiváló szaglás";
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
    }

    if (document.getElementById("kasztselector").value == "tolvaj" && document.getElementById("fajselector").value == "felelf") { /*tolvaj értékei!!! */
        document.getElementById("ke").innerHTML = 8 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 20 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 5 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
    }

    if (document.getElementById("kasztselector").value == "tolvaj" && document.getElementById("fajselector").value == "torpe") { /*tolvaj értékei!!! */
        document.getElementById("ke").innerHTML = 8 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 5 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("egyeb").innerHTML = "Hőlátás, Csapdakeresés: 35%, Titkosajtó keresés: 30% Földalatti érzék, Építmény korát meg tudják határozni";
    }

    if (document.getElementById("kasztselector").value == "tolvaj" && document.getElementById("fajselector").value == "ork") { /*tolvaj értékei!!! */
        document.getElementById("ke").innerHTML = 8 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 17 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 72 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 4 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 5 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("egyeb").innerHTML = "Infralátás, Csapdafelfedezés 20%, Titkosajtó keresés 10%, Földalatti érzék, Kiváló szaglás";
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
        document.getElementById("egyeb").innerHTML = "";
    }

    if (document.getElementById("kasztselector").value == "bard" && document.getElementById("fajselector").value == "felelf") { /*bárd értékei!!! */
        document.getElementById("ke").innerHTML = 10 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 20 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 5 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
    }

    if (document.getElementById("kasztselector").value == "bard" && document.getElementById("fajselector").value == "torpe") { /*bárd értékei!!! */
        alert("A választott faj nem tartozhat a választott Kasztba!");
        window.location.reload();
    }

    if (document.getElementById("kasztselector").value == "bard" && document.getElementById("fajselector").value == "ork") { /*bárd értékei!!! */
        document.getElementById("ke").innerHTML = 10 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 5 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 3);
        document.getElementById("egyeb").innerHTML = "Infralátás, Csapdafelfedezés 20%, Titkosajtó keresés 10%, Földalatti érzék, Kiváló szaglás";
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
        document.getElementById("kepzettseg10").innerHTML = "Rejtőzködés"
        document.getElementById("kepzettseg10fok").innerHTML = "15%"
        document.getElementById("kepzettseg10").innerHTML = "Kötéltánc"
        document.getElementById("kepzettseg10fok").innerHTML = "25%"
        document.getElementById("kepzettseg10").innerHTML = "Zsebmetszés"
        document.getElementById("kepzettseg10fok").innerHTML = "35%"
        document.getElementById("kepzettseg10").innerHTML = "Csapdafelfedezés"
        document.getElementById("kepzettseg10fok").innerHTML = "25%"
        document.getElementById("kepzettseg10").innerHTML = "Titkosajtó keresés"
        document.getElementById("kepzettseg10fok").innerHTML = "15%"

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

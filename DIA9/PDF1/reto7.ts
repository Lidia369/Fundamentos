function nombre (nombres)

    {
        for(let i = 0; i< nombres.length; i++){
//nombres.charAt(0) la primera letra
            if (nombres[i].charAt(0) == "M"){
                console.log (true);
            }else{
                console.log(false);
            }

        }

    }

nombre(["Marocs","Alicia"]);
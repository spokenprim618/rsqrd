function roundTo(n, digits) {
        if (digits === undefined) {
            digits = 0;
        }

        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        return Math.round(n) / multiplicator;
    }
    let y =[41990,42228,42409,43318,44334,46326,48201,50233,50303,49777,49276,50054,51017,51939,53657,56516,59039,61372,63179,68702,67521]
    
    function quadratic(){
        let array = [];
        for(let x = 1;x<=21;x++){
            let quad = roundTo((65.53485417*(x**2))+((-193132/1169)*x)+42089.56644)
            
            array.push(quad)
        }
        return array;
    }
    function residuals(){
        let array2 = []
        let addAll=0;
        for(let i=0;i<=20;i++){
            let bs = roundTo((y[i]-quadratic()[i])**2)
            array2.push(bs)
            addAll=array2[i]+addAll;
        }
        return [array2,addAll]
    }
    
    function totalSums(yBar){
        let array3 = []
        let addAll=0;
        for(let i =0; i<=20;i++){
            let bs2 = roundTo((y[i]-yBar)**2)
            array3.push(bs2)
            addAll = array3[i]+addAll
        }
        return [array3,addAll]
    }
    
    function rSqrd(){
        return roundTo(1-(residuals()[1]/totalSums(51971)[1]),3)
    }
    
    console.log(quadratic());
    console.log(residuals());
    console.log(totalSums(51971));
    console.log(rSqrd());

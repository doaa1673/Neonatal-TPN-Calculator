

function calculateTpn() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the weight and TPN values
    var weight = parseFloat(document.getElementById('weight').value);
    var tpnValue = parseFloat(document.getElementById('tpn').value);
    


    // Validate weight
    if (isNaN(tpnValue) || isNaN(weight)) {
        alert("Please enter a valid values TPN volume and weight.");
        return;
    }


    if (tpnValue < 50 || tpnValue > 180) {
        alert("Warning: TPN volume range is 50-180 ml/kg.");
        
    }
   
    

    
    
    // Calculate TPN Volume (TPN volume per kg multiplied by weight)
    var result = roundToTwo(tpnValue * weight);
    
    // Display the result next to the TPN Volume label
    document.getElementById('tpnResult').textContent = `${result} ml`;
}


////// Vita

function calculateVitaDose() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    

    // Validate weight
    if (isNaN(vitalipids) ||isNaN(weight)) {
        alert("Please enter a valid values for Vitalipids and Weight.");
        return;
    }
    
    if (vitalipids < 0 || vitalipids > 4) {
        alert("Warning: Vitalipids range is 0-4 ml/kg.");
        
    }
    // Calculate Vitalipids before priming (vitalipid value multiplied by weight)
    var result = roundToTwo(vitalipids * weight);
    
    // Display the result next to the calculate button
    document.getElementById('vitadose').textContent = ` ${result} ml`;

}

function calculateVitavolume() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    
    // Validate input
    if (isNaN(weight) || isNaN(vitalipids)) {
        alert("Please enter valid values for Weight and Vitalipids.");
        return;
    }
    
    // Calculate Vitalipids before priming (vitalipid value multiplied by weight)
    var result = roundToTwo(vitalipids * weight);
    
    // Display the result next to the calculate button
    document.getElementById('vitavolume').textContent = ` ${result} ml`;

}


////////////////////////////////////// Intra


function calculateIntraDose() {
  
    // Get the weight and intralipids values
    var weight = parseFloat(document.getElementById('weight').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var intralipidsbrands1 = document.getElementById('intralipidsbrands').value;
    
    // Validate input
    if (isNaN(weight) || isNaN(intralipids)|| intralipidsbrands1 === "") {
        alert("Please enter valid values for Weight, Intralipids, and Brand.");
        return;
    }
    if ((intralipids < 0.5 || intralipids > 4) && intralipids !== 0) {
        alert("Warning: Intralipids range is 0.5-4 gm/kg.");
        
    }



    // Initialize the result
    var intralipids;

    // Calculate sodium chloride volume based on the strength
    if ( intralipidsbrands1=== "Intralipids2") {
        result = (intralipids * weight);
    } else if (intralipidsbrands1 === "Smoflipid") {
        result = (intralipids * weight);
    } else {
        alert("Please select a valid Brand for Intralipids.");
        return;
    }
    
    // Display the result next to the Intralipids label
    document.getElementById('intradose').textContent = `${result.toFixed(2)} gm`;


}

function calculateIntravolume() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the weight and intralipids values
    var weight = parseFloat(document.getElementById('weight').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    
    var intralipidsbrands1 = document.getElementById('intralipidsbrands').value;
    
    // Validate input
    if (isNaN(weight) || isNaN(intralipids)|| intralipidsbrands1 === "") {
        alert("Please enter valid values for Weight, Intralipids, and Brand.");
        return;
    }
    



    // Initialize the result
    var intralipids;

    // Calculate sodium chloride volume based on the strength
    if ( intralipidsbrands1=== "Intralipids2") {
        result = roundToTwo((intralipids * weight * 100)/20);
    } else if (intralipidsbrands1 === "Smoflipid") {
        result = roundToTwo((intralipids * weight * 100)/20);
    } else {
        alert("Please select a valid Brand for Intralipids.");
        return;
    }
    
    
    // Display the result next to the Intralipids label
    document.getElementById('intravolume').textContent = `${result.toFixed(2)} ml`;

}



/////lipid

function calculateLipidvolume() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

    // Get the weight, intralipids, and vitalipids values
    var weight = parseFloat(document.getElementById('weight').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    
    // Validate input
    if (isNaN(weight) || isNaN(intralipids) || isNaN(vitalipids)) {
        alert("Please enter valid values for Weight, Intralipids, and Vitalipids.");
        return;
    }
    
    // Calculate Intralipids: (value * weight) * (100/20)
    var intralipidVolume = roundToTwo((intralipids * weight) * (100 / 20));
    
    // Calculate Vitalipids: value * weight
    var vitalipidVolume = roundToTwo(vitalipids * weight);
    
    // Calculate the total Lipid Volume by adding both results
    var totalLipidVolume = roundToTwo(intralipidVolume + vitalipidVolume);
    
    // Display the result next to the Lipid Total label
    document.getElementById('lipidvolume').textContent = `${totalLipidVolume} ml`;

}

function calculateLipidvolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value);

    // Validate input
    if (isNaN(weight) || isNaN(vitalipids) || isNaN(intralipids) || isNaN(lipidTubeLength)) {
        alert("Please enter valid values for Weight, Vitalipids, Intralipids, and Lipid IV Set Tube Length .");
        return;
    }

    // Calculate Vitalipid Volume
    var vitalipidVolume = roundToTwo(vitalipids * weight);

    // Calculate Intralipid Volume
    var intralipidVolume = roundToTwo(intralipids * weight) * 100/ 20;

    // Calculate Total Lipid Volume
    var totalLipidVolume = roundToTwo(vitalipidVolume + intralipidVolume);

    // Calculate Priming Factors
    var primingFactor = roundToTwo(lipidTubeLength / totalLipidVolume);

    // Calculate Priming Volumes
    var vitalipidPrimingVolume = roundToTwo(vitalipidVolume * primingFactor);
    var intralipidPrimingVolume = roundToTwo(intralipidVolume * primingFactor);

    // Calculate Total Lipid Priming Volume
    var totalLipidPrimingVolume = roundToTwo(vitalipidPrimingVolume + intralipidPrimingVolume);

    // Display result
    document.getElementById('lipidvolumepriming').textContent = `${totalLipidPrimingVolume} ml`;

}

function calculateLipidtotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value);
    

    // Validate input
    if (isNaN(weight) || isNaN(vitalipids) || isNaN(intralipids) || isNaN(lipidTubeLength)) {
        alert("Please enter valid values for Weight, Vitalipids, Intralipids, and Lipid IV Set Tube Length .");
        return;
    }

    // Calculate Vitalipid Volume
    var vitalipidVolume = roundToTwo(vitalipids * weight);

    // Calculate Intralipid Volume
    var intralipidVolume = roundToTwo((intralipids * weight) * 100/ 20);

    // Calculate Total Lipid Volume
    var totalLipidVolume = roundToTwo(vitalipidVolume + intralipidVolume);

    // Calculate Priming Factors
    var primingFactor = roundToTwo(lipidTubeLength / totalLipidVolume);

    // Calculate Priming Volumes
    var vitalipidPrimingVolume = roundToTwo((vitalipidVolume * primingFactor) + vitalipidVolume);
    var intralipidPrimingVolume = roundToTwo((intralipidVolume * primingFactor) + intralipidVolume);

    // Calculate Total Lipid Priming Volume
    var totalLipidPrimingVolume1 = roundToTwo(vitalipidPrimingVolume + intralipidPrimingVolume);

    // Display result
    document.getElementById('lipidtotal').textContent = `${totalLipidPrimingVolume1} ml`;

}

function calculateIntravolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

    var weight = parseFloat(document.getElementById('weight').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value);
    var vita = parseFloat(document.getElementById('vitalipids').value);
    var intralipidsbrands1 = document.getElementById('intralipidsbrands').value;
    
    // Validate input
    if (isNaN(weight) || isNaN(intralipids)|| intralipidsbrands1 === "") {
        alert("Please enter valid values for Weight, Intralipids, and Brand.");
        return;
    }
   



    // Initialize the result
    var intralipids;

    // Calculate sodium chloride volume based on the strength
    if ( intralipidsbrands1=== "Intralipids2") {
        result = roundToTwo((intralipids * weight * 100)/20);
    } else if (intralipidsbrands1 === "Smoflipid") {
        result = roundToTwo((intralipids * weight * 100)/20);
    } else {
        alert("Please select a valid Brand for Intralipids.");
        return;
    }
    
    // Validate input
    if (isNaN(weight) || isNaN(intralipids) || isNaN(lipidTubeLength) || isNaN(vita)|| intralipidsbrands1 === "") {
        alert("Please enter valid values for Weight, Intralipids, Brand, Lipid IV Set Tube Length, and Lipid Total Volume.");
        return;
    }

    // Calculate Intralipid volume
    var vitavolume = roundToTwo(vita *weight);
    var totalLipidVolume = roundToTwo(vitavolume + result);
    var primingFactor = roundToTwo(lipidTubeLength / totalLipidVolume);
    var primedIntralipidVolume = roundToTwo(primingFactor * result);

    // Display result
    document.getElementById('intravolumepriming').textContent = ` ${primedIntralipidVolume} ml`;

}

function calculateIntratotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

    var weight = parseFloat(document.getElementById('weight').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value);
    var vita = parseFloat(document.getElementById('vitalipids').value);
    var intralipidsbrands1 = document.getElementById('intralipidsbrands').value;
    
    // Validate input
    if (isNaN(weight) || isNaN(intralipids)|| intralipidsbrands1 === "") {
        alert("Please enter valid values for Weight, Intralipids, and Brand.");
        return;
    }
   



    // Initialize the result
    var intralipids;

    // Calculate sodium chloride volume based on the strength
    if ( intralipidsbrands1=== "Intralipids2") {
        result = roundToTwo((intralipids * weight * 100)/20);
    } else if (intralipidsbrands1 === "Smoflipid") {
        result = roundToTwo((intralipids * weight * 100)/20);
    } else {
        alert("Please select a valid Brand for Intralipids.");
        return;
    }
    
    // Validate input
    if (isNaN(weight) || isNaN(intralipids) || isNaN(lipidTubeLength) || isNaN(vita)|| intralipidsbrands1 === "") {
        alert("Please enter valid values for Weight, Intralipids, Brand, Lipid IV Set Tube Length, and Lipid Total Volume.");
        return;
    }

    // Calculate Intralipid volume
    var vitavolume = roundToTwo(vita *weight); 
    var totalLipidVolume = roundToTwo(vitavolume + result);
    var primingFactor = roundToTwo(lipidTubeLength / totalLipidVolume);
    var primedIntralipidVolume1 = roundToTwo(primingFactor * result) + result;
    




    // Display result
    document.getElementById('intratotal').textContent = ` ${primedIntralipidVolume1} ml`;

}

function calculateVitavolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

     // Get the weight, vitalipids, lipid tube length, and lipid total volume
     var weight = parseFloat(document.getElementById('weight').value);
     var vitalipids = parseFloat(document.getElementById('vitalipids').value);
     var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value); // Lipid tube length in cm
     var intra = parseFloat(document.getElementById('intralipids').value);
     
     // Validate input
     if (isNaN(weight) || isNaN(vitalipids) || isNaN(lipidTubeLength) || isNaN(intra)) {
         alert("Please enter valid values for Weight, Vitalipids, Lipid IV Set Tube Length, and Intralipids.");
         return;
     }
     
     // Calculate the Vitalipids Volume: value * weight
     var intravolume = roundToTwo(( intra * weight ) * 100/ 20);
     var vitalipidVolume = roundToTwo(vitalipids * weight);

     var totalLipidVolume =roundToTwo(intravolume + vitalipidVolume);
     
     // Calculate the Priming Factor
     var primingFactor =roundToTwo(lipidTubeLength / totalLipidVolume);
     
     // Calculate the Priming Adjusted Vitalipids Volume
     var primedVitalipidVolume = roundToTwo(primingFactor * vitalipidVolume);
     
     
     // Display the result next to the "Vitalipids with Priming" button
     document.getElementById('vitavolumepriming').textContent = ` ${primedVitalipidVolume} ml`;

}

function calculateVitatotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

     // Get the weight, vitalipids, lipid tube length, and lipid total volume
     var weight = parseFloat(document.getElementById('weight').value);
     var vitalipids = parseFloat(document.getElementById('vitalipids').value);
     var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value); // Lipid tube length in cm
     var intra = parseFloat(document.getElementById('intralipids').value);
     
     // Validate input
     if (isNaN(weight) || isNaN(vitalipids) || isNaN(lipidTubeLength) || isNaN(intra)) {
         alert("Please enter valid values for Weight, Vitalipids, Lipid IV Set Tube Length, and Vitalipids.");
         return;
     }
     
     // Calculate the Vitalipids Volume: value * weight
     var intravolume = roundToTwo((intra * weight) * 100/ 20);
     var vitalipidVolume = roundToTwo(vitalipids * weight);

     var totalLipidVolume = roundToTwo(intravolume + vitalipidVolume);
     
     // Calculate the Priming Factor
     var primingFactor = roundToTwo(lipidTubeLength / totalLipidVolume);
     
     // Calculate the Priming Adjusted Vitalipids Volume
     var primedVitalipidVolume = roundToTwo(vitalipidVolume + (primingFactor * vitalipidVolume));
     
     // Display the result next to the "Vitalipids with Priming" button
     document.getElementById('vitatotal').textContent = `${primedVitalipidVolume} ml`;

}



//////Aq

function calculateAqvolume() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

     // Get the calculated TPN volume from the result span
     var weight = parseFloat(document.getElementById('weight').value);
     var vitalipids = parseFloat(document.getElementById('vitalipids').value);
     var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
     var intra = parseFloat(document.getElementById('intralipids').value);
     
 
     // Validate input
     if (isNaN(weight) || isNaN(vitalipids) || isNaN(tpn) || isNaN(intra)) {
         alert("Please fill out all the required fields.");
         return;
     }
 
     // Calculate Aquous Volume
     var totalVolume = roundToTwo(tpn * weight);
     var vitavolume = roundToTwo(vitalipids * weight);
     var intravolume = roundToTwo(intra * weight) * 100/ 20;
     var lipidVolume = roundToTwo(vitavolume + intravolume);
     var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);
 
     // Display the result
     document.getElementById('aqvolume').textContent = `${aquaVolume1} ml`;

}

function calculateAqvolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the calculated TPN volume from the result span
    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    // Get the Aquous Tube Length
    var aquTubeLength = parseFloat(document.getElementById('aqulength').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(vitalipids) || isNaN(aquTubeLength) | isNaN(tpn) | isNaN(intra)) {
        alert("Please ensure to fill out all required fields.");
        return;
    }

    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquTubeLength / aquaVolume1);

    // Calculate Priming Volume
    var primingVolume = roundToTwo(primingFactor * aquaVolume1);

    // Display the result
    document.getElementById('aqvolumepriming').textContent = `${primingVolume} ml`;

}

function calculateAqtotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    // Get the Aquous Tube Length
    var aquTubeLength = parseFloat(document.getElementById('aqulength').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(vitalipids) || isNaN(aquTubeLength) | isNaN(tpn) | isNaN(intra)) {
        alert("Please ensure to fill out all required fields.");
        return;
    }
    
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquTubeLength / aquaVolume1);

    // Calculate Priming Volume
    var primingVolume = roundToTwo(primingFactor * aquaVolume1);

    // Calculate Aquous Volume with Priming
    var aquaVolumeWithPriming = roundToTwo(aquaVolume1 + primingVolume);

    // Display the result
    document.getElementById('aqtotal').textContent = `${aquaVolumeWithPriming} ml`;

}

////////Lipid factor

function calculateLipidfactor() {
   

    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value);

    // Validate input
    if (isNaN(weight) || isNaN(vitalipids) || isNaN(intralipids) || isNaN(lipidTubeLength)) {
        alert("Please enter valid values for Weight, Vitalipids, Intralipids, and Lipid IV Set Tube Length .");
        return;
    }

    // Calculate Vitalipid Volume
    var vitalipidVolume = (vitalipids * weight);

    // Calculate Intralipid Volume
    var intravolume = (intralipids * weight) * 100/ 20;

    // Calculate Total Lipid Volume
    var totalLipidVolume =(vitalipidVolume + intravolume);

    // Calculate Priming Factors
    var primingFactor = (lipidTubeLength / totalLipidVolume);

    // Display result
    document.getElementById('Lipidfactor').textContent = `${primingFactor.toFixed(2)}`;

}

////Aq factor

function calculateAqfactor() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    var aquTubeLength = parseFloat(document.getElementById('aqulength').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(vitalipids) || isNaN(aquTubeLength) || isNaN(tpn) || isNaN(intra)) {
        alert("Please ensure to fill out all required fields.");
        return;
    }
    
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquTubeLength / aquaVolume1);

    // Display the result
    document.getElementById('Aqfactor').textContent = `${primingFactor}`;

}

/////Amino

function calculateAminoaDose() {
    

     // Get the weight and amino acids value entered by the user
     var weight = parseFloat(document.getElementById('weight').value);
     var aminoacidsValue = parseFloat(document.getElementById('aminoacids').value);
 
     // Validate inputs
     if (isNaN(weight) || isNaN(aminoacidsValue)) {
         alert("Please enter valid values for Weight and Amino acids.");
         return;
     }

     if ((aminoacidsValue < 1 || aminoacidsValue > 4.5)&& aminoacidsValue !== 0) {
        alert("Warning: Aminoacids range is 1-4.5 gm/kg.");
        
    }
 
     // Calculate Amino Acids Volume
     var aminoacidsVolume = aminoacidsValue * weight;
 
     // Display the result
     document.getElementById('aminodose').textContent = `${aminoacidsVolume.toFixed(2)} gm`;

}

function calculateaminovolume() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

     // Get the weight and amino acids value entered by the user
     var weight = parseFloat(document.getElementById('weight').value);
     var aminoacidsValue = parseFloat(document.getElementById('aminoacids').value);
 
     // Validate inputs
     if (isNaN(weight) || isNaN(aminoacidsValue)) {
         alert("Please enter valid values for Weight and Amino acids.");
         return;
     }
 
     // Calculate Amino Acids Volume
     var aminoacidsVolume = roundToTwo((aminoacidsValue * weight) * (100 / 10));
 
     // Display the result
     document.getElementById('aminovolume').textContent = `${aminoacidsVolume} ml`;

}

function calculateAminovolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the necessary inputs
    var aquLength = parseFloat(document.getElementById('aqulength').value);
    var aminoacidsValue = parseFloat(document.getElementById('aminoacids').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);


    // Validate inputs
    if (isNaN(weight) || isNaN(vitalipids) || isNaN(aquLength) || isNaN(tpn) || isNaN(intra) || isNaN(aminoacidsValue)) {
        alert("Please ensure to fill out all required fields.");
        return;
    }


    var aminoacid = roundToTwo((aminoacidsValue * weight * 100) / 10);
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);

    // Calculate Amino Acids Volume with Priming
    var aminoPriming = roundToTwo(aminoacid * primingFactor);
   

    // Display the result
    document.getElementById('aminovolumepriming').textContent = `${aminoPriming} ml`;

}

function calculateAminototal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
     // Get the necessary inputs
     var aquLength = parseFloat(document.getElementById('aqulength').value);
     var aminoacidsValue = parseFloat(document.getElementById('aminoacids').value);
     var weight = parseFloat(document.getElementById('weight').value);
     var vitalipids = parseFloat(document.getElementById('vitalipids').value);
     var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
     var intra = parseFloat(document.getElementById('intralipids').value);
 
 
     // Validate inputs
     if (isNaN(weight) || isNaN(vitalipids) || isNaN(aquLength) || isNaN(tpn) || isNaN(intra) || isNaN(aminoacidsValue)) {
         alert("Please ensure to fill out all required fields.");
         return;
     }
 
 
     var aminoacid = roundToTwo((aminoacidsValue * weight * 100) / 10);
     var totalVolume = roundToTwo(tpn * weight);
     var vitavolume = roundToTwo(vitalipids * weight);
     var intravolume = roundToTwo((intra * weight) * 100/ 20);
     var lipidVolume = roundToTwo (vitavolume + intravolume);
     var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
     var primingFactor = roundToTwo(aquLength / aquaVolume1);
 
 
     // Calculate Amino Acids Volume with Priming
     var aminoPriming2 = roundToTwo((aminoacid * primingFactor) + aminoacid);
    
 
     // Display the result
     document.getElementById('aminototal').textContent = `${aminoPriming2} ml`;

}

/////Dex

function calculateDexaDose() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the necessary inputs
    var weight = parseFloat(document.getElementById('weight').value);
    var dextroseValue = parseFloat(document.getElementById('dextrose').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(dextroseValue)) {
        alert("Please enter valid values for weight and dextrose.");
        return;
    }

    if ((dextroseValue < 5 || dextroseValue> 16)&& dextroseValue !== 0) {
        alert("Warning: Dextrose range is 5-16 gm/kg.");
        
    }

    // Calculate Dextrose Volume
    var dextroseVolume = (dextroseValue * weight);

    // Display the result
    document.getElementById('dexdose').textContent = `${dextroseVolume.toFixed(2)} gm`;

}

function calculateDexvolume() {
    
    // Get the necessary inputs
    var weight = parseFloat(document.getElementById('weight').value);
    var dextroseValue = parseFloat(document.getElementById('dextrose').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(dextroseValue)) {
        alert("Please enter valid values for weight and dextrose.");
        return;
    }

    // Calculate Dextrose Volume
    var dextroseVolume = (dextroseValue * weight * 100) / 50;

    // Display the result
    document.getElementById('dexvolume').textContent = `${dextroseVolume.toFixed(2)} ml`;

}

function calculateDexvolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the necessary inputs
    var weight = parseFloat(document.getElementById('weight').value);  // User's weight
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    var dextroseValue = parseFloat(document.getElementById('dextrose').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(aquLength) || isNaN(vitalipids) || isNaN(tpn) || isNaN(intra) || isNaN(dextroseValue) ) {
        alert("Please ensure to fill out all required fields.");
        return;
    }

    var dextroseVolume = roundToTwo((dextroseValue * weight * 100) / 50);
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);

    // Apply the priming adjustment to the dextrose volume
    var dextroseVolumePriming = roundToTwo(primingFactor * dextroseVolume);

    // Display the result
    document.getElementById('dexvolumepriming').textContent = `${dextroseVolumePriming} ml`;

}

function calculateDextotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
   // Get the necessary inputs
   var weight = parseFloat(document.getElementById('weight').value);  // User's weight
   var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
   var vitalipids = parseFloat(document.getElementById('vitalipids').value);
   var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
   var intra = parseFloat(document.getElementById('intralipids').value);
   var dextroseValue = parseFloat(document.getElementById('dextrose').value);

   // Validate inputs
   if (isNaN(weight) || isNaN(aquLength) || isNaN(vitalipids) || isNaN(tpn) || isNaN(intra) || isNaN(dextroseValue) ) {
       alert("Please ensure to fill out all required fields.");
       return;
   }

   var dextroseVolume = roundToTwo((dextroseValue * weight * 100) / 50);
   var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);

   // Apply the priming adjustment to the dextrose volume
   var dextroseVolumePriming = roundToTwo(dextroseVolume + (primingFactor * dextroseVolume));

   // Display the result
   document.getElementById('dextotal').textContent = `${dextroseVolumePriming} ml`;

}


/////NaCl

function calculateNACLDose() {
   
    var naclValue = parseFloat(document.getElementById('nacl').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumChlorideStrength = document.getElementById('sodiumChlorideStrength').value;

    // Debugging: Log the values
    console.log("Sodium Chloride Value:", naclValue);
    console.log("Weight:", weight);
    console.log("Sodium Chloride Strength:", sodiumChlorideStrength);

    // Check if all inputs are valid
    if (isNaN(naclValue) || isNaN(weight) || sodiumChlorideStrength === "") {
        alert("Please enter valid values for Sodium Chloride, Weight, and Strength.");
        return;
    }

    if ((naclValue < 1 || naclValue > 8)&& naclValue !== 0) {
        alert("Warning: Sodium Chloride range is 1-8 mmol/kg.");
        
    }

    

    // Initialize the result
    var naclResult;

    

    // Calculate sodium chloride volume based on the strength
    if (sodiumChlorideStrength === "20%") {
        naclResult = (naclValue * weight);
    } else if (sodiumChlorideStrength === "3%") {
        naclResult = (naclValue * weight);
    } else {
        alert("Please select a valid Strength for Sodium Chloride.");
        return;
    }
    document.getElementById('nacldose').textContent = `${naclResult.toFixed(2)} mmol`;
       
    }
    


    
    
    

    



function calculateNACLvolume() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }

    // Retrieve input values
    var naclValue = parseFloat(document.getElementById('nacl').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumChlorideStrength = document.getElementById('sodiumChlorideStrength').value;

    // Debugging: Log the values
    console.log("Sodium Chloride Value:", naclValue);
    console.log("Weight:", weight);
    console.log("Sodium Chloride Strength:", sodiumChlorideStrength);

    // Check if all inputs are valid
    if (isNaN(naclValue) || isNaN(weight) || sodiumChlorideStrength === "") {
        alert("Please enter valid values for Sodium Chloride, Weight, and Strength.");
        return;
    }

    // Initialize the result
    var naclResult;

    // Calculate sodium chloride volume based on the strength
    if (sodiumChlorideStrength === "20%") {
        naclResult = roundToTwo(naclValue * weight) / 3.422;
    } else if (sodiumChlorideStrength === "3%") {
        naclResult = roundToTwo(naclValue * weight) / 0.519;
    } else {
        alert("Please select a valid Strength for Sodium Chloride.");
        return;
    }

    // Display the result
    document.getElementById('naclvolume').textContent = `${naclResult.toFixed(2)} ml`;
}



function calculateNACLvolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Retrieve input values
    var naclValue = parseFloat(document.getElementById('nacl').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumChlorideStrength = document.getElementById('sodiumChlorideStrength').value;
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);

    // Debugging: Log the values
    console.log("Sodium Chloride Value:", naclValue);
    console.log("Weight:", weight);
    console.log("Sodium Chloride Strength:", sodiumChlorideStrength);

    // Check if all inputs are valid
    if (isNaN(naclValue) || isNaN(weight) || sodiumChlorideStrength === ""|| isNaN(intra)|| isNaN(tpn)|| isNaN(vitalipids)|| isNaN(aquLength)) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }

    // Initialize the result
    var naclResult;

    // Calculate sodium chloride volume based on the strength
    if (sodiumChlorideStrength === "20%") {
        naclResult = roundToTwo((naclValue * weight) / 3.422);
    } else if (sodiumChlorideStrength === "3%") {
        naclResult = roundToTwo((naclValue * weight) / 0.519);
    } else {
        alert("Please select a valid Strength for Sodium Chloride.");
        return;
    }


    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);

   var naclvolume1 = roundToTwo(naclResult * primingFactor);


    // Display the result
    document.getElementById('naclvolumepriming').textContent = `${naclvolume1} ml`;

}

function calculateNACLtotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Retrieve input values
    var naclValue = parseFloat(document.getElementById('nacl').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumChlorideStrength = document.getElementById('sodiumChlorideStrength').value;
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    
    // Debugging: Log the values
    console.log("Sodium Chloride Value:", naclValue);
    console.log("Weight:", weight);
    console.log("Sodium Chloride Strength:", sodiumChlorideStrength);
    
    // Check if all inputs are valid
    if (isNaN(naclValue) || isNaN(weight) || sodiumChlorideStrength === ""|| isNaN(intra)|| isNaN(tpn)|| isNaN(vitalipids)|| isNaN(aquLength)) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }
    
    // Initialize the result
    var naclResult;
    
    // Calculate sodium chloride volume based on the strength
    if (sodiumChlorideStrength === "20%") {
        naclResult = roundToTwo((naclValue * weight) / 3.422);
    } else if (sodiumChlorideStrength === "3%") {
        naclResult = roundToTwo((naclValue * weight) / 0.519);
    } else {
        alert("Please select a valid Strength for Sodium Chloride.");
        return;
    }
    
    
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    
    var naclvolume1 = roundToTwo((naclResult * primingFactor) + naclResult);
    
    
    // Display the result
    document.getElementById('nacltotal').textContent = `${naclvolume1} ml`;
    


}

////Nacetate

function calculateNacetateaDose() {
    
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumAcetateValue = parseFloat(document.getElementById('sodiumAcetate').value);

    if (isNaN(weight) || isNaN(sodiumAcetateValue)) {
        alert("Please enter valid values for weight and sodium acetate.");
        return;
    }

    if (sodiumAcetateValue < 0 || sodiumAcetateValue > 4) {
        alert("Warning: Sodium Acetate range is 0-4 mmol/kg.");
        
    }

    // Calculate Sodium Acetate Volume
    var sodiumAcetateVolume1 = (sodiumAcetateValue * weight);

    // Display the result
    document.getElementById('nacetatedose').textContent = `${sodiumAcetateVolume1.toFixed(2)} mmol`;
    

}

function calculateNacetatevolume() {
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumAcetateValue = parseFloat(document.getElementById('sodiumAcetate').value);

    if (isNaN(weight) || isNaN(sodiumAcetateValue)) {
        alert("Please enter valid values for weight and sodium acetate.");
        return;
    }

    // Calculate Sodium Acetate Volume
    var sodiumAcetateVolume = (sodiumAcetateValue * weight) / 2;

    // Display the result
    document.getElementById('nacetatevolume').textContent = `${sodiumAcetateVolume.toFixed(2)} mmol`;

}

function calculateNacetatevolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumAcetateValue = parseFloat(document.getElementById('sodiumAcetate').value);

    if (isNaN(weight) || isNaN(sodiumAcetateValue) || isNaN(aquLength) || isNaN(vitalipids) || isNaN(tpn) || isNaN(intra)) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }

    // Calculate Sodium Acetate Volume
    var sodiumAcetateVolume = roundToTwo((sodiumAcetateValue * weight) / 2);
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    
    var nacetatepriming = roundToTwo(sodiumAcetateVolume * primingFactor);

    // Display the result
    document.getElementById('nacetatevolumepriming').textContent = `${nacetatepriming} ml`;

}

function calculateNacetatetotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumAcetateValue = parseFloat(document.getElementById('sodiumAcetate').value);

    if (isNaN(weight) || isNaN(sodiumAcetateValue) || isNaN(aquLength) || isNaN(vitalipids) || isNaN(tpn) || isNaN(intra)) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }

    // Calculate Sodium Acetate Volume
    var sodiumAcetateVolume = roundToTwo((sodiumAcetateValue * weight) / 2);
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    
    var nacetatepriming1 = roundToTwo((sodiumAcetateVolume * primingFactor) + sodiumAcetateVolume);

    // Display the result
    document.getElementById('nacetatetotal').textContent = `${nacetatepriming1} ml`;

}

/////Naphosphate

function calculateNaphosphateDose() {
    
    // Get the entered Sodium Phosphate value and weight
    var sodiumPhosphateValue = parseFloat(document.getElementById('sodiumPhosphate').value);
    var weight = parseFloat(document.getElementById('weight').value);
    
    // Validate inputs
    if (isNaN(sodiumPhosphateValue) || isNaN(weight)) {
        alert("Please enter valid values for Sodium Phosphate and Weight.");
        return;
    }
    
    if ((sodiumPhosphateValue < 0.3 || sodiumPhosphateValue > 4)&& sodiumPhosphateValue !== 0) {
        alert("Warning: Sodium Phosphate range is 0.3-4 mmol/kg.");
        
    }
    // Calculate Sodium Phosphate volume
    var sodiumPhosphateVolume = sodiumPhosphateValue * weight;
    
    // Display the result
    document.getElementById('naphosphatedose').textContent = `${sodiumPhosphateVolume.toFixed(2)} mmol`;
}


function calculateNaphosphatevolume() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the entered Sodium Phosphate value and weight
    var sodiumPhosphateValue = parseFloat(document.getElementById('sodiumPhosphate').value);
    var weight = parseFloat(document.getElementById('weight').value);
        
    // Get the selected brand
    var brand = document.getElementById('sodiumPhosphateBrand').value;
        
    // Validate inputs
    if (isNaN(sodiumPhosphateValue) || isNaN(weight) || !brand) {
        alert("Please enter valid values for Sodium Phosphate, Weight, and select a brand.");
        return;
    }
        
    // Determine the divisor based on the selected brand
    var divisor = (brand === "Glucophos") ? 1 : (brand === "Phocytan") ? 0.66 : null;
        
    if (divisor === null) {
        alert("Invalid brand selected.");
        return;
    }
        
    // Calculate Sodium Phosphate volume
    var sodiumPhosphateVolume = roundToTwo(sodiumPhosphateValue * weight)/divisor;
        
    // Display the result
    document.getElementById('naphosphatevolume').textContent = `${sodiumPhosphateVolume.toFixed(2)} ml`;

}

function calculateNaphosphatevolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var sodiumPhosphateValue = parseFloat(document.getElementById('sodiumPhosphate').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    
        
    // Get the selected brand
    var brand = document.getElementById('sodiumPhosphateBrand').value;
        
    // Validate inputs
    if (isNaN(sodiumPhosphateValue) || isNaN(aquLength) || isNaN(vitalipids)|| isNaN(tpn)|| isNaN(intra)|| isNaN(weight)|| !brand) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }
        
    // Determine the divisor based on the selected brand
    var divisor = (brand === "Glucophos") ? 1 : (brand === "Phocytan") ? 0.66 : null;
        
    if (divisor === null) {
        alert("Invalid brand selected.");
        return;
    }
        
    // Calculate Sodium Phosphate volume
    var sodiumPhosphateVolume = roundToTwo((sodiumPhosphateValue * weight)/divisor);
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);

    var naphosphatepriming = roundToTwo(sodiumPhosphateVolume * primingFactor);
        
    // Display the result
    document.getElementById('naphosphatevolumepriming').textContent = `${naphosphatepriming} ml`;

}

function calculateNaphosphatetotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var sodiumPhosphateValue = parseFloat(document.getElementById('sodiumPhosphate').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    
        
    // Get the selected brand
    var brand = document.getElementById('sodiumPhosphateBrand').value;
        
    // Validate inputs
    if (isNaN(sodiumPhosphateValue) || isNaN(aquLength) || isNaN(vitalipids)|| isNaN(tpn)|| isNaN(intra)|| isNaN(weight)|| !brand) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }
        
    // Determine the divisor based on the selected brand
    var divisor = (brand === "Glucophos") ? 1 : (brand === "Phocytan") ? 0.66 : null;
        
    if (divisor === null) {
        alert("Invalid brand selected.");
        return;
    }
        
    // Calculate Sodium Phosphate volume
    var sodiumPhosphateVolume = roundToTwo((sodiumPhosphateValue * weight)/divisor);
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);

    var naphosphatepriming1 = roundToTwo((sodiumPhosphateVolume * primingFactor) + sodiumPhosphateVolume);
        
    // Display the result
    document.getElementById('naphosphatetotal').textContent = `${naphosphatepriming1} ml`;

}

/////kcl

function calculatekclDose() {
   
    // Get the user inputs
    var potassiumChlorideValue = parseFloat(document.getElementById('potassiumChloride').value);
    var weight = parseFloat(document.getElementById('weight').value);
    
    // Validate inputs
    if (isNaN(potassiumChlorideValue) || isNaN(weight)) {
        alert("Please ensure both Potassium Chloride value and weight are entered as valid numbers.");
        return;
    }
    
    if ((potassiumChlorideValue < 1 || potassiumChlorideValue > 4) && potassiumChlorideValue !== 0) {
        alert("Warning: Potassium Chloride range is 1-4 mmol/kg.");
        
    }
    // Calculate Potassium Chloride Volume
    var kclVolume = (potassiumChlorideValue * weight);
    
    // Display the result
    document.getElementById('kcldose').textContent = `${kclVolume.toFixed(2)} mmol`;

}

function calculatekclvolume() {
   
    // Get the user inputs
    var potassiumChlorideValue = parseFloat(document.getElementById('potassiumChloride').value);
    var weight = parseFloat(document.getElementById('weight').value);

    
    // Validate inputs
    if (isNaN(potassiumChlorideValue) || isNaN(weight)) {
        alert("Please ensure all required fields are filled out.");
        return;
    }
    
    // Calculate Potassium Chloride Volume
    var kclVolume = (potassiumChlorideValue * weight)/2;
    
    // Display the result
    document.getElementById('kclvolume').textContent = `${kclVolume.toFixed(2)} ml`;

}

function calculatekclvolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the user inputs
    var potassiumChlorideValue = parseFloat(document.getElementById('potassiumChloride').value);
    var weight = parseFloat(document.getElementById('weight').value);
    
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    
    // Validate inputs
    if (isNaN(potassiumChlorideValue) || isNaN(weight)|| isNaN(aquLength)|| isNaN(vitalipids)|| isNaN(tpn)|| isNaN(tpn)) {
        alert("Please ensure all required fields are filled out.");
        return;
    }
    
    
    // Calculate Potassium Chloride Volume
    var kclVolume = roundToTwo((potassiumChlorideValue * weight) / 2);
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    var kclprimng = roundToTwo(kclVolume * primingFactor);

    
    // Display the result
    document.getElementById('kclvolumepriming').textContent = `${kclprimng} ml`;

}

function calculatekcltotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
     // Get the user inputs
     var potassiumChlorideValue = parseFloat(document.getElementById('potassiumChloride').value);
     var weight = parseFloat(document.getElementById('weight').value);
     
     var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
     var vitalipids = parseFloat(document.getElementById('vitalipids').value);
     var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
     var intra = parseFloat(document.getElementById('intralipids').value);
     
     // Validate inputs
     if (isNaN(potassiumChlorideValue) || isNaN(weight)|| isNaN(aquLength)|| isNaN(vitalipids)|| isNaN(tpn)|| isNaN(tpn)) {
         alert("Please ensure all required fields are filled out.");
         return;
     }
     
     
     // Calculate Potassium Chloride Volume
     var kclVolume = roundToTwo((potassiumChlorideValue * weight) / 2);
     var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    var kclprimng = roundToTwo((kclVolume * primingFactor) + kclVolume);
 
     
     // Display the result
     document.getElementById('kcltotal').textContent = `${kclprimng} ml`;

}


////ca

function calculatecaDose() {
   
    // Get the weight and entered value for Ca Gluconate
    var weight = parseFloat(document.getElementById('weight').value);
    var caGluconateValue = parseFloat(document.getElementById('calciumGluconate').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(caGluconateValue)) {
        alert("Please enter valid numbers for weight and Calcium Gluconate.");
        return;
    }

    if ((caGluconateValue < 0.3 || caGluconateValue > 4) && caGluconateValue !== 0) {
        alert("Warning: Calcium Gluconate range is 0.3-4 mmol/kg.");
        
    }

    // Calculate the Calcium Gluconate volume
    var caGluconateVolume = (caGluconateValue * weight);

    // Display the result
    document.getElementById('cadose').textContent = `${caGluconateVolume.toFixed(2)} meq`;
}
function calculatecavolume() {
  
    // Get the weight and entered value for Ca Gluconate
    var weight = parseFloat(document.getElementById('weight').value);
    var caGluconateValue = parseFloat(document.getElementById('calciumGluconate').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(caGluconateValue)) {
        alert("Please enter valid numbers for weight and calcium gluconate.");
        return;
    }

    // Calculate the Calcium Gluconate volume
    var caGluconateVolume = (caGluconateValue * weight) / 0.465;

    // Display the result
    document.getElementById('cavolume').textContent = ` ${caGluconateVolume.toFixed(2)} ml`;
}
function calculatecavolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the weight and entered value for Ca Gluconate
    var weight = parseFloat(document.getElementById('weight').value);
    var caGluconateValue = parseFloat(document.getElementById('calciumGluconate').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(caGluconateValue)|| isNaN(aquLength)|| isNaN(vitalipids)|| isNaN(tpn)|| isNaN(intra)) {
        alert("Please enter all required fields are filled out.");
        return;
    }

    // Calculate the Calcium Gluconate volume
    var caGluconateVolume = roundToTwo((caGluconateValue * weight) / 0.465);


    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);

    var capriming = roundToTwo(caGluconateVolume * primingFactor);

    // Display the result
    document.getElementById('cavolumepriming').textContent = ` ${capriming} ml`;
}


function calculatecatotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the weight and entered value for Ca Gluconate
    var weight = parseFloat(document.getElementById('weight').value);
    var caGluconateValue = parseFloat(document.getElementById('calciumGluconate').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(caGluconateValue)|| isNaN(aquLength)|| isNaN(vitalipids)|| isNaN(tpn)|| isNaN(intra)) {
        alert("Please enter all required fields are filled out.");
        return;
    }

    // Calculate the Calcium Gluconate volume
    var caGluconateVolume = roundToTwo((caGluconateValue * weight) / 0.465);


    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);

    var catotal1 = roundToTwo((caGluconateVolume * primingFactor) + caGluconateVolume);

    // Display the result
    document.getElementById('catotal').textContent = ` ${catotal1} ml`;
}



//////Mg

function calculateMgsulphateDose() {
    
    // Get the weight and entered value for Ca Gluconate
    var weight = parseFloat(document.getElementById('weight').value);
    var mgValue = parseFloat(document.getElementById('mg').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(mgValue)) {
        alert("Please enter valid numbers for weight and magnesium sulphate.");
        return;
    }

    if ((mgValue < 0.15 || mgValue > 1) && mgValue !== 0) {
        alert("Warning: Magnesium Sulphate range is 0.15-1 mmol/kg.");
        
    }

    // Calculate the Calcium Gluconate volume
    var mgdose1 = (mgValue * weight);

    // Display the result
    document.getElementById('mgsulphatedose').textContent = `${mgdose1.toFixed(2)} mmol`;

}
function calculateMgsulphatevolume() {
  
    // Get the weight and entered value for Ca Gluconate
    var weight = parseFloat(document.getElementById('weight').value);
    var mgValue = parseFloat(document.getElementById('mg').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(mgValue)) {
        alert("Please enter valid numbers for weight and magnesium sulphate.");
        return;
    }

    // Calculate the Calcium Gluconate volume
    var mgdose1 = (mgValue * weight * 2) / 4.06;

    // Display the result
    document.getElementById('mgsulphatevolume').textContent = `${mgdose1.toFixed(2)} ml`;
}

function calculateMgsulphatevolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the weight and entered value for Ca Gluconate
    var weight = parseFloat(document.getElementById('weight').value);
    var mgValue = parseFloat(document.getElementById('mg').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); // Lipid tube length in cm
    var intra = parseFloat(document.getElementById('intralipids').value);
    
    // Validate inputs
    if (isNaN(weight) || isNaN(mgValue)|| isNaN(aquLength)|| isNaN(vitalipids)|| isNaN(tpn)|| isNaN(intra)) {
        alert("Please ensure all required fields are filled out.");
        return;
    }
    
    // Calculate the Calcium Gluconate volume
    var mgdose1 = roundToTwo((mgValue * weight * 2) / 4.06);
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    var mgpriming1 = roundToTwo(mgdose1 * primingFactor);
    
    // Display the result
    document.getElementById('Mgsulphatevolumepriming').textContent = `${mgpriming1} ml`;

}

function calculateMgsulphatetotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
        
    var weight = parseFloat(document.getElementById('weight').value);
    var mgValue = parseFloat(document.getElementById('mg').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value); 
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
        
        // Validate inputs
    if (isNaN(weight) || isNaN(mgValue)|| isNaN(aquLength)|| isNaN(vitalipids)|| isNaN(tpn)|| isNaN(intra)) {
        alert("Please ensure all required fields are filled out.");
        return;
        }
        
        // Calculate the Calcium Gluconate volume
    var mgdose1 = roundToTwo((mgValue * weight * 2) / 4.06);
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    
    var mgtotal1 = roundToTwo((mgdose1 * primingFactor) + mgdose1);
        
        // Display the result
    document.getElementById('mgsulphatetotal').textContent = `${mgtotal1} ml`;
}

/////heparin

function calculateheparinDose() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var heparinValue = parseFloat(document.getElementById('heparin').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var weight = parseFloat(document.getElementById('weight').value);


    // Validate inputs
    if (isNaN(heparinValue) || isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra)|| isNaN(weight)) {
        alert("Please ensure that all required fields are filled out");
        return;
    }

    if ((heparinValue < 0.5 || heparinValue > 1) && heparinValue !== 0) {
        alert("Warning: Heparin range is 0.5-1 units/ml.");
        
    }

    // Calculate Heparin Volume
    
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);


    var heparinVolume = roundToTwo(heparinValue * aquaVolume1);

    // Display the result
    document.getElementById('heparindose').textContent = `${heparinVolume} units`;
}



function calculateheparinvolume() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var heparinValue = parseFloat(document.getElementById('heparin').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var weight = parseFloat(document.getElementById('weight').value);


    // Validate inputs
    if (isNaN(heparinValue) || isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra)|| isNaN(weight)) {
        alert("Please ensure that all required fields are filled out");
        return;
    }

    // Calculate Heparin Volume
    
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

   

    var heparinVolume1 = roundToTwo((heparinValue * aquaVolume1) / 100);

    // Display the result
    document.getElementById('heparinvolume').textContent = `${heparinVolume1} ml`;
}


function calculateheparinvolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var heparinValue = parseFloat(document.getElementById('heparin').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);
    var weight = parseFloat(document.getElementById('weight').value);


    // Validate inputs
    if (isNaN(heparinValue) || isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra)|| isNaN(aquLength)|| isNaN(weight)) {
        alert("Please ensure that all required fields are filled out");
        return;
    }

    // Calculate Heparin Volume
    
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);

    var heparinVolume = roundToTwo((heparinValue * aquaVolume1)/100);

    

    var heparinpriming = roundToTwo(heparinVolume * primingFactor);

    // Display the result
    document.getElementById('heparinvolumepriming').textContent = `${heparinpriming} ml`;
}
function calculateheparintotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var heparinValue = parseFloat(document.getElementById('heparin').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);
    var weight = parseFloat(document.getElementById('weight').value);


    // Validate inputs
    if (isNaN(heparinValue) || isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra)|| isNaN(aquLength)|| isNaN(weight)) {
        alert("Please ensure that all required fields are filled out");
        return;
    }

    // Calculate Heparin Volume
    
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    var heparinVolume = roundToTwo((heparinValue * aquaVolume1)/100);

    

    var heparintotal = roundToTwo((heparinVolume * primingFactor) + heparinVolume);

    // Display the result
    document.getElementById('heparintotal').textContent = `${heparintotal} ml`;
}

/////multi

function calculateMultiDose() {
    
    
    // Retrieve the value entered for Multivitamins
    var multivitaminsValue = parseFloat(document.getElementById('multivitamins').value);

    // Retrieve the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(multivitaminsValue) || isNaN(weight)) {
        alert("Please ensure that both Multivitamins value and Weight are valid.");
        return;
    }

    // Calculate Multivitamins Volume
    var multivitaminsVolume = multivitaminsValue * weight;

    // Display the result
    document.getElementById('multiedose').textContent = `${multivitaminsVolume.toFixed(2)} ml`;
}



function calculatemultivolume() {
   
    
    // Retrieve the value entered for Multivitamins
    var multivitaminsValue = parseFloat(document.getElementById('multivitamins').value);

    // Retrieve the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(multivitaminsValue) || isNaN(weight)) {
        alert("Please ensure that both Multivitamins value and Weight are valid.");
        return;
    }

    // Calculate Multivitamins Volume
    var multivitaminsVolume = multivitaminsValue * weight;

    // Display the result
    document.getElementById('multivolume').textContent = `${multivitaminsVolume.toFixed(2)} ml`;
}


function calculatemultivolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    
    // Retrieve the value entered for Multivitamins
    var multivitaminsValue = parseFloat(document.getElementById('multivitamins').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);



    // Validate inputs
    if (isNaN(multivitaminsValue) || isNaN(weight)|| isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra)|| isNaN(aquLength)) {
        alert("Please ensure that both Multivitamins value and Weight are valid.");
        return;
    }

    // Calculate Multivitamins Volume
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    var multivitaminsVolume = roundToTwo(multivitaminsValue * weight);

    var multipriming = roundToTwo(multivitaminsVolume * primingFactor);

    // Display the result
    document.getElementById('multivolumepriming').textContent = `${multipriming} ml`;
}



function calculatemultitotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Retrieve the value entered for Multivitamins
    var multivitaminsValue = parseFloat(document.getElementById('multivitamins').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);



    // Validate inputs
    if (isNaN(multivitaminsValue) || isNaN(weight)|| isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra)|| isNaN(aquLength)) {
        alert("Please ensure that both Multivitamins value and Weight are valid.");
        return;
    }

    // Calculate Multivitamins Volume
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    var multivitaminsVolume =roundToTwo( multivitaminsValue * weight);

    var multitotal1 = roundToTwo((multivitaminsVolume * primingFactor) + multivitaminsVolume);

    // Display the result
    document.getElementById('multitotal').textContent = `${multitotal1} ml`;
}


////trace

function calculatetraceDose() {
   
    // Retrieve the value entered for Trace Elements
    var traceElementsValue = parseFloat(document.getElementById('traceElements').value);

    // Retrieve the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(traceElementsValue) || isNaN(weight)) {
        alert("Please ensure that both Trace Elements value and Weight are valid.");
        return;
    }

    if (traceElementsValue < 0 || traceElementsValue > 4) {
        alert("Warning: Trace Elements range is 0-4 mg/kg.");
        
    }

    // Calculate Trace Elements Volume
    var traceElementsVolume = traceElementsValue * weight;

    // Display the result
    document.getElementById('tracedose').textContent = `${traceElementsVolume.toFixed(2)} ml`;

}

function calculatetracevolume() {
  
    // Retrieve the value entered for Trace Elements
    var traceElementsValue = parseFloat(document.getElementById('traceElements').value);

    // Retrieve the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(traceElementsValue) || isNaN(weight)) {
        alert("Please ensure that both Trace Elements value and Weight are valid.");
        return;
    }

    // Calculate Trace Elements Volume
    var traceElementsVolume = traceElementsValue * weight;

    // Display the result
    document.getElementById('tracevolume').textContent = `${traceElementsVolume.toFixed(2)} ml`;
}
function calculatetracevolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Retrieve the value entered for Trace Elements
    var traceElementsValue = parseFloat(document.getElementById('traceElements').value);

    // Retrieve the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);






    // Validate inputs
    if (isNaN(traceElementsValue) || isNaN(weight)|| isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra)|| isNaN(aquLength)) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }

    // Calculate Trace Elements Volume
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    var traceElementsVolume = roundToTwo(traceElementsValue * weight);

    var tracepriming = roundToTwo(traceElementsVolume * primingFactor);

    // Display the result
    document.getElementById('tracevolumepriming').textContent = `${tracepriming} ml`;
}
function calculatetracetotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Retrieve the value entered for Trace Elements
    var traceElementsValue = parseFloat(document.getElementById('traceElements').value);

    // Retrieve the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var aquLength = parseFloat(document.getElementById('aqulength').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    
    
    
    
    
    
    // Validate inputs
    if (isNaN(traceElementsValue) || isNaN(weight)|| isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra)|| isNaN(aquLength)) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }
    
    // Calculate Trace Elements Volume
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    // Calculate Priming Factor
    var primingFactor = roundToTwo(aquLength / aquaVolume1);
    var traceElementsVolume = roundToTwo(traceElementsValue * weight);
    
    var tracetotal1 = roundToTwo((traceElementsVolume * primingFactor) + traceElementsVolume);
    
        // Display the result
    document.getElementById('tracetotal').textContent = `${tracetotal1} ml`;
}


/////sterile

function calculatesterilevolume() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var weight = parseFloat(document.getElementById('weight').value);
    var tpn = parseFloat(document.getElementById('tpn').value);
    var intra = parseFloat(document.getElementById('intralipids').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var amino1 = parseFloat(document.getElementById('aminoacids').value);
    var dex1 = parseFloat(document.getElementById('dextrose').value);
    var nacl1 = parseFloat(document.getElementById('nacl').value);
    var naacetate1 = parseFloat(document.getElementById('sodiumAcetate').value);
    var naphosphate1 = parseFloat(document.getElementById('sodiumPhosphate').value);
    var kcl = parseFloat(document.getElementById('potassiumChloride').value);
    var caglu = parseFloat(document.getElementById('calciumGluconate').value);
    var mgsulphate = parseFloat(document.getElementById('mg').value);
    var heparin1 = parseFloat(document.getElementById('heparin').value);
    var multi = parseFloat(document.getElementById('multivitamins').value);
    var trace = parseFloat(document.getElementById('traceElements').value);
    var sodiumChlorideStrength = document.getElementById('sodiumChlorideStrength').value;
    var brand = document.getElementById('sodiumPhosphateBrand').value;

    // Validate all inputs
    if (
        isNaN(weight) || isNaN(tpn) || isNaN(intra) || isNaN(vitalipids) ||
        isNaN(amino1) || isNaN(dex1) || isNaN(nacl1) || isNaN(naacetate1) || isNaN(naphosphate1) ||
        isNaN(kcl) || isNaN(caglu) || isNaN(mgsulphate) || isNaN(heparin1) || 
        isNaN(multi) || isNaN(trace) || sodiumChlorideStrength === "" || !brand
    ) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }

    // Calculate lipid and aqueous volumes
    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight) * 100/ 20);
    var lipidVolume = roundToTwo (vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    

    // Component Volumes
    var aminovol = roundToTwo((amino1 * weight * 100) / 10);
    var dexvol = roundToTwo((dex1 * weight * 100) / 50);
    var naacetatevol = roundToTwo((naacetate1 * weight) / 2);
    var kclvol = roundToTwo((kcl * weight) / 2);
    var cavol = roundToTwo((caglu * weight) / 0.465);
    var mgvol = roundToTwo((mgsulphate * weight * 2) / 4.06);
    var heparinvol = roundToTwo((heparin1 * aquaVolume1) / 100);
    var tracevol = roundToTwo(trace * weight);
    var multivol = roundToTwo(multi * weight);

    // Sodium Chloride Volume
    var naclResult;
    if (sodiumChlorideStrength === "20%") {
        naclResult = roundToTwo((nacl1 * weight) / 3.244);
    } else if (sodiumChlorideStrength === "3%") {
        naclResult = roundToTwo((nacl1 * weight) / 0.519);
    } else {
        alert("Please select a valid Strength for Sodium Chloride.");
        return;
    }

    // Sodium Phosphate Volume
    var divisor = (brand === "Glucophos") ? 1 : (brand === "Phocytan") ? 0.66 : null;
    if (divisor === null) {
        alert("Invalid brand selected.");
        return;
    }
    var sodiumPhosphateVolume = roundToTwo((naphosphate1 * weight) / divisor);

    // Total Component Volume
    var totalComponentVolume = roundToTwo(aminovol + dexvol + naclResult + naacetatevol + kclvol + cavol + mgvol +
        heparinvol + tracevol + sodiumPhosphateVolume + multivol);

    // Sterile Water Volume
    var sterileWaterVolume = roundToTwo(aquaVolume1 - totalComponentVolume);

    // Display the result
    document.getElementById('sterilevolume').textContent = `${sterileWaterVolume} ml`;
}



function calculatesterilevolumepriming() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var weight = parseFloat(document.getElementById('weight').value);
    var tpn = parseFloat(document.getElementById('tpn').value);
    var intra = parseFloat(document.getElementById('intralipids').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var amino1 = parseFloat(document.getElementById('aminoacids').value);
    var dex1 = parseFloat(document.getElementById('dextrose').value);
    var nacl1 = parseFloat(document.getElementById('nacl').value);
    var naacetate1 = parseFloat(document.getElementById('sodiumAcetate').value);
    var naphosphate1 = parseFloat(document.getElementById('sodiumPhosphate').value);
    var kcl = parseFloat(document.getElementById('potassiumChloride').value);
    var caglu = parseFloat(document.getElementById('calciumGluconate').value);
    var mgsulphate = parseFloat(document.getElementById('mg').value);
    var heparin1 = parseFloat(document.getElementById('heparin').value);
    var multi = parseFloat(document.getElementById('multivitamins').value);
    var trace = parseFloat(document.getElementById('traceElements').value);
    var sodiumChlorideStrength = document.getElementById('sodiumChlorideStrength').value;
    var brand = document.getElementById('sodiumPhosphateBrand').value;
    var aqalength = document.getElementById('aqulength').value;
    
        // Validate all inputs
    if (
        isNaN(weight) || isNaN(tpn) || isNaN(intra) || isNaN(vitalipids) ||
        isNaN(amino1) || isNaN(dex1) || isNaN(nacl1) || isNaN(naacetate1) || isNaN(naphosphate1) ||
        isNaN(kcl) || isNaN(caglu) || isNaN(mgsulphate) || isNaN(heparin1)|| isNaN(aqalength) || 
        isNaN(multi) || isNaN(trace) || sodiumChlorideStrength === "" || !brand
        ) {
        alert("Please ensure that all required fields are filled out.");
            return;
        }
    
        // Calculate lipid and aqueous volumes
        var totalVolume = roundToTwo(tpn * weight);
        var vitavolume = roundToTwo(vitalipids * weight);
        var intravolume = roundToTwo((intra * weight) * 100/ 20);
        var lipidVolume = roundToTwo (vitavolume + intravolume);
        var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);
    
        
    
        // Component Volumes
        var aminovol = roundToTwo((amino1 * weight * 100) / 10);
        var dexvol = roundToTwo((dex1 * weight * 100) / 50);
        var naacetatevol = roundToTwo((naacetate1 * weight) / 2);
        var kclvol = roundToTwo((kcl * weight) / 2);
        var cavol = roundToTwo((caglu * weight) / 0.465);
        var mgvol = roundToTwo((mgsulphate * weight * 2) / 4.06);
        var heparinvol = roundToTwo((heparin1 * aquaVolume1) / 100);
        var tracevol = roundToTwo(trace * weight);
        var multivol = roundToTwo(multi * weight);
    
        // Sodium Chloride Volume
        var naclResult;
        if (sodiumChlorideStrength === "20%") {
            naclResult = roundToTwo((nacl1 * weight) / 3.244);
        } else if (sodiumChlorideStrength === "3%") {
            naclResult = roundToTwo((nacl1 * weight) / 0.519);
        } else {
            alert("Please select a valid Strength for Sodium Chloride.");
            return;
        }
    
        // Sodium Phosphate Volume
        var divisor = (brand === "Glucophos") ? 1 : (brand === "Phocytan") ? 0.66 : null;
        if (divisor === null) {
            alert("Invalid brand selected.");
            return;
        }
        var sodiumPhosphateVolume = roundToTwo((naphosphate1 * weight) / divisor);
    
        // Total Component Volume
        var totalComponentVolume = roundToTwo(aminovol + dexvol + naclResult + naacetatevol + kclvol + cavol + mgvol +
            heparinvol + tracevol + sodiumPhosphateVolume + multivol);
    
    var primingFactor = roundToTwo(aqalength / aquaVolume1);
    
        // Sterile Water Volume
    var sterileWaterVolume = roundToTwo(aquaVolume1 - totalComponentVolume);
    var sterilepriming = roundToTwo(sterileWaterVolume * primingFactor);
    
        // Display the result
    document.getElementById('sterilevolumepriming').textContent = `${sterilepriming} ml`;
    }
    



function calculatesteriletotal() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var weight = parseFloat(document.getElementById('weight').value);
    var tpn = parseFloat(document.getElementById('tpn').value);
    var intra = parseFloat(document.getElementById('intralipids').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var amino1 = parseFloat(document.getElementById('aminoacids').value);
    var dex1 = parseFloat(document.getElementById('dextrose').value);
    var nacl1 = parseFloat(document.getElementById('nacl').value);
    var naacetate1 = parseFloat(document.getElementById('sodiumAcetate').value);
    var naphosphate1 = parseFloat(document.getElementById('sodiumPhosphate').value);
    var kcl = parseFloat(document.getElementById('potassiumChloride').value);
    var caglu = parseFloat(document.getElementById('calciumGluconate').value);
    var mgsulphate = parseFloat(document.getElementById('mg').value);
    var heparin1 = parseFloat(document.getElementById('heparin').value);
    var multi = parseFloat(document.getElementById('multivitamins').value);
    var trace = parseFloat(document.getElementById('traceElements').value);
    var sodiumChlorideStrength = document.getElementById('sodiumChlorideStrength').value;
    var brand = document.getElementById('sodiumPhosphateBrand').value;
    var aqalength = document.getElementById('aqulength').value;
    
        // Validate all inputs
    if (
        isNaN(weight) || isNaN(tpn) || isNaN(intra) || isNaN(vitalipids) ||
        isNaN(amino1) || isNaN(dex1) || isNaN(nacl1) || isNaN(naacetate1) || isNaN(naphosphate1) ||
        isNaN(kcl) || isNaN(caglu) || isNaN(mgsulphate) || isNaN(heparin1)|| isNaN(aqalength) || 
        isNaN(multi) || isNaN(trace) || sodiumChlorideStrength === "" || !brand
        ) {
        alert("Please ensure that all required fields are filled out.");
            return;
        }
    
        // Calculate lipid and aqueous volumes
        var totalVolume = roundToTwo(tpn * weight);
        var vitavolume = roundToTwo(vitalipids * weight);
        var intravolume = roundToTwo((intra * weight) * 100/ 20);
        var lipidVolume = roundToTwo (vitavolume + intravolume);
        var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);
    
        
    
        // Component Volumes
        var aminovol = roundToTwo((amino1 * weight * 100) / 10);
        var dexvol = roundToTwo((dex1 * weight * 100) / 50);
        var naacetatevol = roundToTwo((naacetate1 * weight) / 2);
        var kclvol = roundToTwo((kcl * weight) / 2);
        var cavol = roundToTwo((caglu * weight) / 0.465);
        var mgvol = roundToTwo((mgsulphate * weight * 2) / 4.06);
        var heparinvol = roundToTwo((heparin1 * aquaVolume1) / 100);
        var tracevol = roundToTwo(trace * weight);
        var multivol = roundToTwo(multi * weight);
    
        // Sodium Chloride Volume
        var naclResult;
        if (sodiumChlorideStrength === "20%") {
            naclResult = roundToTwo((nacl1 * weight) / 3.244);
        } else if (sodiumChlorideStrength === "3%") {
            naclResult = roundToTwo((nacl1 * weight) / 0.519);
        } else {
            alert("Please select a valid Strength for Sodium Chloride.");
            return;
        }
    
        // Sodium Phosphate Volume
        var divisor = (brand === "Glucophos") ? 1 : (brand === "Phocytan") ? 0.66 : null;
        if (divisor === null) {
            alert("Invalid brand selected.");
            return;
        }
        var sodiumPhosphateVolume = roundToTwo((naphosphate1 * weight) / divisor);
    
        // Total Component Volume
        var totalComponentVolume = roundToTwo(aminovol + dexvol + naclResult + naacetatevol + kclvol + cavol + mgvol +
            heparinvol + tracevol + sodiumPhosphateVolume + multivol);
    

    var primingFactor = roundToTwo(aqalength / aquaVolume1);
    
        // Sterile Water Volume
    var sterileWaterVolume = roundToTwo(aquaVolume1 - totalComponentVolume);
    var sterilepriming = roundToTwo((sterileWaterVolume * primingFactor) + sterileWaterVolume);
    
        // Display the result
    document.getElementById('steriletotal').textContent = `${sterilepriming} ml`;
    }
    






















function calculateGIR() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Retrieve the entered Dextrose value (g/kg)
    var dextroseValueText = document.getElementById('dextrose').value;
    var dextroseValue = parseFloat(dextroseValueText);

    // Retrieve the entered Weight (kg)
    var weightText = document.getElementById('weight').value;
    var weight = parseFloat(weightText);

    // Validate input
    if (isNaN(dextroseValue) || dextroseValue <= 0) {
        alert("Please enter a valid Dextrose value.");
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    // Calculate GIR (simplified: weight cancels out)
    var gir = (roundToTwo(dextroseValue) * 1000) / 1440;

    // Display the result
    document.getElementById('girResult').textContent = `${gir.toFixed(2)} mg/kg/min`;
}

function calculateDextroseConcentration() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Retrieve the entered Dextrose value (g/kg)
    var dextroseValueText = document.getElementById('dextrose').value;
    var dextroseValue = parseFloat(dextroseValueText);

    // Retrieve the entered Weight (kg)
    var weightText = document.getElementById('weight').value;
    var weight = parseFloat(weightText);

    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);

    

    // Validate input
    if (isNaN(dextroseValue) || isNaN(weight)|| isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra) ) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }

    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight * 100) / 20);
    var lipidVolume = roundToTwo(vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);

    

    // Calculate Dextrose Concentration
    var dexConcentration = (roundToTwo(dextroseValue) * weight) / roundToTwo(aquaVolume1) * 100;

    // Display the result
    document.getElementById('dexconcResult').textContent = `${dexConcentration.toFixed(2)} %`;
}

function calculateInfusionRate() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    
    var weight = parseFloat(document.getElementById('weight').value);
    var tpn = parseFloat(document.getElementById('tpn').value); 
    var intra = parseFloat(document.getElementById('intralipids').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);

    // Validate input
    if (isNaN(weight)|| isNaN(vitalipids) || isNaN(tpn)|| isNaN(intra)) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }

    var totalVolume = roundToTwo(tpn * weight);
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight * 100) / 20);
    var lipidVolume = roundToTwo(vitavolume + intravolume);
    var aquaVolume1 = roundToTwo(totalVolume - lipidVolume);


    // Calculate Infusion Rate (in ml/hr)
    var infusionRate = roundToTwo(aquaVolume1 / 24);

    // Display the result
    document.getElementById('infusionResult').textContent = `${infusionRate} ml/hr`;
}



function calculateInfusionRatelipid() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    var weight = parseFloat(document.getElementById('weight').value);
    var intra = parseFloat(document.getElementById('intralipids').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);

    // Validate input
    if (isNaN(weight)|| isNaN(vitalipids) || isNaN(intra)) {
        alert("Please ensure that all required fields are filled out.");
        return;
    }

    
    var vitavolume = roundToTwo(vitalipids * weight);
    var intravolume = roundToTwo((intra * weight * 100) / 20);
    var lipidVolume = roundToTwo(vitavolume + intravolume);
    


    // Calculate Infusion Rate (in ml/hr)
    var infusionRate = roundToTwo(lipidVolume / 24);

    // Display the result
    document.getElementById('infusionResultlipid').textContent = `${infusionRate} ml/hr`;


}

function calculateTotalCalories() {
    function roundToTwo(value) {
        return Math.round(value * 100) / 100;
    }
    // Get the values entered by the user for amino acids, intralipids, and dextrose
    var aminoAcidsValue = parseFloat(document.getElementById('aminoacids').value);
    var intralipidsValue = parseFloat(document.getElementById('intralipids').value);
    var dextroseValue = parseFloat(document.getElementById('dextrose').value);

    // Get the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate input
    if (isNaN(aminoAcidsValue) || isNaN(intralipidsValue) || isNaN(dextroseValue) || isNaN(weight)) {
        alert("Please make sure all fields are filled with valid numbers.");
        return;
    }

    // Calculate Total Calories
    var totalCalories = roundToTwo(aminoAcidsValue * weight * 4) + roundToTwo(intralipidsValue * weight * 9) + roundToTwo(dextroseValue * weight * 3.4);

    // Display the result
    document.getElementById('caloriesResult').textContent = `${totalCalories.toFixed(2)} kcal/day`;
}



async function exportToExcelWithCalculatedValues() {
    // Extract calculated values
    const aminodose1 = parseFloat(document.getElementById('aminodose').textContent) || 0;
    const aminovolume1 = parseFloat(document.getElementById('aminovolume').textContent) || 0;
    const aminodvolumepriming1 = parseFloat(document.getElementById('aminovolumepriming').textContent) || 0;
    const aminototal1 = parseFloat(document.getElementById('aminototal').textContent) || 0;

    const dexdose1 = parseFloat(document.getElementById('dexdose').textContent) || 0;
    const dexvolume1 = parseFloat(document.getElementById('dexvolume').textContent) || 0;
    const dexvolumepriming1 = parseFloat(document.getElementById('dexvolumepriming').textContent) || 0;
    const dextotal1 = parseFloat(document.getElementById('dextotal').textContent) || 0;

    const nacldose1 = parseFloat(document.getElementById('nacldose').textContent) || 0;
    const naclvolume1 = parseFloat(document.getElementById('naclvolume').textContent) || 0;
    const naclvolumepriming1 = parseFloat(document.getElementById('naclvolumepriming').textContent) || 0;
    const nacltotal1 = parseFloat(document.getElementById('nacltotal').textContent) || 0;


    const naacetatedose1 = parseFloat(document.getElementById('nacetatedose').textContent) || 0;
    const naacetatevolume1 = parseFloat(document.getElementById('nacetatevolume').textContent) || 0;
    const naacetatevolumepriming1 = parseFloat(document.getElementById('nacetatevolumepriming').textContent) || 0;
    const naacetatetotal1 = parseFloat(document.getElementById('nacetatetotal').textContent) || 0;


    const naphosphatedose1 = parseFloat(document.getElementById('naphosphatedose').textContent) || 0;
    const naphosphatevolume1 = parseFloat(document.getElementById('naphosphatevolume').textContent) || 0;
    const naphosphatevolumepriming1 = parseFloat(document.getElementById('naphosphatevolumepriming').textContent) || 0;
    const naphosphatetotal1 = parseFloat(document.getElementById('naphosphatetotal').textContent) || 0;



    const kcldose1 = parseFloat(document.getElementById('kcldose').textContent) || 0;
    const kclvolume1 = parseFloat(document.getElementById('kclvolume').textContent) || 0;
    const kclvolumepriming1 = parseFloat(document.getElementById('kclvolumepriming').textContent) || 0;
    const kcltotal1 = parseFloat(document.getElementById('kcltotal').textContent) || 0;

    const cadose1 = parseFloat(document.getElementById('cadose').textContent) || 0;
    const cavolume1 = parseFloat(document.getElementById('cavolume').textContent) || 0;
    const cavolumepriming1 = parseFloat(document.getElementById('cavolumepriming').textContent) || 0;
    const catotal1 = parseFloat(document.getElementById('catotal').textContent) || 0;

    const mgsulphatedose1 = parseFloat(document.getElementById('mgsulphatedose').textContent) || 0;
    const mgsulphatevolume1 = parseFloat(document.getElementById('mgsulphatevolume').textContent) || 0;
    const mgsulphatevolumepriming1 = parseFloat(document.getElementById('Mgsulphatevolumepriming').textContent) || 0;
    const mgsulphatetotal1 = parseFloat(document.getElementById('mgsulphatetotal').textContent) || 0;

    const heparindose1 = parseFloat(document.getElementById('heparindose').textContent) || 0;
    const heparinvolume1 = parseFloat(document.getElementById('heparinvolume').textContent) || 0;
    const heparinvolumepriming1 = parseFloat(document.getElementById('heparinvolumepriming').textContent) || 0;
    const heparintotal1 = parseFloat(document.getElementById('heparintotal').textContent) || 0;

    const multidose1 = parseFloat(document.getElementById('multiedose').textContent) || 0;
    const multivolume1 = parseFloat(document.getElementById('multivolume').textContent) || 0;
    const multivolumepriming1 = parseFloat(document.getElementById('multivolumepriming').textContent) || 0;
    const multitotal1 = parseFloat(document.getElementById('multitotal').textContent) || 0;

    const tracedose1 = parseFloat(document.getElementById('tracedose').textContent) || 0;
    const tracevolume1 = parseFloat(document.getElementById('tracevolume').textContent) || 0;
    const tracevolumepriming1 = parseFloat(document.getElementById('tracevolumepriming').textContent) || 0;
    const tracetotal = parseFloat(document.getElementById('tracetotal').textContent) || 0;

    
    const sterilvolume1 = parseFloat(document.getElementById('sterilevolume').textContent) || 0;
    const sterilvolumepriming1 = parseFloat(document.getElementById('sterilevolumepriming').textContent) || 0;
    const steriletotal1 = parseFloat(document.getElementById('steriletotal').textContent) || 0;


    const vitadose1 = parseFloat(document.getElementById('vitadose').textContent) || 0;
    const vitavolume1 = parseFloat(document.getElementById('vitavolume').textContent) || 0;
    const vitavolumepriming1 = parseFloat(document.getElementById('vitavolumepriming').textContent) || 0;
    const vitatotal1 = parseFloat(document.getElementById('vitatotal').textContent) || 0;

    const intraedose1 = parseFloat(document.getElementById('intradose').textContent) || 0;
    const intravolume1 = parseFloat(document.getElementById('intravolume').textContent) || 0;
    const intravolumepriming1 = parseFloat(document.getElementById('intravolumepriming').textContent) || 0;
    const intratotal1 = parseFloat(document.getElementById('intratotal').textContent) || 0;

    const request1 = document.getElementById('request').value || "N/A";
    const calculated1 = document.getElementById('calculated').value || "N/A";
    const checked1 = document.getElementById('checked').value || "N/A";
    const prep1 = document.getElementById('prep').value || "N/A";
    const ex1 = document.getElementById('ex').value || "N/A";


    
    const lipidvolumepriming1 = parseFloat(document.getElementById('lipidvolumepriming').textContent) || 0;
    const lipidtotal1 = parseFloat(document.getElementById('lipidtotal').textContent) || 0;

    const patientName1 = document.getElementById('patientName').value || "N/A";
    var dayValue = document.getElementById('day').value || 'N/A';
    const mrn1 = document.getElementById('mrn').value.trim() || "N/A";
    const weight1 = document.getElementById('weight').value || "N/A";
    const rout1 = document.getElementById('rout').value || "N/A";
    const tpn1 = document.getElementById('tpn').value || "N/A";
    const aquaVolume1 = parseFloat(document.getElementById('aqvolume').textContent) || 0;
    const lipidsvolume1 = parseFloat(document.getElementById('lipidvolume').textContent) || 0;
    const tpnResult1 = parseFloat(document.getElementById('tpnResult').textContent) || 0;
    const aqvolumepriming1 = parseFloat(document.getElementById('aqvolumepriming').textContent) || 0;
    const aqtotal1 = parseFloat(document.getElementById('aqtotal').textContent) || 0;
    const Lipidfactor1 = parseFloat(document.getElementById('Lipidfactor').textContent) || 0;
    const Aqfactor1 = parseFloat(document.getElementById('Aqfactor').textContent) || 0;


    const girResult11 = parseFloat(document.getElementById('girResult').textContent) || 0;
    const dexconcResult1 = parseFloat(document.getElementById('dexconcResult').textContent) || 0;
    const caloriesResult1 = parseFloat(document.getElementById('caloriesResult').textContent) || 0;
    const infusionResult1 = parseFloat(document.getElementById('infusionResult').textContent) || 0;
    const infusionResultlipid1 = parseFloat(document.getElementById('infusionResultlipid').textContent) || 0;

    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('TPN Data');

    // Add Data
    worksheet.addRow([`TPN Worksheet Day- ${dayValue}`]);
    worksheet.addRow(['Patient Name', patientName1]);
    worksheet.addRow(['Weight',  `${weight1}kg`]);
    worksheet.addRow(['MRN', mrn1]);
    worksheet.addRow(['Rout', rout1]);
    worksheet.addRow(['TPN Intake 50-180ml/Kg/Day', `${tpn1}ml/kg/day`]);
    worksheet.addRow(['Total Aquous Solution/day', `${aquaVolume1}ml/day`]);
    worksheet.addRow(['Total Lipids/day', `${lipidsvolume1}ml/day`]);
    worksheet.addRow(['Total Infused PN/day', `${tpnResult1}ml/day`]);
    worksheet.addRow(['Aqueous Bag']);
    worksheet.addRow(['Ingredient', 'Range', 'Dose/24hr', 'Volume','Priming Factor' ,'Volume for Priming', 'Total Volume']);
    worksheet.addRow(['Amino Acids', '1-4.-5g', `${aminodose1}gm`, `${aminovolume1}ml`, `${Aqfactor1}`,`${aminodvolumepriming1}ml`, `${aminototal1}ml`]);
    worksheet.addRow(['Dextrose 50%', '5-16g', `${dexdose1}gm`, `${dexvolume1}ml`, `${Aqfactor1}`,`${dexvolumepriming1}ml`, `${dextotal1}ml`]);
    worksheet.addRow(['Sodium Chloride ', '1-8mmol', `${nacldose1}mmol`, `${naclvolume1}ml`, `${Aqfactor1}`,`${naclvolumepriming1}ml`, `${nacltotal1}ml`]);
    worksheet.addRow(['Sodium Acetate', '0-4mmol', `${naacetatedose1}mmol`, `${naacetatevolume1}ml`, `${Aqfactor1}`,`${naacetatevolumepriming1}ml`, `${naacetatetotal1}ml`]);
    worksheet.addRow(['Sodium Phosphate', '0.3-4mmol', `${naphosphatedose1}mmol`, `${naphosphatevolume1}ml`, `${Aqfactor1}`,`${naphosphatevolumepriming1}ml`, `${naphosphatetotal1}ml`]);
    worksheet.addRow(['Potassium Chloride', '1-4mmol', `${kcldose1}mmol`, `${kclvolume1}ml`, `${Aqfactor1}`,`${kclvolumepriming1}ml`, `${kcltotal1}ml`]);
    worksheet.addRow(['Calcium Gluconate', '0.3-4mmol', `${cadose1}meq`, `${cavolume1}ml`, `${Aqfactor1}`,`${cavolumepriming1}ml`, `${catotal1}ml`]);
    worksheet.addRow(['Magnesium Sulphate', '0.15-1mmol', `${mgsulphatedose1}mmol`, `${mgsulphatevolume1}ml`, `${Aqfactor1}`,`${mgsulphatevolumepriming1}ml`, `${mgsulphatetotal1}ml`]);
    worksheet.addRow(['Heparin', '0.5-1units/ml', `${heparindose1}units`, `${heparinvolume1}ml`, `${Aqfactor1}`,`${heparinvolumepriming1}ml`, `${heparintotal1}ml`]);
    worksheet.addRow(['Multivitamines', '-', `${multidose1}ml`, `${multivolume1}ml`, `${Aqfactor1}`,`${multivolumepriming1}ml`, `${multitotal1}ml`]);
    worksheet.addRow(['Trace Elements', '0-4mg', `${tracedose1}ml`, `${tracevolume1}ml`, `${Aqfactor1}`,`${tracevolumepriming1}ml`, `${tracetotal}ml`]);
    worksheet.addRow(['Sterile Water', '-', '-' , `${sterilvolume1}ml`, `${Aqfactor1}`,`${sterilvolumepriming1}ml`, `${steriletotal1}ml`]);
    worksheet.addRow(['', '', '' , '', '', '','']);
    worksheet.addRow(['','','Total Aqueous',`${aquaVolume1}ml`, `${Aqfactor1}`,`${aqvolumepriming1}ml`, `${aqtotal1}ml`]);
    worksheet.addRow([]);
    worksheet.addRow([]);
    worksheet.addRow([]);
    worksheet.addRow(['Lipid Bag']);
    worksheet.addRow(['Ingredient', 'Range', 'Dose/24hr', 'Volume', 'Priming Factor','Volume for Priming', 'Total Volume']);
    worksheet.addRow(['Intralipids', '0.5-4g', `${intraedose1}gm` , `${intravolume1}ml`, `${Lipidfactor1}`,`${intravolumepriming1}ml`, `${intratotal1}ml`]);
    worksheet.addRow(['Vitalipids', '0-4ml' , `${vitadose1}ml`, `${vitavolume1}ml`, `${Lipidfactor1}`,`${vitavolumepriming1}ml`, `${vitatotal1}ml`]);
    worksheet.addRow(['', '', '' , '', '', '', '']);
    worksheet.addRow(['','', 'Total Lipids',`${lipidsvolume1}ml`, `${Lipidfactor1}ml`,`${lipidvolumepriming1}ml`, `${lipidtotal1}ml`]);
    worksheet.addRow(['GIR', `${girResult11} mg/kg/min`, '', '', '','Requested By',request1]);
    worksheet.addRow(['Dextrose Concentration', `${dexconcResult1}%`, '', '', '', 'Calculated By', calculated1 ]);
    worksheet.addRow(['Osmolarity', '-', '', '', '', 'Checked By', checked1 ]);
    worksheet.addRow(['Total Calories', `${caloriesResult1}kcal/day`, '', '', '','Prep. Date',prep1  ]);
    worksheet.addRow(['Aqueous Infusion Rate ', `${infusionResult1}ml/hr`, '', '', '','Ex. Date',ex1  ]);
    worksheet.addRow(['Lipid Infusion Rate ', `${infusionResultlipid1}ml/hr`]);
    worksheet.addRow([]);
    worksheet.addRow([]);
    worksheet.addRow([]);
    worksheet.addRow([]);
   

   


   


   


    
    
    

    // Apply Styles
   

            worksheet.eachRow((row, rowNumber) => {
                row.eachCell((cell) => {
                    // Apply Times New Roman font to all cells
                    cell.font = {
                        name: 'Times New Roman ',
                        size: 8,
                        bold: true, // Default font size for all
                    };
                    cell.border = {
                        top: { style: 'thin', color: { argb: '000000' } },     // Top border
                        left: { style: 'thin', color: { argb: '000000' } },    // Left border
                        bottom: { style: 'thin', color: { argb: '000000' } },  // Bottom border
                        right: { style: 'thin', color: { argb: '000000' } },   // Right border
                    };
            
                    // Styling specific rows
            
                    if (rowNumber === 1) {
                        cell.font = { 
                            bold: true,
                            color: { argb: 'FF0000' }, // Red font
                            size: 15,
                            name: 'Times New Roman ', 
                        };
                        cell.alignment = {
                            horizontal: 'center', // Center horizontally
                            vertical: 'middle',   // Center vertically
                        };

                        worksheet.mergeCells('A1:' + worksheet.getColumn(worksheet.columnCount).letter + '1');
                    }
                    if (rowNumber === 24 || rowNumber === 33) {
                        cell.fill = {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: 'D3D3D3' } // Light gray background
                        };
                    }
            
                    if (rowNumber === 10 || rowNumber === 29 ) {
                        cell.font = { 
                            name: 'Times New Roman',
                            bold: true, 
                            color: { argb: 'FF0000' },
                            size: 10 // Large font size
                        };
                        
                    }

                    if (rowNumber === 11 || rowNumber === 30) {
                        cell.fill = {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: 'FF90EE90' } // Light green color in ARGB format
                        };
                        cell.font = {
                            name: 'Times New Roman',
                            bold: true, // Make text bold
                            size: 8
                        };
                    }
            
                    
                });
            });

            worksheet.mergeCells('A26:G28'); // Merges cells from A1 to F1
            const mergedCell = worksheet.getCell('A26');
            mergedCell.value = 'Heparin: Take 0.2ml from heparin vial. Add to 9.8ml SWFI to form 10ml of 100units/ml';
            mergedCell.alignment = { horizontal: 'center', vertical: 'middle' }; // Center the text
            mergedCell.font = { name: 'Times New Roman ', size: 10, bold: true, color:{ argb: 'FF0000' }  }; // Apply styling
            

            worksheet.mergeCells('A45:E45'); // Merges cells from A1 to F1
            const mergedCell2 = worksheet.getCell('A45');
            mergedCell2.value = '#This sheet is exported from the Web-based Neonatal TPN Calculator [Doaa Ramadan]';
            mergedCell2.font = { name: 'Times New Roman ', size: 6, bold: true  };
            

            worksheet.mergeCells('C35:E39');
            const lipidCell = worksheet.getCell('C35');
            lipidCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' } }; // Grey background

            worksheet.mergeCells('A33:G33');
            const vCell = worksheet.getCell('A33');
            vCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' } };


            worksheet.mergeCells('A24:G24');
            const eCell = worksheet.getCell('A24');
            eCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' } };

            worksheet.mergeCells('A25:B25');
            const mCell = worksheet.getCell('A25');
            mCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' } };

            worksheet.mergeCells('A34:B34');
            const nCell = worksheet.getCell('A34');
            nCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' } };





            

            mergedCell.border = {
                top: { style: 'thin', color: { argb: '000000' } },    // Top border (black)
                left: { style: 'thin', color: { argb: '000000' } },   // Left border (black)
                bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border (black)
                right: { style: 'thin', color: { argb: '000000' } },  // Right border (black)
            };
            
    // Adjust column widths
    worksheet.columns = [
        { width: 20 },
        { width: 10 },
        { width: 10 },
        { width: 10 },
        { width: 10 },
        { width: 13 },
        { width: 10 },
    ];

    

    // Export the workbook
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `TPN_${mrn1.replace(/[\/:*?"<>|]/g, '_')}.xlsx`;

    link.click();
}

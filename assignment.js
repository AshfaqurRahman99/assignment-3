// https://github.com/AshfaqurRahman99/assignment-3
// converting kilometer value to meter
// 1 kilometer = 1000 meter;
function kilometerToMeter(kilometer){
    if(kilometer >= 0){
        var result = kilometer * 1000;   
        return result;
    }
    else{
        console.log("kilometer never carry negative value");
    }  
}
console.log(kilometerToMeter(5));

// electronic devices buying budget
// watch price = 50 (per piece), mobile price = 100 (per piece), laptop price = 500 (per piece)
function budgetCalculator(watch, mobile, laptop){
    if(watch >= 0 && mobile >= 0 && laptop >= 0){
        var totalPrice = watch * 50 + mobile * 100 + laptop * 500;
        return totalPrice;
    }
    else if(watch < 0 && mobile >= 0 && laptop >= 0){
        var totalPrice = mobile * 100 + laptop * 500;
        return totalPrice;
        console.log("Number Of Watch always a positive value");
    }
    else if(watch >= 0 && mobile < 0 && laptop >= 0){
        var totalPrice = watch * 50 + laptop * 500;
        return totalPrice;
        console.log("Number Of Mobile always a positive value");
    }
    else if(watch >= 0 && mobile >= 0 && laptop < 0){
        var totalPrice = watch * 50 + mobile * 100 ;
        return totalPrice;
        console.log("Number Of Laptop always a positive value");
    }
    else{
        console.log("Countable element never carry negative number")
    }
}
console.log(budgetCalculator(4,5,6));

// Calculating Hotel cost
// 1-10 days = 100 tk; 11-20 days = 80 tk; more than 20 days = 50 tk;
function hotelCost(days){
    if(days > 0 && days <= 10){
        var cost = days * 100;
    return cost;
    }
    else if(days > 10 && days <= 20){
        var newDays = days -10; 
        var cost =  1000 + newDays * 80;  
        return cost;
    }
    else if(days >= 21){
        var newDays = days -20; 
        var cost =  1800 + newDays * 50;  
        return cost;
    }
    else{
        console.log("Days never carry a negative value")
    }
}
console.log(hotelCost(21));

// find out the large string from an array
function megaFriend(names) {
    let largeName = names [0];

    for (let i = 0; i < names.length; i++) {
        let element = names [i];
        if( element.length > largeName.length){
            largeName = element;
        }
    } 
    return largeName;    
}

let friends = [ 'mofijur', 'rafiq', 'abdur-rahman', 'korimon-banu-alia','asif']
// declare an array containing friends name
let largestName = megaFriend(friends);
console.log(largestName);



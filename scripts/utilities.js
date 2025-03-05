// this function convert str into num 
function strToNum(id){
    const num = document.getElementById(id).innerText;
    const conNum = parseFloat(num);
    return conNum;
};

// this function decrise number by one 
function decNum(id){
    const num = strToNum(id);
    const dec = num - 1;
    document.getElementById(id).innerText = dec;
  
}
// this function increse number by one 
function incNum(id){
    const num = strToNum(id);
    const inc = num + 1;
    document.getElementById(id).innerText = inc;   
}

// this function set todays date dynamically.
function setDateUpdate(){
    const today = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const update = today.toLocaleDateString('en-us', options);
    return update;
   }

function getDay(){
    const dd = new Date();
    const dayes = dd.toLocaleDateString('en-us',{weekday: 'short'});
    return dayes;
}


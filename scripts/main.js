// let's control all complite buttons 
const btns = document.getElementsByClassName('btn-complite');
for(let item of btns){
    item.addEventListener('click' , function(){
       const dec = decNum('decrice-number');
       const inc = incNum('inc-number');
       alert('Board updated successfully');
       item.setAttribute('disabled', true)
    })
}

// set today's date in calender section 
document.getElementById('date').innerText = setDateUpdate();
// set day in calender 
document.getElementById('day').innerText = getDay();

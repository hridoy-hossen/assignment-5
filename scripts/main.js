// let's control all complite buttons 
const btns = document.getElementsByClassName('btn-complite');
for(let item of btns){
    item.addEventListener('click' , function(){
       const dec = decNum('decrice-number');
       const inc = incNum('inc-number');
       alert('Board updated successfully');
       item.setAttribute('disabled', true);
       const date = new Date();
       const time = date.toLocaleTimeString()
       const history = document.getElementById('History');
       const p = document.createElement('p');
       p.classList.add('p-2','pt-0','bg-gray-100' ,'m-2','text-center' ,'rounded-xl');
       p.innerText =`You haved complete the task Add Dark Mode at ${time}` ;
       history.appendChild(p);
    })
}

document.getElementById('theme-btnn').addEventListener('click', function(){

})

// set today's date in calender section 
document.getElementById('date').innerText = setDateUpdate();
// set day in calender 
document.getElementById('day').innerText = getDay();

// handle themes
const colors = ['dark-bg','blue-bg','pink-bg','gray-bg','purpul-bg'];
let index = 0;
document.getElementById('theme-btnn').addEventListener('click',function(){
    const root = document.getElementById('root-ele');
    root.classList.remove(...colors);
    root.classList.add(colors[index]);
    index = (index + 1) % colors.length;
})

// switch page main page to blog page..
document.getElementById('discover').addEventListener('click', function(){
    window.location.href='blog.html'
})


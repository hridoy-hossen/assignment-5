// let's control all complite buttons 
const btns = document.getElementsByClassName('btn-complite');
for(let item of btns){
    item.addEventListener('click' , function(e){
       const dec = decNum('decrice-number');
       const inc = incNum('inc-number');
       alert('Board updated successfully');
       lastAlert('decrice-number');
       item.setAttribute('disabled', true);
      
       
    })
}
// this code select heading tag of all boxes...
const titleBtns = document.querySelectorAll('.btn-complite'); //select all btns using there classes..
for(let title of titleBtns){ // declear for loop to select every element one by one. 
    title.addEventListener("click", function(event){  // set addEventListener 
        const parent = event.target.parentNode.parentNode.parentNode.parentNode; // propagate nodes and select main parent node of box
        const headingg = parent.querySelector('h1').innerText; // select h1 heading 
        const date = new Date();
        const time = date.toLocaleTimeString()
        const history = document.getElementById('History');
        const p = document.createElement('p');
        p.classList.add('p-2','pt-0','bg-gray-100' ,'m-2','text-center' ,'rounded-xl');
        p.innerText =`You haved complete the ${headingg} at ${time} ` ;
        history.appendChild(p);
    })
}



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


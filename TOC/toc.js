const tcEle = document.getElementsByClassName('tcEle')[0];
// console.log(tcEle);
const headings = document.querySelectorAll('h1,h2,h3');


headings.forEach((heading)=>{
    const li = document.createElement('li');
    li.innerHTML = heading.innerHTML;
    tcEle.appendChild(li);
})
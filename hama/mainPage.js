let names=['mohamed hajri','amina amdouni']
let ages=[33,25]
let jobs=['Construction worker ','Doctor']
 names=['mohamed hajri','amina amdouni']
contain=document.createElement('div')
document.body.appendChild(contain)
contain.style.textAlign='center'
function ele(names,ages,jobs){
    let card=document.createElement('div')
    let title=document.createElement('h2')
    let age=document.createElement('p')
    let job=document.createElement('p')
    let img=document.createElement('img')
    

    
    let head=document.createTextNode(names)
    let ageTxt=document.createTextNode(ages)
    let jobA=document.createTextNode(jobs)
img.src='images/boy.jpg'
title.appendChild(head)
age.appendChild(ageTxt)
job.appendChild(jobA)

card.style.width='200px'
card.style.background= '#1135'
card.style.padding= '10px'
card.style.margin='2px'
card.style.display='inline-block'



img.style.width='100%'



card.appendChild(title)
card.appendChild(jobA)
card.appendChild(age)
card.appendChild(img)
contain.appendChild(card)
}
for(var i=0;i<19;i++)
{
    ele(names[i],ages[i],jobs[i])
}

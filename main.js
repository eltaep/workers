let addbtns = document.querySelectorAll('.add')
let removebtns = document.querySelectorAll('.remove')
let removeworkerbtns = document.querySelectorAll('.removeworker')
let resetbtns = document.querySelectorAll('.reset')
let numofdayesall = document.querySelectorAll('.days')
let allcontent = document.querySelector('.allcontent');
let input =document.querySelector('input')
let submit=document.querySelector('.submit')
submit.addEventListener('click',()=>{
    if(input.value!=''){
        let worker=document.createElement('div')
        worker.classList.add('worker')
        let namedayes=document.createElement('div')
        namedayes.classList.add('namedayes')
        let name=document.createElement('div')
        name.classList.add('name')
        let days=document.createElement('div')
        days.classList.add('days')
        name.innerHTML=input.value
        days.innerHTML=0;
        namedayes.appendChild(name)
        namedayes.appendChild(days)
        let btns=document.createElement('div')
        btns.classList.add('btns')
        let add=document.createElement('div')
        let remove=document.createElement('div')
        let reset=document.createElement('div')
        let removeworker=document.createElement('div')
        add.innerHTML='إضافة يوم'
        remove.innerHTML='خصم يوم'
        reset.innerHTML='تصفية الحساب'
        removeworker.innerHTML='رفد العامل'
        add.classList.add('add')
        remove.classList.add('remove')
        reset.classList.add('reset')
        removeworker.classList.add('removeworker')
        btns.appendChild(add)
        btns.appendChild(remove)
        btns.appendChild(reset)
        btns.appendChild(removeworker)
        worker.appendChild(namedayes)
        worker.appendChild(btns)
        document.querySelector('.my-workers').appendChild(worker)
        localStorage.savecontent=allcontent.innerHTML
        input.value='';
        add.addEventListener('click',()=>{
            days.innerHTML=Number(days.innerHTML)+1
            localStorage.savecontent=allcontent.innerHTML
            
        })
        remove.addEventListener('click',()=>{
            days.innerHTML=Number(days.innerHTML)-1
            localStorage.savecontent=allcontent.innerHTML
            
        })
        reset.addEventListener('click',()=>{
            days.innerHTML=0
            localStorage.savecontent=allcontent.innerHTML
            
        })
        removeworker.addEventListener('click',()=>{
            removeworker.parentElement.parentElement.remove()
            localStorage.savecontent=allcontent.innerHTML
            
        })

    }
})

addbtns.forEach((btnadd, index) => {
    btnadd.addEventListener('click', () => {
        numofdayesall[index].innerHTML
            = Number(numofdayesall[index].innerHTML) + 1
        localStorage.savecontent = allcontent.innerHTML;
    })
})
removebtns.forEach((btnadd, index) => {
    btnadd.addEventListener('click', () => {
        numofdayesall[index].innerHTML
            = Number(numofdayesall[index].innerHTML) - 1
    })
})

resetbtns.forEach((btnadd, index) => {
    btnadd.addEventListener('click', () => {
        numofdayesall[index].innerHTML
            = 0;
    })
})
removeworkerbtns.forEach((removeworkerbtn) => {
    removeworkerbtn.addEventListener('click', () => {
        removeworkerbtn.parentElement.parentElement.remove()


    })
})
if (localStorage.savecontent) {
    let div = localStorage.savecontent;
    allcontent.innerHTML = div
    document.querySelectorAll('.add').
        forEach((storageaddbtn, index) => {
            storageaddbtn.addEventListener('click', () => {
                document.querySelectorAll('.days')[index].innerHTML =
                    Number(document.querySelectorAll('.days')[index]
                        .innerHTML) + 1
                        localStorage.savecontent=allcontent.innerHTML
            })
        })


        document.querySelectorAll('.remove').
        forEach((storageaddbtn, index) => {
            storageaddbtn.addEventListener('click', () => {
                document.querySelectorAll('.days')[index].innerHTML =
                    Number(document.querySelectorAll('.days')[index]
                        .innerHTML) - 1
                        localStorage.savecontent=allcontent.innerHTML
            })
        })
        document.querySelectorAll('.reset').
        forEach((storageaddbtn, index) => {
            storageaddbtn.addEventListener('click', () => {
                document.querySelectorAll('.days')[index]
                .innerHTML =0
                    
                        localStorage.savecontent=allcontent.innerHTML
            })
        })
        document.querySelectorAll('.removeworker').
        forEach((storageaddbtn, index) => {
            storageaddbtn.addEventListener('click', () => {
                storageaddbtn.parentElement.parentElement.remove()
                        localStorage.savecontent=allcontent.innerHTML
            })
        })
}


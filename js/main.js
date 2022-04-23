import { SCREEN, $$className, $id, $ } from './functions/utils.js'

let result = 0
let haltState = true
let initialState =true
let operation
let decimalState = 0

const list  = $('.menu > .hidden__responsive').classList

$id('burger').addEventListener('click',()=>{
    list.contains('hidden__responsive')? list.replace('hidden__responsive','roll'): list.replace('roll','hidden__responsive')
 
})

const operations = {
    plus: (prev, next)=>prev+next,
    minus: (prev, next)=>prev-next,
    times: (prev,next)=>prev*next,
    division: (prev,next) =>prev/next,
    sqrt:(prev)=>prev**(1/2)
}

Object.freeze(operations)

$$className('number-button')
    .forEach(e=>e.addEventListener('click', event =>{
        if(haltState) {
            SCREEN.value = 0;
            haltState = false
        }
        if(decimalState){
            SCREEN.value=(
                SCREEN.value*10**decimalState
                +Number(event
                    .target
                    .attributes['button-value']
                    .value)
                )/10**decimalState
            decimalState++
        }else{
            SCREEN.value=SCREEN.value*10+Number(event.target.attributes['button-value'].value)
        }
    }))

const idOperation = [
    'plus',
    'minus',
    'times',
    'division'
]

Object.freeze(idOperation)

idOperation.forEach(id =>$id(id).addEventListener('click', event =>{
    
        decimalState = 0
        haltState = true
        result = initialState? Number(SCREEN.value): operations[operation](Number(result),Number(SCREEN.value))
        operation = event.target.attributes["button-value"].value    
        initialState=false
        SCREEN.value = result
    
}))

$id('sqrt').addEventListener('click', ()=>{
    SCREEN.value=operations.sqrt(SCREEN.value)
    initialState = true
})


$id('equals').addEventListener('click', ()=>{
    decimalState = 0
    haltState=true
    result = operations[operation](result,Number(SCREEN.value))
    SCREEN.value = result
    initialState= true
})

$id("clear").addEventListener('click', ()=>{
    initialState= true
    result = 0
    decimalState = 0
    SCREEN.value=0
})

$id('dot').addEventListener('click', ()=>{
    decimalState = 1

})
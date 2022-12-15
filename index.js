const express = require('express')
const app = express()

let f = function (req, res){
    res.send('Hello World')
}

app.get('/', f) 

app.get('/array',(req, res) =>{
    console.log(req.body)
    //req.body.array.reduce(acc, val) => acc + val, 0
    res.send(req.body)
})


 app.get('/add',(req, res) =>{
    console.log(req.query)
        //gets query of "num"
        let input = req.query;

        //converts to numbers
        input = input.num.map(Number);
        let total = 0;
        input.map((n)=>{
                total = total + n;
        })


    res.json({
        data: total
    })
})


app.get('/product',(req, res) =>{
    console.log(req.query)
        //gets query of "num"
        let input = req.query;

        //converts to numbers
        input = input.num.map(Number);
        let total = 1;
        input.map((n)=>{
                total = total * n;
        })
    
    res.json({
        data: total
    })
})

app.get('/evens',(req, res) =>{
    console.log(req.query)
        //gets query of "num"
        let input = req.query;

        //converts to numbers
        input = input.num.map(Number);
        let output = [];

        input.map((n)=>{
            console.log(n, n/2)
                if ( (n%2) === 0){
                    //even
                    output.push(n);
                }
        })


    res.json({
        data: output
    })
})

app.get('/minmax',(req, res) =>{
    console.log(req.query)
        //gets query of "num"
        let input = req.query;

        //converts to numbers
        input = input.num.map(Number);

        //sort by ascending
        input = input.sort((a,b)=>{return a - b});

        console.log(input);

        let output = {
            min: input[0], //get first
            max: input[input.length - 1] //get last
        };

     

    res.json({
        data: output
    })
})

app.get('/sort',(req, res) =>{
    console.log(req.query)
        //gets query of "num"
        let input = req.query;
        let ascending = req.query.ascending

        //converts to numbers
        input = input.num.map(Number);

        //sort by ascending
        if(ascending == 'true'){
            input = input.sort((a,b)=>{return a - b});
            
        } else {
            input = input.sort((a,b)=>{return b-a});
        }

        console.log(input);

        let output = input;
     

    res.json({
        data: output
    })
})

console.log("Hey, it's working")


app.get('/target',(req, res) =>{
    console.log(req.query)
        //gets query of "num"
        let input = req.query;
        let target = parseInt( req.query.target );

        //converts to numbers
        input = input.num.map(Number);
        let find = false;

        input.sort((a,b) => {
            if(a+b == target){
                find = true;
            }
        })

        let output = {
            found: find
        }
        

    res.json({
        data: output
    })
})





app.listen(3000)
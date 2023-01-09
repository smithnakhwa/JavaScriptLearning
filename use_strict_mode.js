
    'use strict'
    //Undeclared variable is not allowed
    message="hello";// throws an error
     //undeclared object are not allowed
    person={ 
        first_name:"smith",
    }//trows an error
    
    //Deleting ab object are not allowed .
    let person={ 
        first_name:"smith",
        last_name:"nakhwa"
    }
    //delete person;//throws an error
    function hello(p1,p1){//duplicating a parameter name is not allowed // throws an error
        console.log(`heloo`);
    }
    hello();
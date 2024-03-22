


// ek function jo ek dusra function khata h , callback 

// us wale callback ki vjah se hi tumhara main wala function -- dependent




function test(callback){
    callback();

}

test(()=>{
    console.log("test 1");
    testt(()=>{
        console.log("test 2");
        test(()=>{
            console.log("test 3");
            test(()=>{
                console.log("test 4");
                test(()=>{
                    console.log("test 5");
                    test(()=>{
                        console.log("test 6");
                    })
                })
            })
        })
    })
})


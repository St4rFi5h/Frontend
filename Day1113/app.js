function countdown(){
    let x = 5

    function counter(){
        console.log(x--)

    }
    return counter;
}
const c1 = countdown (1)

c1()
c1()
c1()
c1()
c1()


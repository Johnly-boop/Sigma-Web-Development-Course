// create a business name

function businessName(){
    let m1=`choose from these words:
            1.Crazy
            2.Amazing
            3.Fire`;
    let a=prompt(m1);

    let m2=`Shop Name:
            Engine
            Foods
            Garments`;
    let b=prompt(m2);

    let m3=`Another Word:
            Bros
            Limited
            Hub`;
    let c=prompt(m3);
    let bname=a+" "+b+" "+c;
    console.log(`Your Business Name is: ${bname}`);
}

businessName();
/**
 * Created by BALASUBRAMANIAM on 24/08/2017.
 */
//Ecma standard

class Person
{
    constructor(name,address)
    {
        this.Name=name;
        this.Address=address
    }
}

class Member extends Person
{

    constructor(name,address,type)
    {
        super(name,address);

        this.Type=type;
    }

}

class President extends Member{
    constructor(name,address,type,resp)
    {
        super(name,address,type);

        this.Responsibility=resp;
    }
}


var object =new President('Sanjay','Chennai','gold','Admin');
console.log(object);

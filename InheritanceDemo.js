/**
 * Created by BALASUBRAMANIAM on 24/08/2017.
 */
//javascript std
function Person(name,address)
{
    this.Name=name;
    this.Address=address;
}
function Member(name,address,type)
{
    Person.call(this,name,address);
    this.Type=type;
}
function President(name,address,type,role)
{
    Member.call(this,name,address,type);
    this.Role=role;
}

Member.prototype=new Person()
President.prototype=new Member()
obj=new President("Arun","Chennai","Gold","Admin")
console.log(obj.Address,obj.Type,obj.Role)


/*

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
*/
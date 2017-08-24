/**
 * Created by BALASUBRAMANIAM on 24/08/2017.
 */
function Person(name,address)
{
    this.Name=name;
    this.Address=address;
}

function Member(name,address,type)
{
    Person.call(name,address);
    this.Type=type;
}
Member.prototype=new Person()
function President(name,address,type, resp)
{
    Member.call(name,address,type);
    this.Responsibility=resp;
}


President.prototype=new Member()

obj= new President("Sanjay","Bangalore","Gold","Admin")
console.log(obj)



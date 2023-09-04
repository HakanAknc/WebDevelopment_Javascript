// Inheritance (miras alma) kavramı

// this()

// Inheritance ile hayatımıza giren kelimeler
// super : Üst sınıfı gösterir
// super()

// class Person {

//     firstname = "Evren";

//     write(){
//         console.log(this.firstname);
//     }
// }

// class Student extends Person{
    
//     write(){
//         super.write();
//     }
// }

// const student1 = new Student();
// student1.write();


class Person {

    constructor(firstName, lastName, salary){
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }

    writeInfo(){
        console.log(this.firstName,this.lastName,this.salary)
    }
}

class Student extends Person{
    
    constructor(firstName, lastName, salary){
        super(firstName, lastName, salary)
    }

    writeInfo(){
        super.writeInfo();
    }
}

const student1 = new Student("Hakan","Akıncı",10000)
student1.writeInfo();
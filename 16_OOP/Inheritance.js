// Inheritance (Miras alma) kavramı
// super anahtar kelimesi miras alınan sınıfı temsil eder

class Person{
    fistname = "Hakan";

    write(){
        console.log("Person Ana sınf : ",this.fistname);
    }
}

class Student extends Person{  // tam burda extends kelimesi kullanarak miras alıyoruz Person sınıfından

    write1(){  // burdaki write ile yukardaki write aynı değil
        console.log("Student miras aldı Person sınıfından geldi : ", this.fistname)
        super.write();
    }
}

const student1 = new Student()
student1.write1()
student1.write()

//const tinderUser = new Object()
const tinderUser = { }

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com ",
        fullname: {
            userfullname:{
                firstname: "sumit",
                lastname: "parira"

            }
        }
    }
    //console.log(regularUser.fullname?.userfullname.firstname);

    const obj1={1:"a",2: "b"}
    const obj2={3:"a",4: "b"}
    
    //const obj3 = {obj1,obj2}

    //const obj3 = Object.assign({},obj1, obj2)

    const obj3 = {...obj1,...obj2}
    // console.log(obj3);
    // console.log(obj1);

const users = [
    {
        id:1,
        email : "h@gmail.com"
    },{
        id:1,
        email:"to@gmail.com"
    },{

    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



    // const target = {a:1,b:2};
    // const source = {b:4,c:5};

    // const returnedTarget = Object.assign(target,source);

    // console.log(target);

    // console.log(returnedTarget);
    

    // console.log(returnedTarget === target);
    

const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"sumit"
}

// console.log(course.courseInstructor);

const {courseInstructor:instructor} = course
// console.log(courseInstructor);

// {
//     "name":"sumit",
//     "course":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}



]
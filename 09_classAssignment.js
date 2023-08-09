class vehicle{
    name
    colour
    model
    seat
    price
    
    constructor(name,colour,model,seat,price)
    {
    
        this.name=name;
        this.colour=colour;
        this.model=model;
        this.seat=seat;
        this.price=price;
         console.log()

    }
}
const p=new vehicle("Mahindra","White","Bolero",7,700000);

console.log(`Vehicle :${p.name} ${p.colour} ${p.model} ${p.seat} ${p.price} `);
console.log(p);

// function traverse_object(object_person) {
//     for (const key in object_person) {
//         if (Object.hasOwnProperty.call(object_person, key)) {
//             const element = object_person[key];
//             console.log(`${key} ${element}`);
            
//         }
//     }
// }

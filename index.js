let address1 = new Address("Newhope", "Asgard", 98976);
let address2 = new Address("Newhope", "Asgard", 98976);
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2)); // EVEN THEY HAVE THE SAME VALUES, THEY HAVE DIFFERENT MEMORY REFERENCES
console.log(areSame(address1, address3)); //IS TRUE BECAUSE IT POINTS TO THE SAME MEMORY REFERENCE AS address1

//CONSTRUCTOR FUNCTION

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

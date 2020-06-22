import customers from './customers.js'

let person = [{
  thumbnNail: 'https://randomuser.me/api/portraits/men/22.jpg',
  name: 'Myk Edwards',
  email: 'isaiah.edwards@example.com',
  address: '3640 W 6th St'
}]

console.log(person)
function strCap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function listCustomers(personInfo) {
  let customers = document.querySelector('#customer-list');
  //console.log(customerList)
  for (let customer of customer) {
    let newCustomer = document.createElement("li")


    //setup//
    let customerName = document.createTextNode(`Name: ${customer.name.first} ${customer.name.last}`);

    let customerAddress =
      document.createTextNode(` Address: ${customer.location.city}
  ${customer.location.state}
  ${customer.location.postcode}`);

    let dateJoined = document.createTextNode(` Date Joined: ${customer.registered}`);

    let customerDob = document.createTextNode(`Birth Date: ${customer.dob}`)

    let customerEmail = document.createTextNode(`Email: ${customer.email}`);

    let name = document.createElement("h4")
    let address = document.createElement("p")
    //let dateJoined = document.createElement("p")
    let dob = document.createElement("p")
    let email = document.createElement("p")
    name.classList.add("name")
    address.classList.add("adress")
    dob.classList.add("dob")
    date.classList.add("date")
    email.classList.add("email")

  name.append(customerName);
  address.append(customerAddress);
  dob.append(customerDob);
  email.append(customerEmail);

  newCustomer.append(name,address,dob,email)

  let customerImage =document.createElement ("img");
  customerImage.classList.add("br-100", "h5", "w4", "dib", "ba", "b--black-05", "pa2");
    customerImage.src = `${customer.picture.thumbnail}`;

  newCustomer.prepend(customerImage);
    newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
    customerList.append(newCustomer);
  };
}
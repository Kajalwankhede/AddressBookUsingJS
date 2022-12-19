class AddressBook{
    constructor(firstName,lastname,address,city,state,zip,phoneNumber,email) {
        this.firstName =firstName;
        this.lastname = lastname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
        }
       
      

 get firstName() {   // getter and seter methods
    return this._firstName;   // _ to create a seprate value which store name property
    }
   
    set firstName(firstName) {
        let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (firstNameRegex.test(firstName)) {
          this._firstName = firstName;
        }
    
        else{
            throw " First name should start with capital and at least 3 characters";
        }
    }
   
    get lastname() {
    return this._lastname;
    }
   
    set lastname(lastname) {
        let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (lastNameRegex.test(lastname)) {
          this._lastname = lastname;
        }
    
        else{
            throw " Last name should start with capital and at least 3 characters";
        }
    }
   
    get address() {
    return this._address;
    }
   
    set address(address) {
        let addressRegex = RegExp("^[a-zA-Z0-9]{4,}$");
        if (addressRegex.test(address)) {
          this._address = address;
        }
    
        else{
            throw " Address have at least 4 characters";
        }
    }
   
    get city() {
    return this._city;
    }
   
    set city(city) {
        let cityRegex = RegExp("^[a-zA-Z]{4,}$");
        if (cityRegex.test(city)) {
          this._city = city;
        }
    
        else{
            throw " city have at least 4 characters";
        }
    }
   
    get state() {
    return this._state;
    }
   
    set state(state) {
        let stateRegex = RegExp("^[a-zA-Z]{4,}$");
        if (stateRegex.test(state)) {
          this._state = state;
        }
    
        else{
            throw " State have at least 4 characters";
        }
    }
   
    get zip() {
    return this._zip;
    }
   
    set zip(zip) {
        let zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if (zipRegex.test(zip)) {
          this._zip = zip;
        } else {
            throw "Zip should match the valid format";
      }
    }
   
    get phone() {
    return this._phoneNumber;
    }
   
    set phone(phoneNumber) {
            let phoneRegex = RegExp("^[0-9]{1} [0-9]{10}$");
            if (phoneRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
            } else{
             throw "PhoneNumber should match the valid format";
            }
    
        }
    get email() {
    return this._email;
    }
   
    set email(email) {
        let emailRegex = RegExp(
            "^[a-zA-Z0-9]+[_+-.]?[a-zA-Z0-9]*[a-zA-Z0-9]@[a-zA-Z0-9]+([.][a-zA-Z]{2,4})([.][a-zA-Z]{2,4})?$");
            if (emailRegex.test(email)) {
            this._email = email;
            } else{
             throw "Email should match the valid format";
            }
        }
       
        toString() {
        return (
        "\nFirst Name: " +this.firstName + "\nLast Name: " +this.lastname + " \nAddress: " +this.address +" \nCity: " +
        this.city +"\nState: " +this.state +"\nZip: " + this.zip +"\nPhone number: " + this.phoneNumber +" \nEmail: " +
        this.email);
        }
       }
       
       let addressbook = new AddressBook( "Jemy",  "Dcruz","Nagpur", "Nagpur","Maharashtra","440034",
        "91 7218448782", "Kajalwankhede@gmail.com"
       );
       let addressbook1= new AddressBook( "Herry",  "Ritch","Banglore", "Banglore","Karnataka","325460",
       "91 9875463211", "HD@gmail.com"
      );
       
       console.log(addressbook.toString());
       console.log("----------------------------------------------------------------------------")
       console.log(addressbook1.toString());
       console.log("----------------------------------------------------------------------------")

// Created Address book array and added contacts to it 
let addressBookArray = new Array();
try {
 addressBookArray.push( new AddressBook( "Kim","Ritch","Dubai","Dubai","AbuDhabi","365874",
 "91 9434435566","kim@gmail.com"));
 
 console.log("----------------------------------------------------------------------------");
 addressBookArray.push( new AddressBook( "Spectra","Denis","Chennai","Chennai","Karnataka","365874",
 "91 7774435566","spectra@gmail.com"));

} catch (e) {
 console.error(e);
}
console.log("Array :"+addressBookArray.toString());


console.log("----------------------------------------------------------------------------");
function findContact(firstName, lastname) {// search for the person contact
    let contactObj;
    addressBookArray.forEach((contact) => {
      if (contact.firstName == firstName && contact.lastname == lastname) {
        contactObj = contact;
      }
    });
    return contactObj;
  }
  
  function editContact(contactObj, newData, choice) {
    try {
      switch (choice) {
        case "firstName":
          contact.firstName = newData;
          break;
        case "lastname":
          contactObj.lastname = newData;
          break;
        case "address":
          contact.address = newData;
          break;
        case "city":
          contact.city = newData;
          break;
        case "state":
          contact.state = newData;
          break;
        case "zip":
          contact.zip = newData;
          break;
        case "phoneNumber":
          contact.phoneNumber = newData;
          break;
        case "email":
          contact.email = newData;
          break;
        default:
          break;
      }
    } catch (e) {
      console.error("Failed to edit Contact");
    }
  }
  
  let contact = findContact("Kim", "Ritch");
  console.log("Find person PersonDetails: "+contact);// finding person
  console.log("----------------------------------------------------------------------------");
  editContact(contact, "Kimmy", "firstName");
  console.log("Update person PersonDetails: "+contact);
 
function findAndDeleteContact(firstName, lastname) {// Find the contact and delete from the address book
    let contact = findContact(firstName, lastname);
     addressBookArray.pop(contact);
  }
  
  findAndDeleteContact("Spectra", "Denis");
  console.log("----------------------------------------------------------------------------");
  console.log("After Deleting Contact Remaining in Array : "+addressBookArray.toString());
  
  console.log("----------------------------------------------------------------------------");
  let countContact=addressBookArray.reduce((count) => count+=1,0);
  console.log("Getting Count Contact:" +countContact);
  console.log("----------------------------------------------------------------------------");


  //Add Contact to addressbook ensuring no duplicate contact exists
function addContact(contactToBeAdded) {
    if (
      addressBookArray.find(
        (contact) => contact.firstName == contactToBeAdded.firstName
      )
    )
      console.log("Contact Already present");
    else 
    addressBookArray.push(contact);
  }
  let contactToBeAdded = new AddressBook("Kimmy","Thomas","Paris","NorthLondon", "London", "343422",
    "91 8787877890","jerry@gmail.com");
    let contactToBeAdded1 = new AddressBook("Nike","Jones","Paris","NorthLondon", "London", "343422",
    "91 9876543234","nike@gmail.com");
  
  let duplicateCheck = addressBookArray.find(element => element.firstName == contactToBeAdded.firstName);
  if(duplicateCheck != null)
      console.log("Duplicate element cannot be added");
  else
      addressBookArray.push(contactToBeAdded); 

      addressBookArray.push(contactToBeAdded1); 
  
  console.log(" AddressBook: "+addressBookArray.toString());
  

  

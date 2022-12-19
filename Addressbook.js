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
    this._firstName = firstName;
    }
   
    get lastname() {
    return this._lastname;
    }
   
    set lastname(lastname) {
    this._lastname = lastname;
    }
   
    get address() {
    return this._address;
    }
   
    set address(address) {
    this._address = address;
    }
   
    get city() {
    return this._city;
    }
   
    set city(city) {
    this._city = city;
    }
   
    get state() {
    return this._state;
    }
   
    set state(state) {
    this._state = state;
    }
   
    get zip() {
    return this._zip;
    }
   
    set zip(zip) {
    this._zip = zip;
    }
   
    get phone() {
    return this._phoneNumber;
    }
   
    set phone(phoneNumber) {
    this._phoneNumber = phoneNumber;
    }
   
    get email() {
    return this._email;
    }
   
    set email(email) {
    this._email = email;
    }
       
        toString() {
        return (
        "First Name: " +this.firstName + "\nLast Name: " +this.lastname + " \nAddress: " +this.address +" \nCity: " +
        this.city +"\nState: " +this.state +"\nZip: " + this.zip +"\nPhone number: " + this.phoneNumber +" \nEmail: " +
        this.email);
        }
       }
       
       let addressbook = new AddressBook( "Kajal",  "Wankhede","Nagpur", "Nagpur","Maharashtra","440034",
        "7218448782", "Kajalwankhede@gmail.com"
       );
       let addressbook1= new AddressBook( "Honney",  "Disuza","Banglore", "Banglore","Karnataka","325460",
       "9875463211", "HD@gmail.com"
      );
       
       console.log(addressbook.toString());
       console.log("----------------------------------------------------------------------------")
       console.log(addressbook1.toString());
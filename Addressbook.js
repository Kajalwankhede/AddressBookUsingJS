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
        "First Name: " +this.firstName + "\nLast Name: " +this.lastname + " \nAddress: " +this.address +" \nCity: " +
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
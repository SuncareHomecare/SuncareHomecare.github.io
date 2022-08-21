// All properties are strings
export class RequestQuoteForm {
  constructor(
    firstName,
    lastName,
    email,
    phone,
    company,
    startingLocationStreetAddress,
    startingLocationCity,
    startingLocationState,
    startingLocationZipCode,
    destinationLocationStreetAddress,
    destinationLocationCity,
    destinationLocationState,
    destinationLocationZipCode,
    vehicleType,
    additionalInfo
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.startingLocationStreetAddress = startingLocationStreetAddress;
    this.startingLocationCity = startingLocationCity;
    this.startingLocationState = startingLocationState;
    this.startingLocationZipCode = startingLocationZipCode;
    this.destinationLocationStreetAddress = destinationLocationStreetAddress;
    this.destinationLocationCity = destinationLocationCity;
    this.destinationLocationState = destinationLocationState;
    this.destinationLocationZipCode = destinationLocationZipCode;
    this.vehicleType = vehicleType;

    this.company = this.getNonRequiredFormValue(company);
    this.additionalInfo = this.getNonRequiredFormValue(additionalInfo);
  }

  // Non Required form fields can be undefined. In which case return N/A: Non Applicable
  getNonRequiredFormValue(val) {
    return val != "" ? val : "N/A";
  }

  getHtml() {
    var htmlText = `
            <div>
                <h2>Contact Information</h2>
                <p><strong>Name:</strong> ${this.getName()}</p>
                <p><strong>Email Address:</strong> ${this.email}</p>
                <p><strong>Phone Number:</strong> ${this.phone}</p>
                <p><strong>Company Name:</strong> ${this.company}</p>
                <h2>Starting Location</h2>
                <p><strong>Address:</strong> ${this.getStartingLocation()}</p>
                <h2>Destination Location</h2>
                <p><strong>Address:</strong> ${this.getDestinationLocation()}</p>
                <h2>Vehicle Type</h2>
                <p><strong>Vehicle:</strong> ${this.vehicleType}</p>
                <h2>Additional Information</h2>
                <p>${this.additionalInfo}</p>
            </div>
        `;
    return htmlText;
  }

  getPlainText() {
    var plainText = `
    Contact Information\n
    Name: ${this.getName()}\n
    Email Address: ${this.email}\n
    Phone Number: ${this.phone}\n
    Company Name: ${this.company}\n\n
    Starting Location\n
    Address: ${this.getStartingLocation()}\n\n
    Destination Location\n
    Address: ${this.getDestinationLocation()}\n\n
    Vehicle Type\n
    Vehicle: ${this.vehicleType}\n\n
    Additional Information\n
    ${this.additionalInfo}
    `;
    return plainText;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getStartingLocation() {
    return `${this.startingLocationStreetAddress}, ${this.startingLocationCity} ${this.startingLocationState} ${this.startingLocationZipCode}`;
  }

  getDestinationLocation() {
    return `${this.destinationLocationStreetAddress}, ${this.destinationLocationCity} ${this.destinationLocationState} ${this.destinationLocationZipCode}`;
  }
}

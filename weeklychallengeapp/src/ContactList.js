import React, {Component} from 'react';

function Sentence(props) {
  return (
    <div className="sentence">
          You need to contact {props.firstName} {props.lastName} at {props.phoneNumber}
    </div>
  )
}

function eachContact() {
  const contacts = [
    {
      firstName: "Chris",
      lastName: "Hamilton",
      phoneNumber: "980-343-5403"
  },
    {
      firstName: "Victoria",
      lastName: "Echevarria",
      phoneNumber: "704-227-1996"
    },
    {
      firstName: "Mark",
      lastName: "Kroh",
      phoneNumber: "704-223-1202"
    }
  ];

  const contactsArray = contacts.map(function(contact) {
    return <Sentence
    firstName={contact.firstName} lastName={contact.lastName} phoneNumber={contact.phoneNumber}
    />
  })

  return (
    <p>
      {contactsArray}
      <button>Call</button>
    </p>
  )
}
export default eachContact;

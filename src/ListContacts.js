
import React, { Component } from "react";
import "./index.css";
class ListContacts extends React.Component {
    render() {
        console.log(this.props);
        return (

            <ol className="contact-list" >
                {this.props.contacts.map((contact) => (
                    < li className="contact-list-item" key={contact.id} >
                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}></div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <div className="contact-remove">Remove</div>
                    </li>
                ))}
            </ol>

        )
    }
}
export default ListContacts;
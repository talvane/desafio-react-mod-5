import React from 'react';

import './../styles/Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={this.props.avatar} alt="avatar_contact" />
        </span>
        <span className="contact__data">{this.props.name}</span>
        <span className="contact__data">{this.props.phone}</span>
        <span className="contact__data">{this.props.country}</span>
        <span className="contact__data">
          {this.props.admissionDate &&
            new Date(this.props.admissionDate).toLocaleDateString('pt')}
        </span>
        <span className="contact__data">{this.props.company}</span>
        <span className="contact__data">{this.props.department}</span>
      </article>
    );
  }
}

export default Contact;

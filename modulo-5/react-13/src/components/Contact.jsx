import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <article
        className="contact"
        key={this.props.data.id}
        data-testid="contact"
      >
        <span className="contact__avatar">
          <img src={this.props.data.avatar} alt="" />
        </span>
        <span className="contact__data">{this.props.data.name}</span>
        <span className="contact__data">{this.props.data.phone}</span>
        <span className="contact__data">{this.props.data.country}</span>
        <span className="contact__data">{this.props.data.admissionDate}</span>
        <span className="contact__data">{this.props.data.company}</span>
        <span className="contact__data">{this.props.data.department}</span>
      </article>
    );
  }
}

export default Contact;

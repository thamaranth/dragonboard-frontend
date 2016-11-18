import React, { Component } from 'react'
import '../styles/icon.css'

class Icons extends Component {
  render () {
      return (
        <section className="icons">
          <div className="icons-container">
            <h2 className="section-heading"> A DASHBOARD TOOL USED BY THE FASTEST GROWING ORGANIZATIONS </h2>
            <img src="data:image/png;base64,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" alt="Dragonboard customers"/>
          </div>
        </section>
    )
  }
}

export default Icons

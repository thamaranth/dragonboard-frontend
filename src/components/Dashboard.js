import React, { Component } from 'react'
import DashNav from './DashNav'
import LocalNav from './LocalNav'
import DashBody from './DashBody'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-home">
        <DashNav/>
        <LocalNav/>
        <DashBody/>
      </div>
    )
  }
}

export default Dashboard

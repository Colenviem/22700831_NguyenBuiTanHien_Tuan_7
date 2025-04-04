import React, {useEffect, useState} from 'react'
import Card from './Card'
import DetailReport from './DetailReport'
import '../css/Content.css'
import { Route, Routes } from 'react-router-dom'
import Project from './Project'
import Team from './Team'
import Analytic from './Analytic'
import Message from './Message'
import Integration from './Integration'

const Content = ({Overview}) => {

  return (
    <div className="content">
        <Card Card={Overview}></Card>
        <Routes>
            <Route path="/" element={<DetailReport/>}></Route>
            <Route path="/projects" element={<Project />}></Route>
            <Route path="/teams" element={<Team />}></Route>
            <Route path="/analytics" element={<Analytic />}></Route>
            <Route path="/messages" element={<Message />}></Route>
            <Route path="/integrations" element={<Integration />}></Route>
        </Routes>
    </div>
  )
}

export default Content



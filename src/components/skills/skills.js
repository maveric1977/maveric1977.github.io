import React, { useEffect } from 'react'
import styled from 'styled-components'
import SkillTag from './skill-tag'

export default styled(({ className, title = 'Skills', skills = [] }) => (
  <div className={className}>
    <h1>{title}</h1>
    {skills.map(skill => (
      <SkillTag key={skill.name} name={skill.name} />
    ))}
  </div>
))`
  width: 100%;
`

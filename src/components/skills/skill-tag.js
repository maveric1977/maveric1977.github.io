import React from 'react'
import styled from 'styled-components'

const SkillTag = ({ className, name }) => {
  return (
    <div className={className}>
      <span className='skill__tag' htmlFor={`${name}-bar`}>{name}</span>
    </div>
  )
}

SkillTag.displaName = 'SkillTag'

export default styled(SkillTag)`
  display: inline-block;
  .skill__tag {
    font-size: 0.9em;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 5px 10px;
    margin: 2px;
    border-radius: 1em;
    line-height: 2em;
  }
`

import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {"img":"DSC_0466.JPG"  , "intro": "kdfhnacbjhndfa akcbsnhxta jhebrd xqamjxhbr xjxcahsbrdnxjc ahesrbdx acvhdrbnxajhx z" , "tag" : "Satisfied"},
    {"img":"DSC_0466.JPG"  , "intro": "kdfhnacbjhndfa akcbsnhxta jhebrd xqamjxhbr xjxcahsbrdnxjc ahesrbdx acvhdrbnxajhx z" , "tag" : "Dissatisfied"},
    {"img":"DSC_0466.JPG"  , "intro": "kdfhnacbjhndfa akcbsnhxta jhebrd xqamjxhbr xjxcahsbrdnxjc ahesrbdx acvhdrbnxajhx z" , "tag" : "Neutral"}
  ]
  return (
    <div className='h-screen w-full'>
      <Section1 data = {users}/>
      <Section2 />
    </div>
  )
}

export default App

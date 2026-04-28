import React from 'react'
import Card from './components/Card'
import { Car } from 'lucide-react'

const App = () => {
  const data =[
  {
    "company": "Amazon",
    "icon": "https://logo.clearbit.com/amazon.com",
    "post": "Senior UI / UX Designer",
    "type": "Part Time",
    "level": "Senior Level",
    "pay": "120$/hr",
    "location": "Remote",
    "posted": "3 days ago"
  },
  {
    "company": "Google",
    "icon": "https://logo.clearbit.com/google.com",
    "post": "Frontend Developer",
    "type": "Full Time",
    "level": "Mid Level",
    "pay": "90$/hr",
    "location": "Remote",
    "posted": "5 days ago"
  },
  {
    "company": "Microsoft",
    "icon": "https://logo.clearbit.com/microsoft.com",
    "post": "Backend Engineer",
    "type": "Full Time",
    "level": "Senior Level",
    "pay": "110$/hr",
    "location": "USA",
    "posted": "2 days ago"
  },
  {
    "company": "Meta",
    "icon": "https://logo.clearbit.com/meta.com",
    "post": "React Developer",
    "type": "Contract",
    "level": "Mid Level",
    "pay": "100$/hr",
    "location": "Remote",
    "posted": "1 week ago"
  },
  {
    "company": "Apple",
    "icon": "https://logo.clearbit.com/apple.com",
    "post": "iOS Developer",
    "type": "Full Time",
    "level": "Senior Level",
    "pay": "130$/hr",
    "location": "USA",
    "posted": "4 days ago"
  },
  {
    "company": "Netflix",
    "icon": "https://logo.clearbit.com/netflix.com",
    "post": "UI Designer",
    "type": "Part Time",
    "level": "Junior Level",
    "pay": "60$/hr",
    "location": "Remote",
    "posted": "6 days ago"
  },
  {
    "company": "Tesla",
    "icon": "https://logo.clearbit.com/tesla.com",
    "post": "Software Engineer",
    "type": "Full Time",
    "level": "Mid Level",
    "pay": "95$/hr",
    "location": "USA",
    "posted": "2 weeks ago"
  },
  {
    "company": "Spotify",
    "icon": "https://logo.clearbit.com/spotify.com",
    "post": "Full Stack Developer",
    "type": "Contract",
    "level": "Senior Level",
    "pay": "105$/hr",
    "location": "Remote",
    "posted": "3 days ago"
  },
  {
    "company": "Airbnb",
    "icon": "https://logo.clearbit.com/airbnb.com",
    "post": "Product Designer",
    "type": "Full Time",
    "level": "Mid Level",
    "pay": "85$/hr",
    "location": "Remote",
    "posted": "1 day ago"
  },
  {
    "company": "Uber",
    "icon": "https://logo.clearbit.com/uber.com",
    "post": "Data Analyst",
    "type": "Part Time",
    "level": "Junior Level",
    "pay": "50$/hr",
    "location": "Remote",
    "posted": "5 days ago"
  }
]
  return (
    <div className='parent'>
      return(
        {data.map((item) => {
          return <Card  key = {item.company}  image ={item.icon} company={item.company} posted ={item.posted} post={item.post} type={item.type} level={item.level} pay={item.pay} location={item.location}/>
        })}
      )
    </div>
  )
}

export default App



// dates ,mango strawberry orange  watermelon
import React from 'react'
import { Feature } from '../../components';
import './features.css'

const featuresData = [
  {
    title: "Improving end distrusts instantly ",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perspiciatis, totam exercitationem delectus cum enim. Obcaecati assumenda cum qui iste?"
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perspiciatis, totam exercitationem delectus cum enim. Obcaecati assumenda cum qui iste?"
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perspiciatis, totam exercitationem delectus cum enim. Obcaecati assumenda cum qui iste?"
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perspiciatis, totam exercitationem delectus cum enim. Obcaecati assumenda cum qui iste?"
  }
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis veniam eos veritatis, possimus illum harum deserunt.</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title+index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
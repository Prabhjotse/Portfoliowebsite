import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import "./styles.scss";
import {DiApple,DiAndroid} from "react-icons/di";
import { FaDev,FaDatabase } from 'react-icons/fa';


const personalDetails = [
  {
    label: "Name",
    value: "Prabhjot "
  },
  {
    label: "Age",
    value: "19",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "demo@gamil.com"
  },
];

const jobSummary = "I am a front End Developer have an Skills like Html ,css , javascript , react.js , es6 feature and make many project on these stake . I am free to work I can work as a intern to grow my skills ."


const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />} />

      <div className='about__content'>

        <div className='about__content__personalWrapper'>
          <Animate play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}

          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>

          </Animate>
        

        <Animate play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(500px)'
          }}
          end={{
            transform: 'translatex(0px)'
          }}

        >

          <h3 className='personalInformationHeaderText'>Personal Information</h3>
          <ul>
            {
              personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'> {item.label}</span>
                  <span className='value'>{item.value}</span>

                </li>
              ))
            }
          </ul>
        </Animate>
      </div>
      <div className='about__content__servicesWrapper'>
        <div className='about__content__serviceWrapper__innerContent'>
        <div>
          <FaDev size={60} color='var(--yellow-theme-main-color)'/>
        </div>
        <div>
        <DiAndroid size={60} color='var(--yellow-theme-main-color)'/>
        </div>
        <div>
        <FaDatabase size={60} color='var(--yellow-theme-main-color)'/>
        </div>
        <div>
        <DiApple size={60} color='var(--yellow-theme-main-color)'/>
        </div>
      </div>

</div>


    </div>

    </section >
  );
}

export default About;

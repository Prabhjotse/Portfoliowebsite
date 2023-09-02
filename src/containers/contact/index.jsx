import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../components/pageHeaderContent';
import "./styles.scss"

const Contact = () => {
  return (

    <section id='contact' className='contact'>
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />} />


      <div className='contact__content'>
        <h3 className='contact__content__header-text'>Let's Talk</h3>

        <div className='contact__content__form'>
          <div className='contact__content__form__controlswrapper'>

            <div >
              <input required type="text" name='name' className='inputName' />
              <label htmlFor="name" className='nameLabel'>Name</label>
            </div>

            <div>
              <input required type="email" name='email' className='inputEmail' />
              <label htmlFor="email" className='emailLabel'>Email</label>
            </div>


            <div >
              <input required type="description" name='inputdescription' className='inputDescription' />
              <label htmlFor="description" className='descriptionLabel'>Description</label>
            </div>

          </div>
          <button>Submit</button>


        </div>

      </div>

    </section>


  );
}

export default Contact;

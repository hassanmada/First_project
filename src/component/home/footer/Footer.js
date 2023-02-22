
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { faGooglePlus, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer() {
  return (
    <footer>
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' role='button'>
          <FontAwesomeIcon icon={faFacebook} />
          </MDBBtn>


          <MDBBtn outline color="light" floating className='m-1'  role='button'>
            <FontAwesomeIcon icon={faGooglePlus} />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1'  role='button'>
          <FontAwesomeIcon icon={faInstagram} />
          </MDBBtn>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Copyright 2022 © 
         <a className='text-white' style={{textDecoration:'none'}} href='#'>
          Life Tech
        </a>
      </div>
    </MDBFooter>
    </footer>
  );
}
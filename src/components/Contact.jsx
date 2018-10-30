import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

const ICON_SIZE = '6x';

export class Contact extends React.Component {
   render() {
      return (
         //contact me icon section - , codepen, freecodecamp, ,
         //gmail should automatically send you to that outlook interface to email me
         //have a question or want to work together?
         //get in touch
         <div className="aboutContainer">
            <h1>Contact Me!</h1>
            <div className="contactContainer">
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/TaIiaa_"
               >
                  <FontAwesomeIcon
                     style={{ color: '#1da1f2' }}
                     size={ICON_SIZE}
                     icon={['fab', 'twitter']}
                  />
               </a>
               <a
                  href="https://www.linkedin.com/in/jennifer-williams-1b0a54105/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon
                     style={{ color: '#0073b1' }}
                     size={ICON_SIZE}
                     icon={['fab', 'linkedin']}
                  />
               </a>
               <a
                  href="https://codepen.io/Taliaa/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon
                     style={{ color: 'black' }}
                     size={ICON_SIZE}
                     icon={['fab', 'codepen']}
                  />
               </a>
               <a
                  href="https://www.freecodecamp.org/taljjaa"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon
                     style={{ color: 'darkgreen' }}
                     size={ICON_SIZE}
                     icon={['fab', 'free-code-camp']}
                  />
               </a>
               <a
                  href="https://github.com/Taljjaa"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon
                     style={{ color: '#24292e' }}
                     size={ICON_SIZE}
                     icon={['fab', 'github']}
                  />
               </a>
            </div>
            <p>
               Have a question or want to work together contact me via email at
               <a className="mailLink" href="mailto:jenken131@gmail.com">
                  jenken131@gmail.com
               </a>
            </p>
         </div>
      );
   }
}

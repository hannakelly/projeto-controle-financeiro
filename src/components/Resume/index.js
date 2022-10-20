import React from 'react'
import ResumeItem from '../ResumeItem/styles';
import * as C from "./styles";
import {
    FaregArrowltCricleUp,
    FaregArrowltCricleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({income, expense, total}) => {
  return ( <C.Container>
             <ResumeItem
              title="Entradas" 
              Icon={FaregArrowltCricleUp} 
              value ={income}
              />
             <ResumeItem 
             title="Saídas" 
             Icon={FaregArrowltCricleDown}  
             value ={expense} 
             />
             <ResumeItem
              title="Total"
              Icon={FaDollarSign} 
              value ={total}
             />
         </C.Container>
  );
};

export default Resume
import { useWindowScroll } from 'react-use';
import { FaChevronUp } from 'react-icons/fa';

import './styles.css';
import { useState } from 'react';
import { useEffect } from 'react';

function GoToTop() {

 const { y: pageYOffset } = useWindowScroll();
 const [visible, setVisibility] = useState(false);

 useEffect(() => {
  if (pageYOffset > 400) {
   setVisibility(true);
  } else {
   setVisibility(false);
  }
 }, [pageYOffset]);

 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
 }

 if (!visible) {
  return false
 }

 return (
  <>
   <div className="scroll-to-top cursor-pointer" onClick={scrollToTop}>
    <div className="icon"><FaChevronUp /></div>
   </div>
  </>
 )
}

export default GoToTop;
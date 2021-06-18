import loadingAnimation from '../../assets/gif/rolling.gif';

function Loading() {

 return (
  <>
   <section id="testimonials" className="hoc container clear">
    <div className="center btmspace-80 flexColumn">
     <img className="loadingImg" src={loadingAnimation} alt="Carregando"/>
    </div>
   </section>
  </>
 )
};

export default Loading;

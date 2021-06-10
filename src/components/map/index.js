/* eslint-disable jsx-a11y/iframe-has-title */

function Maps() {

 const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.219384315805!2d-46.64952878440612!3d-23.596463768776008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a23ebfaaaab%3A0x77abcbb17cfebe73!2sR.%20Borges%20Lagoa%2C%201080%20-%20509%20-%20Vila%20Clementino%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004038-002!5e0!3m2!1spt-BR!2sbr!4v1623339234964!5m2!1spt-BR!2sbr";

 return (
  <>

   <iframe
    src={mapLink}
    width="100%"
    height="350"
    frameBorder="0"
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
   />

  </>
 )
}

export default Maps;
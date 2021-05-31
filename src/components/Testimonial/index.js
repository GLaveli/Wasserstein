function Testimonial() {
  return (
    <>
      <div class="wrapper row3">
        <section id="testimonials" class="hoc container clear">
          <div class="center btmspace-80">
            <h6 class="heading underline font-x2">O que meus pacientes dizem sobre mim</h6>
          </div>
          <ul class="nospace group btmspace-80">
            <li class="one_third first">
              <blockquote>Magna arcu pharetra eu interdum quis blandit ac orci phasellus sit amet leo lobortis orci imperdiet tempus sed tincidunt arcu in consequat pretium quam lacus rhoncus orci lobortis sagittis</blockquote>
              <figure class="clear"><img class="circle" src="images/demo/60x60.png" alt="" />
                <figcaption>
                  <h6 class="heading">Guilherme Laveli</h6>
                  <em>Paciente</em></figcaption>
              </figure>
            </li>
            <li class="one_third">
              <blockquote>Lorem leo vel ligula vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; quisque urna velit accumsan bibendum scelerisque sed suscipit a velit duis nec ipsum</blockquote>
              <figure class="clear"><img class="circle" src="images/demo/60x60.png" alt="" />
                <figcaption>
                  <h6 class="heading">B. Doe</h6>
                  <em>Médico</em></figcaption>
              </figure>
            </li>
            <li class="one_third">
              <blockquote>Sed urna egestas consectetuer suspendisse lorem ut tortor est lobortis eu venenatis vitae pretium eu felis cras erat est cursus sed dignissim sed euismod in turpis praesent vestibulum hendrerit</blockquote>
              <figure class="clear"><img class="circle" src="images/demo/60x60.png" alt="" />
                <figcaption>
                  <h6 class="heading">C. Doe</h6>
                  <em>Paciente</em></figcaption>
              </figure>
            </li>
          </ul>
          <footer><a class="btn" href="#">Ver mais comantários &raquo;</a></footer>
        </section>
      </div>
    </>
  )
};

export default Testimonial;
import FooterInfo from '../FooterInfo';

const todayData = new Date();
const todayYear = todayData.getFullYear();

const colorOfLove = {
 color: 'red',
 fontSize: '22px'
}
const footerText = 'Laveli </>'

function Footer() {
 return (
  <>
   <FooterInfo />
   <div className="wrapper row5">
    <div id="copyright" className="hoc clear">
     <p className="fl_left">Copyright &copy; {todayYear} - Todos os direitos reservados</p>
     <p className="fl_right">Made with <span style={colorOfLove}>♥</span> by {footerText}</p>
    </div>
   </div>
  </>
 )
};

export default Footer;
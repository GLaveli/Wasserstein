import styled from 'styled-components';

export const Container = styled.form`

h1{
 font: 1.5rem;
 margin-top: 2rem;
 margin-bottom: 1rem;
}

h2{
 color: #363f5f;
 font: 1.5rem;

}

.subText{
 position: relative;
 color: #363f5f;
 font: 13px;
 margin-top 0;
}

p{
 font-size: .90rem
}

.switch{
 position: relative;
 display: inline-block;
 width: 40px;
 height: 20px;

input{
 opacity: 0;
 width: 0;
 height: 0;
}

.slider{
position: absolute;
cursor: pointer;

top: 0;
left: 0;
right: 0;
bottom: 0;

border-radius: 20px;

background: #ccc;
}

.slider::before{
position: absolute;
content: "";
height: 15px;
width: 20px;
left: 4px;
bottom: 3px;
border-radius: 15px;
background: white;
transition: 0.3s;
}

input:checked + .slider{
background: #33CC95;

}

input:checked + .slider::before{
 transform: translateX(12px);
}

}

.modal-imput{
 width: 100%;
 padding: 0 1.5rem;
 height: 4rem;
 border-radius: 0.25rem;
 border: 1px solid #000;
 color: #000;
 background: #e7e9ee;
 font-weight: 400;
 font-size: 1rem;

 & + div{
 margin-top: 1rem;
 margin-bottom: 1rem;
 }
}

.modal-imput-code{
 width: 90px;
 padding: 0 1.5rem;
 height: 2rem;
 border-radius: 0.25rem;
 border: 1px solid #000;
 color: #000;
 background: #e7e9ee;
 font-weight: 400;
 font-size: 1rem;

 & + div{
 margin-top: 1rem;
 margin-bottom: 1rem;
 }
}

.order-selector{
display: flex;
flex-direction: row;

h3{
 margin-left: 10px;
}
}

textarea{
 padding-right: 30px;
 width: 100%;
 padding: 0 1.5rem;
 height: 4rem;
 border-radius: 0.25rem;
 border: 1px solid #000;
 color: #000;
 background: #e7e9ee;
 font-weight: 400;
 font-size: 1rem;
 overflow: hidden;
 margin-top: 0.5rem;

 & + input{
 margin-top: 1rem;

 }
}

.submitButton{
 width: 300px;
 height: 3rem;
 background: #33CC95;
 color: #fff;
 border: 0;
 font-size: 1.3rem;
}
.exitButton{
 width: 300px;
 height: 3rem;
 background: #cc3333;
 color: #fff;
 border: 0;
 font-size: 1.3rem;
}

`;

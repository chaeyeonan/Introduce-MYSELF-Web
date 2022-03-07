import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0;
  border: none;
  background: #ffffff;
  color: #000000;
  cursor: pointer;
  &:focus {
   color: #0000FF;
  }
`

const Contact = () => {
    return(
        <div style={{font:'message-box', textAlign:'center'}}>
            <p style={{margin:'30px', color:'#800080'}}>
            Click the nickname  !
            </p>
            <div style={{float:'left',margin:'20px',padding:'20px',display:'block',height:'250px', width: '200px',border:'1px solid'}}>
                instagram
                <p>
                <img src="img/contact/instagram.png" style={{width:'130px',padding:'15px'}} />
                </p>
                <StyledButton onClick={()=>window.open('https://www.instagram.com/chaeyeonlsv/')}>@chaeyeonlsv</StyledButton>
            </div>
            <div style={{float:'left',margin:'20px',padding:'20px',display:'block',height:'250px', width: '200px',border:'1px solid'}}>
                gitHub
                <p>
                    <img src="img/contact/gitHub.png" style={{width:'130px',padding:'15px'}} />
                </p>
                <StyledButton onClick={()=>window.open('https://github.com/chaeyeonan')}>@chaeyeonan</StyledButton>
            </div>
            <div style={{float:'left',margin:'20px',padding:'20px',display:'block',height:'250px', width: '200px',border:'1px solid'}}>
                tistory
                <p>
                    <img src="img/contact/tistory.png" style={{width:'130px',padding:'15px'}} />
                </p>
                <StyledButton onClick={()=>window.open('https://12yeonii.tistory.com/')}>chaeyeon's note</StyledButton>
            </div>
        </div>
    );
}

export default Contact;
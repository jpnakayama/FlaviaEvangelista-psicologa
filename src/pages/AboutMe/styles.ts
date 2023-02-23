import styled from "styled-components";

export const AboutMeContainer = styled.div`
  height: 100vh;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 2rem;

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

export const AboutMeContent = styled.div`
  border-radius: 10px;
  padding: 2rem 3rem;

  display: flex;
  gap: 5rem;
`

export const AvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 0.5rem;
    text-align: center;

    font-size: 0.8rem;
  }

`

export const AboutMeAvatar = styled.img`
  max-height: 400px;
  border-radius: 10px;
` 

export const AboutMeDescription = styled.div`
  
  h2 {
    display: inline-block;

    margin-bottom: 1rem;
    padding-bottom: 0.5rem;

    border-bottom: 3px solid black;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
    p {
      line-height: 2rem;
    }
  }
`

export const GetInTouchButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 5rem;
  border: none;
  border-radius: 6px;

  color: #fff;

  background: ${props => props.theme["green-700"]};

  width: fit-content;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 1rem;


  :hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`

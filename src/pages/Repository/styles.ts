import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
    color: #A8A8B3;
    transition: 0.2s;

    &:hover{
      color: #666;
    }
  }

  svg{
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header{
    display: flex;
    align-items: center;

    img{
      border-radius: 50%;
      width: 128px;
      height: 128px;
      margin-right: 30px;
    }

    div{
      strong{
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        color: #3D3D4D;
      }
      p{
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #737380;
      }
    }
  }

  ul{
    display: flex;
    list-style: none;
    margin-top: 40px;

    li{
      & + li{
        margin-left:80px;
      }

      strong{
        display: block;
        font-size: 30px;
        color: #3D3D4D;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }

    }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a{
    background: #fff;
    border-radius: 5px;
    width:100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover{
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div{
      margin: 0 16px;
      flex: 1;
      strong{
        font-size: 20px;
        color: #3D3D4D;
      }

      p{
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

      svg{
        margin-left: auto;
        color: #CBCBD6;
      }


  }
`;


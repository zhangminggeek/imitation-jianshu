import styled from 'styled-components';
import logoPic from '../../static/images/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
`;

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
   &.left {
    float: left;
   }
   &.right {
    float: right;
    color: #969696;
   }
   &.active {
    color: #ea6f5a;
   }
`;

export const NavSearchWapper = styled.div`
  position: relative;
  float: left;
  .slide-enter {
    transition: all .2s ease-out ;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all .2s ease-out ;
  }
  .slide-exit-active {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 28px;
    color: #969696;
    border-radius: 50%;
    cursor: pointer;
    &.focus{
      background-color: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin: 10px 0 0 20px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder{
    color: #999;
  }
  &.focus {
    width: 240px;
  }
`;

export const Addtion = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 58px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 10px;
  border: 1px solid #ec6149;
  margin-right: 15px;
  padding: 0 20px;
  font-size: 14px;
  cursor: pointer;
  &.reg{
    color: #ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`;

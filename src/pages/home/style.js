import styled from 'styled-components';

// home
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-image{
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  padding-top: 30px;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 20px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 12px;
  border: 1px solid #ccc;
`;

// Topic
export const TopicWrapper = styled.div`
  padding: 20px 0 10px;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  font-size: 14px;
  color: #dcdcdc;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    float: left;
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

// List
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .list-pic{
    float: right;
    display: block;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    margin-bottom: 10px;
  }
  .desc{
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;

// Recommend
export const RecommendWrapper = styled.div`
  width: 280px;
  margin-bottom: 30px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
  cursor: pointer;
`;

// Writer
export const WriteWrapper = styled.div`
  width: 278px;
  height: 300px;
  line-height: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  text-align: center;
`;

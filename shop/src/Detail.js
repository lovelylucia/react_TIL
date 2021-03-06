import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

let Box = styled.div`
      padding:20px;
      background:#f1f1f1;
    `;

let 제목 = styled.h4`
  font-size:25px;
`

function Detail(props){

    let [box, box변경] = useState(0);
    
    // useEffect(()=>{
    //   setTimeout(()=>{ box변경.delay },2000);
    // });

    let { id } = useParams();
    let history = useHistory();

    let 찾은상품 = props.shoes.find(function(상품){
      return 상품.id == id  
    });

    return(
    <div className="container">
        <Box>
          <제목 className='red'>상세페이지</제목>
        </Box>
        <div className="row">
          <div className="col-md-6">
            <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width='100%' alt='신발이미지'/>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='100%' alt='신발이미지'/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <Info 재고={props.재고}></Info>
            <button className="btn btn-danger" onClick={()=>{ props.재고변경([9,11,12]) }}>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
                history.push('/');
            }}>뒤로가기</button> 
          </div>
        </div>
    </div>
    ) 
  }


  function Info(props){
    return(
      <p>재고 : {props.재고[0]}</p>
    )
  }

  export default Detail
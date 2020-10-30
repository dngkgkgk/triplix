import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import { CommentButton } from './DetailStyle';
//import { CommentButton } from '../DetailStyle';
//import db from '../../../firebase';
//import firebase from 'firebase/app';
import { useStateValue } from '../../StateProvider';
import { useSelector } from 'react-redux';

function ChatInput(props) {
    console.log(props.id.bId);
   
    const [comment, setComment] = useState({
        comment: '',
    });

    const changeValue = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };
    console.log(comment);

    var blank_pattern = /^\s+|\s+$/g;

    const isLogin = useSelector((store) => store.isLogin);

    const sendMessage = (e) => {
        e.preventDefault();
        if (!isLogin) {
            alert('로그인 후의 이용바랍니다');
        }
        // else if (setComment === '' || setComment === null) {
        //     alert('댓글을 작성해주세요');
        // } else if (setComment.replace(blank_pattern, '') === '') {
        //     alert(' 공백만 입력되었습니다 ');
        // } 
        else if (isLogin) {
            commentPost();
            alert('완료?');
            console.log(comment);
        }
        setComment('');
    };

    const commentPost = () => {
        fetch("http://localhost:8000/comment/save/" +props.id.bId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(comment),
        })
            .then(res=>res.text())
            .then(res=>{
                if(res==="ok"){
                    setComment(res);
                    
                }
            });
    }

    return (
        <form
            style={{
                display: 'flex',
                marginTop: '30px',
                width: '100%',
                height: '46px',
                borderRadius: '29.5px',
                boxSizing: 'border-box',
                border: '1px solid #FFFFFF',
            }}
        >
            <Input
                placeholder="댓글 쓰기"
                inputProps={{ 'aria-label': 'description' }}
                style={{
                    color: 'white',
                    paddingLeft: '15px',
                    width: '85%',
                    height: '46px',
                }}
                // value={comment}
                name="comment"
                onChange={changeValue}
                
                />
                
            <CommentButton onClick={sendMessage}>게시</CommentButton>
        </form>
    );
}

export default ChatInput;

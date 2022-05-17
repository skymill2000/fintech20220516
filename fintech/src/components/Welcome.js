const Welcome = ({username, age}) =>{
    console.log(username, age);
    return <h2>안녕하세요 {username}님 나이는 {age}세 입니다</h2>
}

export default Welcome;
//외부에서 참조할수 있게 export
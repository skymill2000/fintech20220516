import React,{ useState } from 'react'
import Welcome from './Welcome';

const ArrayMap = () => {
  const [users, setUsers] = useState([
    { name: "홍길동", age: 12, height: 180 },
    { name: "동", age: 18, height: 180 },
    { name: "길동", age: 16, height: 180 },
  ]);
  //state useState 를 통해서 데이터를 선언
  
  return (
    <div>
        {
            users.map(({name, age})=>{
                // return (<p>{user.age}세 {user.name} 님 안녕하세요</p>)
                return (<Welcome username={name} age={age}></Welcome>)
            })
        }
        {/* <Welcome username={users[0].name} age={users[0].age}></Welcome>
        <Welcome username={users[1].name} age={users[1].age}></Welcome>
        <Welcome username={users[2].name} age={users[2].age}></Welcome> */}
    </div>
  )
}

export default ArrayMap
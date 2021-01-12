import React from 'react'
import { Table } from 'reactstrap';
import { getListStudent } from '../services'
export default function Home() {
    const [listStudent, setListStudent] = React.useState([])

    React.useEffect(()=>{
        getListStudent().then(res => {
            setListStudent(res.data.Student)
        })
    },[])
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                {listStudent ? listStudent.map(student => 
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.university}</td>
                    </tr>
                )
                : ""}
                </tbody>
            </Table>
        </div>
    )
}



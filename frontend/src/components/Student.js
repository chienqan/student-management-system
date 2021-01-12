import React from 'react'
import { getListStudent, deleteStudent, updateStudent, createNewStudent } from '../services'
import { Table, Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Student() {
    const [listStudent, setListStudent] = React.useState([])
    const [modal, setModal] = React.useState(false);
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState();
    const [university, setUniversity] = React.useState();
    const [studentId, setStudentId] = React.useState()
    const [isUpdate, setIsUpdate] = React.useState();
    const onUpdate = (student) => {
        setIsUpdate(true)
        setStudentId(student._id)
        setName(student.name)
        setAge(student.age)
        setUniversity(student.university)
        setModal(!modal)
    };
    const toggle = (student, isNew) => {
        setModal(!modal)
    };
    const onCreate = (student, isNew) => {
        setIsUpdate(false)
        setName("")
        setAge("")
        setUniversity("")
        setModal(!modal)
    };
    React.useEffect(() => {
        fetchList()
    }, [])

    const onSubmitForm = () => {
        if (isUpdate) {
            let student = { "_id": studentId, "name": name, "age": age, "university": university }
            updateStudent(student).then(() => {
                fetchList()
            })
        } else {
            let student = { "name": name, "age": age, "university": university }
            createNewStudent(student).then(() => fetchList())
        }
        setStudentId("")
        setName("")
        setAge("")
        setUniversity("")
        setModal(!modal)
    }


    const fetchList = () => {
        getListStudent().then(res => {
            setListStudent(res.data.Student)
        })
    }
    const deleteAStudent = (studentId) => {
        deleteStudent(studentId).then(() => fetchList())
    }
    return (
        <div>
            <Button color="success" style={{ "margin": "10px" }} onClick={onCreate}>Create New</Button>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>University</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listStudent ? listStudent.map(student =>
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.university}</td>
                            <td>
                                <Button color="danger" style={{ "marginRight": "10px" }} onClick={() => deleteAStudent(student._id)}>Delete</Button>
                                <Button onClick={() => onUpdate(student, false)}>Edit</Button>
                            </td>
                        </tr>
                    )
                        : ""}
                </tbody>
            </Table>
            <div>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Student</ModalHeader>
                    <ModalBody>
                        <Label for="nameBox">Name</Label>
                        <Input value={name} type="text" name="name" id="nameBox" onChange={e => setName(e.target.value)} />
                        <Label for="ageBox">Age</Label>
                        <Input value={age} type="text" name="age" id="ageBox" onChange={e => setAge(e.target.value)} />
                        <Label for="universityBox">University</Label>
                        <Input value={university} type="text" name="university" id="universityBox" onChange={e => setUniversity(e.target.value)} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => onSubmitForm(isUpdate)}>OK</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>

    )
}



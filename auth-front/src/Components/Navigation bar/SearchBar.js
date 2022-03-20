import React,{ useState} from 'react'
import {FormControl, Button, Container, Form} from 'react-bootstrap'
import { useSelector } from 'react-redux'
function SearchBar({ props }) {
    const gigs = useSelector((state) => state.GigReducer.gigs)

    const [filter,setFilter]= useState('')
     gigs.filter(item=>{ 
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter().toString().toLowerCase()))
    })
    return (
        <div>
            <Container fluid>
                <Form className="d-flex" >
                    <FormControl
                        style={{width: "300px"}}                       
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setFilter(e.target.value)} value={filter}
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </div>
    )
}

export default SearchBar
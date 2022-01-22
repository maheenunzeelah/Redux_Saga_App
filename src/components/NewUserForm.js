import { useState } from "react";
import {Form, FormGroup,Button,Input,Label} from 'reactstrap';

function NewUserForm({onSubmit}){
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const handleSubmit=(e)=>{
     e.preventDefault();
     e.stopPropagation()
     onSubmit(firstName,lastName)
     setFirstName('');
     setLastName('');
    }
    return(
       <Form onSubmit={handleSubmit}>
           <FormGroup>
               <Label>First Name</Label>
               <Input required placeholder="Enter First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
           </FormGroup>
           <FormGroup>
               <Label>Last Name</Label>
               <Input required placeholder="Enter First Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
           </FormGroup>
           <FormGroup>
           <Button block color="primary" type="submit">Create</Button>
           </FormGroup>
       </Form>
    )
}

export default NewUserForm;
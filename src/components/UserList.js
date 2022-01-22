import {Button, ListGroup, ListGroupItem} from 'reactstrap';
function UserList({users,onDelete}){
    console.log(users)
    return(
      <ListGroup>
          {users && users.sort((a,b)=>{
            if(a.firstName>b.firstName){
                return 1;
            }
            else if(b.firstName>a.firstName){
                return -1;
            }
            else if(a.lastName>b.lastName){
                return 1;
            }
            else if(b.lastName>a.lastName){
                return -1;
            }
            else{
                return 0;
            }

          }).map(us=>{
              return <ListGroupItem key={us.id}>
                  <section style={{display:"flex"}}>
                      <div style={{flexGrow:1,margin:"auto 0"}}> {us.firstName} {us.lastName} </div>
                      <div>
                      <Button outline color="danger" onClick={()=>{onDelete({userId:us.id})}}>Delete</Button>
                      </div>
                  </section>
              
                     </ListGroupItem>
          })}
      </ListGroup>
    )
}

export default UserList;
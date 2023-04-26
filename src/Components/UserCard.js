import React from 'react'
import Card from 'react-bootstrap/Card';
function UserCard({ user }) {
  return (
    <>

      <div className="Na">
        <Card style={{ width: '270px', backgroundColor: 'pink', padding: '10px', margin:"20px", borderRadius:"12px", boxShadow:"gray 15px 8px 10px"}}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text><u>{user.email}</u></Card.Text>
            <Card.Text>
              {user.address.street},   {user.address.suite},   {user.address.city}
            </Card.Text>

          </Card.Body>
        </Card>
      </div>

    </>
  )
}

export default UserCard;
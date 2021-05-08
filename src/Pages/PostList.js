import React,{useState,useEffect} from 'react'


import firebase from '../lib/firebase'

import{
    container,
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap'
function PostList() {
    const [ postCollection, setPostCollection ] = useState({})

    useEffect( () => {
        const database = firebase.database()
        const postsRef = database.ref("/posts")
        postsRef.on("value", snapshot => {
            console.log( snapshot.val() )
            setPostCollection( snapshot.val() )
        })
    },[])


    return(
        <container className ="mt-3">
            <Row>
            {
                Object.keys( postCollection ).map ( key =>{
                let post = postCollection[key]
                let { postTitle, postContent, postCategory} =post
                
                
                return (
                
                    <Col xs= "12" md="6">
                    <Card className="bg-success text-white p-3 mt-3 border rounded">
            <CardImg top width="100%" src="exampleFile" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{postTitle}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>{postContent}</CardText>
              <p className ="text-right text-muted mb-0">{postCategory}</p>
              <Button>Button</Button>
            </CardBody>
          </Card>
                    </Col>
                
                )
            }
                )
                }

            </Row>
        </container>
        )
}
export default PostList
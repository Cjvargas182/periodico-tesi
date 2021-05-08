import firebase from '../../lib/firebase'

import {
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap'

function PostCard( props ){
    const deleteHandler = event => {
        let postKey = event.target.dataset.postKey
        console.log( postKey )
        const database = firebase.database()
        const postRef = database.ref(`/posts/${postKey}`)
        postRef.remove()
        
    }


    let { postTitle, postContent, postCategory, createDate } = props.postData

    let postKey = props.postKey
    return(
        <Col xs="12" md="6">
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h5">{postTitle}</CardTitle>
                    <CardText>{postContent}</CardText>
                    <p className="text-right text-muted mb-0">{postCategory}</p>
                    {
                        createDate && <p className="text-right text-muted mb-0">{createDate}</p>
                    }
                    <Button 
                        data-post-key={ postKey }
                        onClick = { deleteHandler }
                    >Borrar post</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PostCard
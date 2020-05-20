import React from 'react';
import { Modal } from 'react-bootstrap';



const AddResourceForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                
            >
            <Modal.Header closeButton>
            <Modal.Title>New Resource</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <Form layout="vertical" >
                    <Form.Label>Name</Form.Label> 
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input the name of the resource!' }],
                        })(
                            <Form.Control type="text" />
                        )}
                    
                </Form>
                </Modal.Body>
                <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onCreate}>
          Create
          </Button>
        </Modal.Footer>
            </Modal>
        );
    }
);

export default AddResourceForm

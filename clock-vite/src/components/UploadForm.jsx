import React from "react";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap"

const UploadForm = () => {
    const [file, setFile] = useState(null);

    function handleChange(e) {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    

    return (
        <>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Upload File </Form.Label>
                <Form.Control type="file"  >
      
                </Form.Control>
                <Button type="submit">Upload</Button>
            </Form.Group>
        </Form>
        </>
    )
}

export default UploadForm;
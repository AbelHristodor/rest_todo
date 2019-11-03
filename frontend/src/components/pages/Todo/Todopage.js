import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import TodoList from './TodoList'
import Addtodo from './Addtodo'

export default function Todopage() {
    return (
        <div>
            <Row className="my-3">
                <Col md="2"/>
                    <Col md="8">
                        <Container>
                            <Addtodo />
                        </Container>
                    </Col>
                <Col md="2"/>
            </Row>
            <Row>
                <Col md="2"/>
                <Col md="8">
                    <Container className="my-4">
                        <TodoList />
                    </Container>
                </Col>
                <Col md="2"/>
            </Row>
        </div>
    )
}

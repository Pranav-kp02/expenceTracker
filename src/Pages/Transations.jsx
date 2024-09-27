import React, { useState } from 'react';
import './Transations.css';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteInputData, getInputData, selectTotalExpense } from '../redux/inputData';



const Transations = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.data);
  const totalExpense = useSelector(selectTotalExpense);

  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!expense || isNaN(amount) || amount <= 0) {
      return;
    }

    const newItem = {
      id: editId ?? Date.now(),
      expense,
      amount: parseFloat(amount)
    };

    dispatch(getInputData(newItem));

    setExpense('');
    setAmount('');
    setEditId(null);
  };

  const handleEdit = (item) => {
    setExpense(item.expense);
    setAmount(item.amount.toString());
    setEditId(item.id);
  };

  return (
    <Container >
      <Row className="justify-content-center">
        <Col md={5} className='form '>
          <Form onSubmit={handleSubmit} className='wrapper'>
            <Form.Group className="mb-3">
              <Form.Label>Enter Expense Details</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter detail"
                onChange={(event) => setExpense(event.target.value)}
                value={expense}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Amount"
                onChange={(event) => setAmount(event.target.value)}
                value={amount}
              />
            </Form.Group>
            <Button type="submit">
              {editId ? 'Update' : 'Submit'}
            </Button>
          </Form>

          <hr />

          <div className='total-expense'>
            <h4>Total Expense: ₹{totalExpense.toFixed(2)}/-</h4>
          </div>

          <hr />


          <ul className='list'>
            {input.map((item) => (
              <li key={item.id} className='list-item'>
                {`${item.expense} = ₹${item.amount.toFixed(2)}/-`}
                <span className='icons'>
                  <Trash onClick={() => dispatch(deleteInputData(item.id))} />
                </span>
                <span className='icons2'>
                  <PencilSquare onClick={() => handleEdit(item)} />
                </span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Transations;

import React, { useState, useReducer } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../utils/api';

import Home from '../components/Home';
import BookingForm from '../components/BookingForm';
import ConfirmedBooking from '../components/ConfirmedBooking';


const Main = () => {

  const [formData, setFormData] = useState(null);

  const initialState = {availableTimes:  fetchAPI(new Date())}
  const updateTimes = (availableTimes, date) => {
    return {availableTimes: fetchAPI(new Date(date))}
  }
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();
  const submitForm = (formData) => {
      console.log('IN SUBMIT FORM', formData);
      if (submitAPI(formData)) {
          setFormData(formData);
          navigate("/confirmed");
      }
  }

  return (
    <main>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/reservations' element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
            <Route path="/confirmed" element={<ConfirmedBooking formData={formData} /> } />
        </Routes>
    </main>
  );
}

export default Main;
import React from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';  


const store = createStore(reducer);


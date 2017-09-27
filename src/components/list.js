import React from 'react';
import { Link } from 'react-router-dom'

const List = () =>
  <ul>
    <li><Link to="/bc">BC</Link></li>
    <li><Link to="/oy">Oy</Link></li>
    <li><Link to="/mjml">mjml</Link></li>
  </ul>

export default List

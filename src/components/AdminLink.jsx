import React from 'react';
import { Link } from 'react-router-dom';  // Adjust as per your routing setup


function AdminLink() {
  return (
    <Link to="/admin">Go to Admin Interface</Link>
  );
}

export default AdminLink;
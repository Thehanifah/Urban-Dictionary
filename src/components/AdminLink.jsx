import React from 'react';
import { Link } from 'react-router-dom';  // Adjust as per your routing setup


function AdminLink() {
  return (
    <Link to="http://127.0.0.1:5500/backend/admin.html">Go to Admin Interface</Link>
  );
}

export default AdminLink;
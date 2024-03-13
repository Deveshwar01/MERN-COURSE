import React, { useState } from 'react';

const UserDetails = () => {
  // Sample data of users
  const usersData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', contactNo: '1234567890', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', contactNo: '0987654321', age: 25 },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', contactNo: '5678901234', age: 35 }
    // Add more user objects as needed
  ];

  // State to hold the entered ID and found user details
  const [searchId, setSearchId] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  // Function to handle search buton Click
  const handleSearch = () => {
    const foundUser = usersData.find(user => user.id.toString() === searchId.toString());
    setUserDetails(foundUser);
  };

  return (
    <div>
      <h2>Search User</h2>
      <div>
        <label htmlFor="userId">Enter ID: </label>
        <input
          type="text"
          id="userId"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {userDetails ? (
          <div>
            <h3>User Details</h3>
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
            <p>Contact No: {userDetails.contactNo}</p>
            <p>Age: {userDetails.age}</p>
          </div>
        ) : (
          <p>No user found with ID {searchId}</p>
        )}
      </div>
    </div>
  );
};

export default UserDetails;

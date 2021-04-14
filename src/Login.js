import { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [notifications, setNotifications] = useState(false);
  const [staff, setStaff] = useState('');
  // console.log(name, email, phone, staff, bio, notifications);

  function onSubmit(e) {
    e.preventDefault();

    const user = [name, email, phone, bio, notifications, staff];

    console.log(user);
    setName('');
    setEmail('');
    setPhone('');
    setBio('');
    setNotifications(false);
    setStaff('');
  }

  function validate() {
    const validationErrors = [];
    if (!name) validationErrors.push('Please provide a name.');
    if (phone)
    if (bio.length > 280) validationErrors.push('Stop typing so much!');
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div>
          <p>Who are you</p>
          <label htmlFor="instructor">Instructor</label>
          <input
            name="staff"
            type="radio"
            id="instructor"
            checked={"instructor" === staff}
            onChange={(e) => setStaff(e.target.value)}
            value="instructor"
          />
          <label htmlFor="student">Student</label>
          <input
            name="staff"
            type="radio"
            id="student"
            checked={"student" === staff}
            onChange={(e) => setStaff(e.target.value)}
            value="student"
          />
        </div>
        <div>
          <label htmlFor="bio">Biography</label>
          <textarea
            name="bio"
            id="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </div>
        <div>
          <label htmlFor="notifications">Sign up for email notifications</label>
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            value={notifications}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

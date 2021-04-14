import {useState} from 'react';

function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bio, setBio] = useState('')
  const [notifications, setNotifications] = useState(false)
  const [staff, setStaff] =  useState('');
  console.log(name, email, phone, staff, bio, notifications);
  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" 
          onChange={(e)=> setName(e.target.value)}
          value={name}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" 
          onChange={(e)=> setEmail(e.target.value)}
          value={email}/>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" 
          onChange={(e)=> setPhone(e.target.value)}
          value={phone}/>
        </div>
        <div>
          <p>Who are you</p>
          <label htmlFor="instructor">Instructor</label>
          <input name='staff' type="radio" id="instructor" 
          onChange={(e)=> setStaff(e.target.value)}
          value='instructor'/>
          <label htmlFor="student">Student</label>
          <input name='staff' type="radio" id="student" 
          onChange={(e)=> setStaff(e.target.value)}
          value='student'/>
        </div>
        <div>
          <label htmlFor="bio">Biography</label>
          <textarea name="bio" id="bio"
          onChange={(e)=> setBio(e.target.value)}
          value={bio}></textarea>
        </div>
        <div>
          <label htmlFor="notifications">Sign up for email notifications</label>
          <input type="checkbox" id="notifications" 
          onChange={(e)=> setNotifications(e.target.checked)}
          value={notifications}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

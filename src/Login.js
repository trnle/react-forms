function Login() {
  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" />
        </div>
        <div>
          <p>Who are you</p>
          <label htmlFor="instructor">Instructor</label>
          <input type="radio" id="instructor" />
          <label htmlFor="student">Student</label>
          <input type="radio" id="student" />
        </div>
        <div>
          <label htmlFor="bio">Biography</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="notifications">Sign up for email notifications</label>
          <input type="checkbox" id="notifications" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

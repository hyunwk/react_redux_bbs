import "../Sign.css"
export default function SignIn() {
  return (
    <div className="login-container"> 
      <div className="login-title">Sign In</div>
      <form className="login-box">
        <div className="email">
          <label>EMAIL</label>
          <input className="login-input" type="text" name="email" />
        </div>
        <div className="password">
          <label>PASSWORD</label>
          <input className="login-input" type="password" name="password" />
        </div>
        <div className="submit">
          <button>
            Sign In 
          </button>
        </div>
      </form>
    </div>
  )
}

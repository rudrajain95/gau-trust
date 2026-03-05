export default function ResetPasswordPage() {
  return (
    <div style={{padding:"40px",fontFamily:"Arial"}}>
      <h1>Reset Admin Password</h1>

      <form method="POST" action="/api/reset-admin">
        <input
          name="username"
          placeholder="Username"
          style={{display:"block",marginBottom:"10px",padding:"10px",width:"300px"}}
        />

        <input
          name="password"
          type="password"
          placeholder="New Password"
          style={{display:"block",marginBottom:"10px",padding:"10px",width:"300px"}}
        />

        <button
          type="submit"
          style={{padding:"10px 20px",background:"green",color:"white"}}
        >
          Change Password
        </button>
      </form>
    </div>
  );
}

export default function ResetPage() {
  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h2>Reset Admin Password</h2>

      <input
        placeholder="New Password"
        style={{display:"block",marginTop:10,padding:10,width:300}}
      />

      <button
        style={{
          marginTop:15,
          padding:10,
          width:200,
          background:"green",
          color:"white",
          border:"none"
        }}
      >
        Save Password
      </button>
    </div>
  );
}

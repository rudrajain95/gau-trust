import { NextResponse } from "next/server";

export async function POST(req: Request){

const body = await req.json();

const mobile = body.mobile;

const otp = Math.floor(100000 + Math.random() * 900000);

const response = await fetch("https://www.fast2sms.com/dev/bulkV2",{

method:"POST",

headers:{
"authorization":process.env.FAST2SMS_KEY!,
"Content-Type":"application/json"
},

body:JSON.stringify({

route:"otp",

variables_values:otp,

numbers:mobile

})

});

return NextResponse.json({
success:true,
otp
});

}

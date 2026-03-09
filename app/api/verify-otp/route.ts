import { NextResponse } from "next/server";

export async function POST(req:Request){

const body = await req.json();

if(body.otp === body.userOtp){

return NextResponse.json({
success:true
});

}

return NextResponse.json({
success:false
});

}

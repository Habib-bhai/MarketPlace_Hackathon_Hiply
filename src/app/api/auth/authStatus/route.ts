import {type NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) return NextResponse.json({ isAuthenticated: false });

    jwt.verify(token, String(process.env.JWT_SECRET));
    return NextResponse.json({ isAuthenticated: true });
    //  eslint-disable-next-line
  } catch (error: any) {

    return NextResponse.json({ isAuthenticated: false, error: error.message });
  }
}
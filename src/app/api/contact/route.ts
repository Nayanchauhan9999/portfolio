import conntectDB from "@/utils/database/dbConnection";
import contactModel from "@/utils/models/contact";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await conntectDB();
    const body = await req.json();
    console.log(body);
    await contactModel.create(body);
    return NextResponse.json(body, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json(
    { message: "something went wrong" },
    {
      status: 500,
    }
  );
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await conntectDB();
    const res = await contactModel.find({});
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

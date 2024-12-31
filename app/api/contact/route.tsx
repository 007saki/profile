import { portfolioDB } from "@/app/lib"
import { NextRequest, NextResponse } from "next/server"


//GET
 export const GET=async()=>{
    try {
        const [response] = await portfolioDB.query(`SELECT * FROM contacts`) 
        return NextResponse.json(response)
    } catch (error) {
        NextResponse.json(`Could not fetch data: ${error}`)
    }
 }

//POST
// POST Method
export const POST = async (request: NextRequest) => {
    try {
        // Parse JSON body
        const { name, email, phone_contact, message }: { 
            name: string; 
            email: string; 
            phone_contact: string; 
            message: string; 
        } = await request.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json({
                success: false,
                error: "Name, email, and message are required fields.",
            });
        }

        // Prepare and execute query
        const query = `INSERT INTO contacts (name, email, phone_contact, message) VALUES (?, ?, ?, ?)`;
        const values = [name, email, phone_contact, message];
        await portfolioDB.query(query, values);

        // Return success response
        return NextResponse.json({
            success: true,
            message: "Contact added successfully.",
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: `Could not add contact: ${error}`,
        });
    }
};
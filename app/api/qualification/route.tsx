

import { portfolioDB } from "@/app/lib/mysql"
import { NextRequest, NextResponse } from "next/server"



export const GET=async()=>{
    try {
        const [response] = await portfolioDB.query('SELECT * FROM qualification')
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({message:'FAIL TO GET DATA'})
    }
}

export const POST=async(request:NextRequest)=>{
    try {
        const {qualification_name ,qualification_category ,qualification_typ ,_year ,institution_details} = await request.json()
        const value = [qualification_name ,qualification_category ,qualification_typ ,_year ,institution_details]
        const query = `INSERT INTO qualification (qualification_name ,qualification_category ,qualification_typ ,_year ,institution_details) VALUES (?,?,?,?,?)`
        await portfolioDB.query(query,value)
        return NextResponse.json({message:`INSERT SUCCESSFUL`})
    } catch (error) {
        return NextResponse.json({message:`INSERT FAILED`})
    }

}
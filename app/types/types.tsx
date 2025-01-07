
export type educationType={
    id:number,
    institution_name:string,
    address:string,
    contact:string,
    description:string,
}


export type institutionType={
id:number,
institution_name:string,
address:string,
contact:string,
description:string,
}

export type messengerType={
    name:string,
    email:string,
    phone:string,
    subject:string,
    message:string,
    _status:string,
}


export type qualificationType={
    qualification_name:string,
    qualification_category:string,
    qualification_typ:string,
    _year:number,
    institution_details:number,
}
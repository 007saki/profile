//Define Post Education Object
export const postEducation = async (
    id: number,
    institution_name: string,
    address: string,
    contact: string,
    description: string,
) => {
try {
    //validate
    if (!institution_name || !address || !contact || !description) {
    throw new Error(`Required field should not be empty`);
    }
    //store value
    const storeValue = { institution_name, address, contact, description }
    //send
    const response = await fetch(`http://localhost:3000/api/education`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(storeValue),
    });
    if (response.ok) {
    alert("RESPONSE IS OK, POST SUCCESSFUL");
    }
} catch (error) {
    throw new Error(`FAIL TO POST: ${error}`);
}
};
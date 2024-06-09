import Notes from "../model/notes.model.js"   //iss file ko import krne se database save hua

export const getNotes = async(req,res)=>{
    try {
        const notes = await Notes.find();
        res.status(200).json(notes)    //200 is the status code for success
    } catch (error) {
        console.log("Eroor: ", error);
        res.status(500).json(error);    //for internal error
    }
}
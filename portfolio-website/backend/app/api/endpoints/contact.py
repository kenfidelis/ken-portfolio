from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

@router.post("/", summary="Submit a contact form")
async def submit_contact_form(form: ContactForm):
    # Process the contact form (e.g., send email or store data)
    # Here, we simply return the submitted data for demonstration
    if not form.name or not form.email or not form.message:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid data")
    return {"message": "Form submitted successfully", "data": form.dict()}

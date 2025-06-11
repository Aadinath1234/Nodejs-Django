from pydantic import BaseModel
from datetime import date

class TaskBase(BaseModel):
    title: str
    description: str | None = None
    effort: int
    due_date: date

class TaskCreate(TaskBase):
    pass

class TaskUpdate(TaskBase):
    pass

class TaskOut(TaskBase):
    id: int
    user_id: int
         
    model_config = {
        "from_attributes": True
    }
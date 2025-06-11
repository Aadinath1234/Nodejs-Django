from sqlmodel import SQLModel, Field
from datetime import date

class Task(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str
    description: str | None = None
    effort: str
    due_date: date
    user_id: int

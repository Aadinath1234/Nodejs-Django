from sqlmodel import create_engine, SQLModel, Session
from app.models import Task
from datetime import date


DATABASE_URL = "sqlite:///./tasks.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
    
  

def test_db_connection():
    with Session(engine) as session:
        item = Task(
            title="Sample Task",
            description="this database is checking connection",
            effort=3,
            due_date=date.today(),
            user_id=1  # Make sure this user exists, or skip FK constraint if needed
        )
        session.add(item)
        session.commit()
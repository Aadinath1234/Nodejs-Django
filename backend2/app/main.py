from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware
# from jose import JWTError, jwt

from app.database import test_db_connection


from app import database, crud, excel_export
from app.models import Task
from app.schemas import TaskCreate, TaskUpdate, TaskOut

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()

# CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or ["*"] to allow all origins (not recommended for prod)
    allow_credentials=True,
    allow_methods=["*"],  # Allows GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],  # Allows Authorization, Content-Type, etc.
)



# Dependency for DB session
def get_db():
    db = Session(database.engine)
    try:
        yield db
    finally:
        db.close()


# Run when app starts
@app.on_event("startup")
def on_startup():
    database.create_db_and_tables()
    test_db_connection()

#original
@app.post("/tasks/", response_model=TaskOut)
def create_task_endpoint(task: TaskCreate, db: Session = Depends(get_db)):
    user_id = 1  # TODO: Replace with real user ID from JWT
    return crud.create_task(db=db, task=task, user_id=user_id)







@app.get("/tasks/", response_model=list[TaskOut])
def read_tasks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    user_id = 1  # TODO: Replace with real user ID from JWT
    return crud.get_tasks(db=db, user_id=user_id, skip=skip, limit=limit)


@app.get("/tasks/{task_id}", response_model=TaskOut)
def read_task(task_id: int, db: Session = Depends(get_db)):
    task = crud.get_task(db=db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task


@app.put("/tasks/{task_id}", response_model=TaskOut)
def update_task_endpoint(task_id: int, task: TaskUpdate, db: Session = Depends(get_db)):
    updated_task = crud.update_task(db=db, task_id=task_id, task=task)
    if updated_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return updated_task


@app.delete("/tasks/{task_id}", response_model=TaskOut)
def delete_task_endpoint(task_id: int, db: Session = Depends(get_db)):
    deleted_task = crud.delete_task(db=db, task_id=task_id)
    if deleted_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return deleted_task


@app.get("/tasks/export/")
def export_tasks(db: Session = Depends(get_db)):
    user_id = 1  # TODO: Replace with actual user ID from token
    tasks = crud.get_tasks(db=db, user_id=user_id)
    return excel_export.generate_excel(tasks)

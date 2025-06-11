from openpyxl import Workbook
from io import BytesIO
from fastapi.responses import StreamingResponse

def generate_excel(tasks):
    wb = Workbook()
    ws = wb.active
    ws.append(["ID", "Title", "Description", "Effort", "Due Date"])

    for task in tasks:
        ws.append([task.id, task.title, task.description, task.effort, task.due_date])

    stream = BytesIO()
    wb.save(stream)
    stream.seek(0)
    return StreamingResponse(stream, media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", headers={"Content-Disposition": "attachment; filename=tasks.xlsx"})

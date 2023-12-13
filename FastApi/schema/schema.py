def individual__serial(todo)->dict:
    return {
        "id": str(todo["_id"]),
        "name": str(todo["name"]),
        "description": str(todo["description"]),
        "complete": str(todo["complete"]),
    }

def list__serial(todos)->list:
    return[individual__serial(todo) for todo in todos]
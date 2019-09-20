from api import app

@app.route('/')
def health():
    return {'message': 'uschedule API is alive'}

@app.route('/rooms')
def search_all_rooms():
    # Eventually, get them from the database
    # For now, this is dumb
    return {'rooms': [f'room{i}' for i in range(10)]}

@app.route('/rooms', methods=['POST'])
def create_room():
    # Here is where you would create a room and add to the database
    return {'created': True}

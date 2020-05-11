"""Uschedule Flask App Configuration"""

from datetime import datetime
from decimal import Decimal
from flask import Flask, Response, jsonify
from flask.json import JSONEncoder

# Custom Flask Object to allow for CORS
# pylint: disable=W0612
class Uschedule(Flask):
    def process_response(self, response):
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
        response.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,HEAD,OPTIONS'
        response.headers['X-Application-Identifier'] = 'Uschedule v1'
        return response

# Custom Response so we don't have to jsonify everything (thanks Miguel Grinberg)
# pylint: disable=W0612
class UscheduleResponse(Response):
    @classmethod
    def force_type(cls, response, environ=None):
        if isinstance(response, dict):
            response = jsonify(response)
        return super(UscheduleResponse, cls).force_type(response, environ)

# Custom JSON Encoder to support ISO-8601
class UscheduleJSONEncoder(JSONEncoder):
    def default(self, o): # pylint: disable=E0202
        if isinstance(o, datetime):
            return o.isoformat()
        if isinstance(o, Decimal):
            return float(o)
        return JSONEncoder.default(self, o)

class ApiConflictError(Exception):
    def __init__(self, *args, **kwargs):
        Exception.__init__(self, *args, **kwargs)

class ApiNotFoundError(Exception):
    def __init__(self, *args, **kwargs):
        Exception.__init__(self, *args, **kwargs)

class ApiValidationError(Exception):
    def __init__(self, *args, **kwargs):
        Exception.__init__(self, *args, **kwargs)

app = Uschedule(__name__)
app.response_class = UscheduleResponse
app.json_encoder = UscheduleJSONEncoder
app.config.from_object('settings')

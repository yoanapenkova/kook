from django.db import models
from mongoengine import Document, fields

class Ingredient(Document):
    name = fields.StringField(required=True)
    quantity = fields.IntField()

    meta = {
        'collection': 'ingredients'  # Make sure to specify the correct collection name
    }

    def __str__(self):
        return self.name
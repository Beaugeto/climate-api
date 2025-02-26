from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("<h1>Hello and welcome to my first <u>Django</u> project</h1>")

import pymongo

client = pymongo.MongoClient('mongodb+srv://beaugeto511:Coco5000.@beau01.05zgl.mongodb.net/')

# Defining the Db name
dbname = client['ClimateDB']

# Defining the collection name
collection_weather = dbname['weather_readings']

# Defining users collection
collection_users = dbname['users']
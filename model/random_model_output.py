from numpy import random
import pandas as pd
import sqlite3
import json


def generate_random_output():
    DB = 'anime.db'
    with sqlite3.connect(DB) as conn:
        random_animes = pd.read_sql('SELECT anime_id FROM animes ORDER BY RANDOM() LIMIT 10;',conn).anime_id.tolist()

    random_output = {anime:random.randint(100) for anime in random_animes}
    random_output = dict(sorted(random_output.items(), key=lambda item: item[1], reverse = True))

    with open("random_model_output.json", "w") as outfile:
        json.dump(random_output, outfile)


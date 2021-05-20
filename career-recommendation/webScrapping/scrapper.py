import requests
from bs4 import BeautifulSoup
import re
import pandas as pd
import json

baseUrl = 'https://orientacion.universia.net.co/'
ciudades ={
    "Apartado": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-apartado/80.html",
    "Arauca": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-arauca/81.html",
    "Armenia": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-armenia/31.html",
    "Barrancabermeja": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-barrancabermeja/41.html",
    "Barranquilla":"https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-barranquilla/1.html",
    "Bello": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-bello/54.html",
    "Manizales": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-manizales/27.html",
    "Ibague": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-ibague/55.html",
    "Girardota": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-girardot/38.html",
    "El Espinal": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-el-espinal/84.html",
    "Cundinamarca": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-cundinamarca/69.html",
    "Cartago": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-cartago/47.html",
    "Cartagena": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-cartagena/28.html",
    "Cali": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-cali/6.html",
    "Cucuta": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-cucuta/29.html",
    "Bucaramanga": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-bucaramanga/34.html",
    "Bogota": "https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-bogota/2.html",
    'Medellin': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-medellin/26.html',
    'Monteria': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-monteria/77.html',
    'Neiva': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-neiva/79.html',
    'Palmira': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-palmira/50.html',
    'Pasto': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-pasto/78.html',
    'Pereira': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-pereira/3.html',
    'Popayan': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-popayan/75.html',
    'Quibdo': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-quibdo/83.html',
    'Santa marta': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-santa-marta/82.html',
    'Tolima': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-tolima/72.html',
    'Tunja': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-tunja/94.html',
    'Valle': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-valle/71.html',
    'Villavicencio': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-villavicencio/56.html',
    'Virtual': 'https://orientacion.universia.net.co/buscar8/carreras-universitarias-en-virtual/97.html'
}




def get_search_results(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')
    return soup

def get_all_cities():
    global ciudades
    cities = {}
    for key, value in ciudades.items():
        print(key)
        cities[key] = get_all_carreers(get_search_results(value))
    ciudades = cities


def get_all_carreers(soup):
    pages = []
    for a in soup.findAll("article"):
        link=a.find('a')
        r = requests.get(baseUrl+str(link['href']))
        page =get_table(BeautifulSoup(r.content, 'html.parser') ) 
        pages.append(page) 
    return pages

def file_print(text):
    f = open("file.txt", "w", encoding='utf-8')
    f.write(text)
    f.close()

def get_data_from_file():
    f = open("file.txt", "r", encoding='utf-8')
    return f.read().split("xd"*5)[:-1]


def get_table(soup):
    
    description = ""
    details = ""
    titles =""
    name = ""
    degree = ""
    data = []
    try:
        details = soup.find("div", {"class": "DescrpBox"}).find("div", {"class": "SchlTxtNew"}).find('p').getText().strip(" \n ")
    except:
        details = ""
    try:
        description = soup.find("div", {"class": "ColBoxMarg"}).find('p').getText().strip(" \n ")
    except:
        description = ""

    try:
        table = soup.find("table", {"class": "TablaSnies"})
        rows = table.findAll('tr')
        data = [[td.findChildren(text=True) for td in tr.findAll("td")] for tr in rows]
    except:
        table = ""
        rows = ""
        data = []
        
    try:
        titles = soup.findAll("h1", {"class": "nopadding"})
        name = titles[0].text.strip(" \n ")
        degree = titles[1].text.strip(" \n ")
    except:
        titles = ""
        name = ""
        degree = ""
        
    #[['\n', '\n             SNIES:\n            ', '\n'], ['\n            103166\n           ']]
    data2={}
    data2["pregrado"] = degree
    data2["Universidad"] = name
    data2["detalles"] = details
    data2['Descripcion'] = description
    for attr in data:
        try:
            column = attr[0][0]
            value =  attr[1][0]
            data2[column] = value
        except:
            continue
    return data2

get_all_cities()
file_print(json.dumps(ciudades))


"""

careers = get_data_from_file()
df = pd.DataFrame.from_dict(get_tables(careers))
print(df[df['Nivel de formación'] == "Pregrado"])
"""


    
    

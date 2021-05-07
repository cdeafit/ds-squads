import requests
from bs4 import BeautifulSoup
import re
import pandas as pd
baseUrl = 'https://orientacion.universia.net.co/'

def get_search_results():
    url = baseUrl + "/buscar5/pregrados-en-medellin/1/26.html"
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')
    return soup.prettify()

def get_all_carreers():
    soup = get_search_results()
    pages = []
    for a in soup.findAll("article"):
        link=a.find('a')
        r = requests.get(baseUrl+str(link['href']))
        page = BeautifulSoup(r.content, 'html.parser') 
        pages.append(page.prettify()) 
    return pages

def file_print(text):
    f = open("file2.txt", "w", encoding='utf-8')
    f.write(text)
    f.close()

def get_data_from_file():
    f = open("file.txt", "r", encoding='utf-8')
    return f.read().split("xd"*5)[:-1]




def get_table(soup):
    soup = BeautifulSoup(soup, 'html.parser')
    table = soup.find("table", {"class": "TablaSnies"})
    rows = table.findAll('tr')
    name = soup.find("h1", {"class": "nopadding"})
    #[['\n', '\n             SNIES:\n            ', '\n'], ['\n            103166\n           ']]
    data = [[td.findChildren(text=True) for td in tr.findAll("td")] for tr in rows]
    data2={}
    data2["Pregrado"] = name
    for attr in data:
        try:
            column = attr[0][1].strip(" \n ")[:-1]
            value =  attr[1][0].strip(" \n ")
            data2[column] = value
        except:
            continue
    return data2

def get_tables(careers):
    careers_data = []
    for career in careers:
        careers_data.append(get_table(career))
    return careers_data
    
careers = get_data_from_file()
df = pd.DataFrame.from_dict(get_tables(careers))
print(df[df['Nivel de formación'] == "Pregrado"])

    
    

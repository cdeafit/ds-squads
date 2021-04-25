from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def main():
    Testcareers = ['PSICOLOGÍA', 'Ingenieria de sistemas', 'CIENCIAS SOCIALES, HUMANIDADES O PSICOLOGÍA','ARTES COMUNICACIÓN O DISEÑO', 'ENFERMERÍA O SALUD', 'CONTADURÍA Y AFINES', 'CIENCIAS SOCIALES', 'HUMANIDADES', 'CIENCIAS EXACTAS, INGENIERÍA O ECONOMÍA']
    url = 'https://www.google.com/?hl=es'
    driver = webdriver.Chrome()
    driver.get(url)
    search = driver.find_element_by_name('q')
    search.send_keys(Testcareers[0] + ' universidades medellin')
    search.send_keys(Keys.RETURN)
    driver.quit()
    
if __name__ == '__main__':
    main()
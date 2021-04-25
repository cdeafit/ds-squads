from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def main():
    Testcareers = ['PSICOLOGÍA', 'Ingenieria de sistemas', 'CIENCIAS SOCIALES, HUMANIDADES O PSICOLOGÍA','ARTES COMUNICACIÓN O DISEÑO', 'ENFERMERÍA O SALUD', 'CONTADURÍA Y AFINES', 'CIENCIAS SOCIALES', 'HUMANIDADES', 'CIENCIAS EXACTAS, INGENIERÍA O ECONOMÍA']
    #Util para cuando se quiera implementar la busqueda en multiples paginas

    """
    url = 'https://www.google.com/?hl=es'
    driver = webdriver.Chrome()
    driver.get(url)
    search = driver.find_element_by_name('q')
    search.send_keys(Testcareers[0] + ' universidades medellin')
    search.send_keys(Keys.RETURN)
    
    
    url = 'https://www.eafit.edu.co/'
    driver = webdriver.Chrome()
    driver.get(url)
    searchCareer = driver.find_element_by_id('ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox')
    searchCareer.send_keys(Testcareers[1])
    searchCareer.send_keys(Keys.RETURN)

    openResult = driver.find_element_by_xpath('//*[@id="___gcse_0"]/div/div/div[1]/div[6]/div[2]/div[1]/div/div[1]/div[1]/div[1]/div[1]/div/a').click()
    driver.implicitly_wait(5) # seconds
    openSummary = driver.find_element_by_class_name('btn btn-primary').click()
    """
    url = 'https://www.google.com/?hl=es'
    driver = webdriver.Chrome()
    driver.get(url)
    search = driver.find_element_by_name('q')
    search.send_keys(Testcareers[0] + ' universidades medellin')
    search.send_keys(Keys.RETURN)
    driver.quit()
    
if __name__ == '__main__':
    main()
import cv2
import numpy as np
from matplotlib import pyplot as plt

img = cv2.imread('metal1.jpg',0)
# Blurring 
blurred = cv2.bilateralFilter(img,15,150,150)
img = np.uint8(img)

v = np.median(blurred)
sigma = 0.33

lower = int(max(0,(1-sigma)*v))
upper = int(min(255,(1+sigma)*v))

edgesBlurred = cv2.Canny(img,lower,upper)

high, thresh_im = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
low = 0.5*high
edgesNormal = cv2.Canny(img,low,high)


"""
#Normal - Normal Edges
plt.subplot(121),plt.imshow(img, cmap= 'gray')
plt.title('Normal Image'), plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(edgesNormal, cmap= 'gray')
plt.title('Edges Image'), plt.xticks([]), plt.yticks([])
"""
#Blurred - Blurred Edges
plt.subplot(121),plt.imshow(blurred, cmap= 'gray')
plt.title('Blurred Image'), plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(edgesBlurred, cmap= 'gray')
plt.title('Edges Image'), plt.xticks([]), plt.yticks([])

plt.show()
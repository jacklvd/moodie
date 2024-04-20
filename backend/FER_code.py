import cv2
from fer import FER
from keras.optimizers import Adam

img = cv2.imread("12.jpeg")
detector = FER(mtcnn=True)
result = detector.top_emotion(img)
print(result)